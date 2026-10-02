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

## Release flow

- Live app: https://spirea89.github.io/GermanaTeodora/
- Sandbox app: https://spirea89.github.io/GermanaTeodora/sandbox/

Use the `sandbox` branch for changes you want to test first. When the sandbox looks good, merge or copy the change into `main` to release it to the live app.
