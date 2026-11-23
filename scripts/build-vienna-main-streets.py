#!/usr/bin/env python3
"""Compact the official Vienna Hauptstrasse WFS export for the browser map."""

import json
import sys
from pathlib import Path


def district_number(code):
    try:
        return int(str(code)[3:5])
    except (TypeError, ValueError):
        return 0


def main(source_path, target_path):
    source = json.loads(Path(source_path).read_text(encoding="utf-8"))
    features = [
        feature
        for feature in source.get("features", [])
        if feature.get("properties", {}).get("EDGECATEGORY") in {"L", "B"}
        and feature.get("geometry", {}).get("type") == "LineString"
    ]
    names = sorted({
        str(feature["properties"].get("FEATURENAME") or "").strip()
        for feature in features
        if str(feature["properties"].get("FEATURENAME") or "").strip()
    })
    name_indexes = {name: index for index, name in enumerate(names)}
    streets = []
    for feature in features:
        properties = feature["properties"]
        name = str(properties.get("FEATURENAME") or "").strip()
        coordinates = feature["geometry"]["coordinates"]
        flat_coordinates = [
            round(component * 100000)
            for coordinate in coordinates
            for component in coordinate[:2]
        ]
        streets.append([
            district_number(properties.get("BEZIRK")),
            1 if properties.get("EDGECATEGORY") == "B" else 0,
            name_indexes.get(name, -1),
            int(properties.get("NODEFROM_OBJECTID") or 0),
            int(properties.get("NODETO_OBJECTID") or 0),
            flat_coordinates,
        ])
    streets.sort(key=lambda street: (street[0], street[2], street[3], street[4]))
    payload = {
        "source": "Stadt Wien – Straßengraph Wien, data.wien.gv.at, CC BY 4.0",
        "scale": 100000,
        "names": names,
        "streets": streets,
    }
    serialized = json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
    Path(target_path).write_text(
        f"window.VIENNA_MAIN_STREETS={serialized};\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(streets)} streets and {len(names)} names to {target_path}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Usage: build-vienna-main-streets.py SOURCE.json TARGET.js")
    main(sys.argv[1], sys.argv[2])
