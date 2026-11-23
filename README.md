# Deutsch und Mathe

Editable built-in word lists:

- `data/rebus-words.txt`: `word, emoji, clue`
- `data/article-words.txt`: `word, article, emoji`

After changing either file on GitHub, open Administration in the app and choose Reset to load the updated list on that device.

## Animal explorer

- The Optional section contains reusable animal explorers, beginning with the Fledermaus.
- Bat anatomy and hotspot content are defined in `app.js` under `defaultAnimals`.
- Body-part names and descriptions can be edited from Administration and are saved locally on that device.
- The Useful information mode teaches all 15 facts covered by the tests, with read-aloud support and interactive category cards.
- Code-driven scenes animate echolocation, upside-down sleeping, flight, and other bat facts without requiring a network connection.
- The Fledermaus explorer includes three five-question knowledge tests with immediate feedback and scoring.
- The bat artwork is stored at `assets/fledermaus-3d.png`.

## Vienna districts

- The Optional section includes an animated map of all 23 Vienna districts using a simplified snapshot of official Stadt Wien district boundaries.
- Clicking a district shows and speaks its number and name. A personal recording made in Map Administration is preferred over text-to-speech.
- Map Administration stores district names, detailed attraction reading texts, YouTube video links, and resolved Vienna addresses locally on the device. FilmCraft attraction videos can be embedded from public or unlisted YouTube links.
- District-name recordings remain stored as blobs in IndexedDB on the device.
- Shared map content is loaded from `data/vienna-map-content.json`, so published attractions appear on every device. On the trusted maintenance device, Map Administration can store a repository-scoped fine-grained GitHub token locally and publish this file directly to `main` whenever a district or attraction is saved. The token is never committed to the repository.
- Full `http://` and `https://` addresses in an attraction's detailed reading text are displayed as safe, tappable links; Wikipedia addresses use a compact `Wikipedia` label.
- Attraction addresses are located with the official Stadt Wien OGD address service and displayed as markers in their returned district.
- Selecting a district opens a focused map of its exact boundary. Located attractions use their resolved coordinates; attractions without coordinates are grouped near the district center until their address is located.
- Selecting an attraction marker switches the expanded attraction card and moves the tablet view directly to its YouTube video and reading text; a return button moves back to the district map.
- District geometry and address lookup are credited to Stadt Wien – data.wien.gv.at under CC BY 4.0.

## Four Operations

- The Math section includes a one-question-at-a-time game combining addition, subtraction, multiplication, and exact whole-number division.
- Each side can independently use any selected combination of one-, two-, and three-digit numbers.
- Learners can switch at any time between Abstract, Visual place-value decomposition, and Concrete unifix/base-ten cube models.
- Subtraction exercises never produce negative answers, and the Visual mode shows only the helpful number split (for example, `17` becomes `10 + 7` in `17 − 9`).
- When both operands have multiple digits, Visual mode decomposes both; division uses easy divisible chunks such as `72 : 4 → 40 + 32`.
- In Concrete mode, tens and remaining ones appear as separate vertical cube columns.
- A new exercise appears automatically after the current answer is correct.

## Verb Forms

- The German section includes a Verb Forms game covering Präsens, Präteritum, and Perfekt for the verbs from the supplied worksheets.
- Each round asks for all three forms and clearly highlights whether Perfekt uses `haben` or `sein`.
- The three answer rows are stacked for long forms, and each supports either typing or German speech input. Speech recognition starts directly from the button tap for Chrome on Android; the live HTTPS app and an internet connection are required.
- All verbs can be practised together or selected through a searchable Focus mode with a persistent selected-verbs panel.
- Administration accepts additional verbs and subjects using `infinitive | subject | present | preterite | auxiliary | perfect`.

## Release flow

- Live app: https://spirea89.github.io/GermanaTeodora/
- Sandbox app: https://spirea89.github.io/GermanaTeodora/sandbox/

Use the `sandbox` branch for changes you want to test first. When the sandbox looks good, merge or copy the change into `main` to release it to the live app.
