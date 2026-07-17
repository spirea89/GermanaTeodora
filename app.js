const practiceWords = [
  "Morgen",
  "jetzt",
  "die Stunde",
  "die Mäuse",
  "fressen",
  "frisst",
  "der Frühling",
  "der Sommer",
  "der Herbst",
  "der Winter",
  "schreiben",
  "zeichnen",
  "am liebsten",
  "das Blatt",
  "wir waren",
  "mehr",
  "besser",
  "der Tag",
  "die Woche",
  "der Monat",
  "das Jahr",
  "schlafen",
  "in der Früh",
  "zu Mittag",
  "am Vormittag",
  "am Nachmittag",
  "lieber",
  "leicht",
  "gewonnen",
  "kochen",
  "schnell",
  "finster",
  "bekommen",
  "der Stern",
  "trinken",
  "ich trinke",
  "finden",
  "gefunden",
  "können",
  "ich kann",
  "du kannst",
  "lesen",
  "ich lese",
  "du liest",
  "schlafen",
  "ich schlafe",
  "du schläfst",
  "gehen",
  "ich gehe",
  "du gehst",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
  "Jänner",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "das Mädchen",
  "die Sonne",
  "der Schnee",
  "liegen",
  "die Ohren",
  "das Auge",
  "Mittwoch",
  "Dienstag",
  "Donnerstag",
  "die Freundin",
  "der Freund",
  "sich verkleiden",
  "herein",
  "das Glas",
  "die Gänse",
  "der Schuh",
  "die Schuhe",
  "fahren",
  "er fährt",
  "Weihnachten",
  "der Advent",
  "es geht",
  "mehr",
  "das Dach",
  "die Dacher",
  "der Schuler",
  "die Schulerin",
  "das Zimmer",
  "die Geschichte",
  "der Wunsch",
  "die Wünsche",
  "der Fuß",
  "die Füße",
  "der Zahn",
  "die Zahne",
  "essen",
  "ich esse",
  "du isst",
  "aussehen",
  "der Regen",
  "Samstag",
  "Sonntag",
  "am Tag",
  "gefallen",
  "In der Fruh"
];

const emojiRules = [
  [["morgen", "fruh"], "🌅", "Listen and fill the missing letters."],
  [["stunde", "mittag", "vormittag", "nachmittag"], "🕒", "Listen and fill the missing letters."],
  [["maus", "mause", "gans", "ganse"], "🐭", "Listen and fill the missing letters."],
  [["fruhling", "sommer", "herbst", "winter"], "🌦️", "Listen and fill the missing letters."],
  [["schreiben", "zeichnen", "blatt", "geschichte"], "✏️", "Listen and fill the missing letters."],
  [["tag", "woche", "monat", "jahr"], "📅", "Listen and fill the missing letters."],
  [["schlafen", "nacht"], "😴", "Listen and fill the missing letters."],
  [["kochen", "essen", "trinken", "frisst", "fressen"], "🍽️", "Listen and fill the missing letters."],
  [["stern", "sonne", "schnee", "regen"], "☀️", "Listen and fill the missing letters."],
  [["lesen", "buch"], "📖", "Listen and fill the missing letters."],
  [["juli", "august", "september", "oktober", "november", "dezember", "janner", "februar", "marz", "april", "mai", "juni"], "🗓️", "Listen and fill the missing letters."],
  [["madchen", "freundin", "freund"], "😊", "Listen and fill the missing letters."],
  [["ohren", "auge", "fuss", "fusse", "zahn"], "👂", "Listen and fill the missing letters."],
  [["mittwoch", "dienstag", "donnerstag", "samstag", "sonntag"], "📆", "Listen and fill the missing letters."],
  [["glas"], "🥛", "Listen and fill the missing letters."],
  [["schuh"], "👟", "Listen and fill the missing letters."],
  [["fahren"], "🚗", "Listen and fill the missing letters."],
  [["weihnachten", "advent"], "🎄", "Listen and fill the missing letters."],
  [["dach", "zimmer"], "🏠", "Listen and fill the missing letters."]
];

const commonArticleWords = [
  ["Mann", "der", "👨"],
  ["Frau", "die", "👩"],
  ["Kind", "das", "🧒"],
  ["Haus", "das", "🏠"],
  ["Auto", "das", "🚗"],
  ["Baum", "der", "🌳"],
  ["Blume", "die", "🌸"],
  ["Hund", "der", "🐕"],
  ["Katze", "die", "🐈"],
  ["Pferd", "das", "🐎"],
  ["Vogel", "der", "🐦"],
  ["Fisch", "der", "🐟"],
  ["Apfel", "der", "🍎"],
  ["Banane", "die", "🍌"],
  ["Brot", "das", "🍞"],
  ["Milch", "die", "🥛"],
  ["Wasser", "das", "💧"],
  ["Sonne", "die", "☀️"],
  ["Mond", "der", "🌙"],
  ["Stern", "der", "⭐"],
  ["Schule", "die", "🏫"],
  ["Buch", "das", "📖"],
  ["Stift", "der", "✏️"],
  ["Tisch", "der", "🪑"],
  ["Stuhl", "der", "🪑"],
  ["Tür", "die", "🚪"],
  ["Fenster", "das", "🪟"],
  ["Bett", "das", "🛏️"],
  ["Ball", "der", "⚽"],
  ["Spiel", "das", "🎲"],
  ["Hand", "die", "✋"],
  ["Fuß", "der", "🦶"],
  ["Kopf", "der", "🙂"],
  ["Auge", "das", "👁️"],
  ["Nase", "die", "👃"],
  ["Mund", "der", "👄"],
  ["Ohr", "das", "👂"],
  ["Tag", "der", "📅"],
  ["Nacht", "die", "🌃"],
  ["Woche", "die", "📅"],
  ["Jahr", "das", "🗓️"],
  ["Zeit", "die", "⏰"],
  ["Freund", "der", "😊"],
  ["Freundin", "die", "😊"],
  ["Mädchen", "das", "👧"],
  ["Junge", "der", "👦"],
  ["Mutter", "die", "👩"],
  ["Vater", "der", "👨"],
  ["Essen", "das", "🍽️"],
  ["Jacke", "die", "🧥"]
];

const defaultRebusWords = practiceWords.map((word) => decorateWord(capitalizeRebusNouns(word)));
const defaultArticleWords = commonArticleWords.map(([word, article, emoji]) => ({
  ...decorateWord(word),
  word,
  article,
  emoji
}));
const defaultWords = [...defaultRebusWords, ...defaultArticleWords];
const wordsStorageKey = "wordGardenGermanWords";
const articleWordsStorageKey = "articleGameGermanWords";
const germanAppsStorageKey = "deutschUndMatheGermanWords";
const rebusWordsFile = "data/rebus-words.txt";
const articleWordsFile = "data/article-words.txt";

const wordRewards = [
  ["🎉", "Fantastic!"],
  ["🌈", "So bright!"],
  ["🪄", "Magic writing!"],
  ["🏆", "Champion!"],
  ["🎈", "Hooray!"],
  ["💎", "Sparkly work!"],
  ["🚀", "You zoomed!"],
  ["🍭", "Sweet win!"]
];

const wordRewardsDe = [
  ["🎉", "Fantastisch!"],
  ["🌈", "So schön!"],
  ["🪄", "Zauberhaft!"],
  ["🏆", "Champion!"],
  ["🎈", "Hurra!"],
  ["💎", "Super gemacht!"],
  ["🚀", "Raketenstark!"],
  ["🍭", "Toll!"]
];

const translations = {
  en: {
    appTitle: "Deutsch und Mathe",
    toggle: "Deutsch",
    toggleLabel: "Switch language to German",
    practiceTime: "Practice time",
    german: "German",
    germanSub: "Words, listening, missing letters",
    math: "Math",
    mathSub: "Plus and minus to 100",
    administration: "Administration",
    adminSub: "Add German practice words",
    backHome: "Back to practice chooser",
    homeTitle: "Home",
    writingPractice: "Writing practice",
    wordGarden: "Word Garden",
    germanApps: "German apps",
    rebus: "Rebus",
    rebusSub: "Missing letters",
    articleGame: "DER/DIE/DAS",
    articleSub: "Choose the article",
    handwriting: "Handwriting",
    handwritingSub: "Write with the pen",
    handwritingInfo: "Designed for XP-PEN style handwriting devices.",
    handwritingProgress: "Handwriting progress",
    pages: "Pages",
    nextLetter: "Next letter",
    handwritingHint: "Listen and write the next missing letter.",
    handwritingDone: "Beautiful page!",
    handwritingCorrect: "Good. Write the next letter.",
    handwritingTry: "Try this letter again.",
    clear: "Clear",
    done: "Done",
    stars: "Stars",
    streak: "Streak",
    round: "Round",
    wordPromptLabel: "Word with missing letters",
    answerLabel: "Type the missing letters",
    check: "Check",
    hearWord: "🔊 Hear word",
    newWord: "↪ New word",
    wordClueDefault: "Listen and fill the missing letters.",
    wordHintDefault: "Listen, look, and fill the hidden letters.",
    wordSuccess: (word) => `Yes! The word is ${word}.`,
    wordTry: "Try again. Match the capital letters when you type the whole word.",
    articlePrompt: "Choose der, die, or das.",
    articleSuccess: (article, word) => `Yes! ${article} ${word}`,
    articleTry: () => "Almost. Try again.",
    articleNoWords: "Add words with der, die, or das in Administration.",
    adminTitle: "German Words",
    adminCopy: "Rebus words. One item per line. Use: word, emoji, clue",
    adminArticleCopy: "DER/DIE/DAS words. One item per line. Use: word, article, emoji",
    adminExample: "die Sonne, ☀️, Listen and fill the missing letters.",
    adminArticleExample: "Sonne, die, ☀️",
    saveWords: "Save words",
    reset: "Reset",
    adminReady: "Saved words are used in the German game on this device.",
    adminSaved: "Saved. German practice will use this list.",
    adminReset: "Reset to the word lists stored in the GitHub files.",
    mathPractice: "Math practice",
    mathApps: "Math apps",
    numberSprint: "Number Sprint",
    numberSprintSub: "Plus and minus to 100",
    mathSetupLabel: "Math setup",
    exercise: "Exercise",
    exerciseName: "Plus and minus to 100",
    time: "Time",
    chooseTime: "Choose exercise time",
    chooseFeedback: "Choose answer feedback",
    showNow: "Show Instant Results",
    atFinish: "Show results at the end",
    withTips: "Show Results and Tips",
    withSchool: "Start Test with School Examples",
    contest: "Contest",
    contestLabel: "Contest",
    players: "Players",
    choosePlayers: "Choose players",
    seconds: "Seconds",
    chooseSeconds: "Choose seconds per equation",
    startContest: "Start contest",
    contestPlayer: "Player",
    contestQuestion: "Question",
    contestEquation: "Contest equation",
    contestAnswer: "Contest answer",
    submit: "Submit",
    nextTurn: "Next turn",
    newContest: "New contest",
    contestScores: "Contest scores",
    finalScores: "Final contest scores",
    playerName: (number) => `Player ${number}`,
    contestCorrect: "Correct! +1 point",
    contestWrong: (answer) => `Not this time. Answer: ${answer}`,
    contestTimeout: (answer) => `Time is up. Answer: ${answer}`,
    contestWinner: (names) => `Winner: ${names}`,
    contestTie: (names) => `Tie: ${names}`,
    showTip: "Tip",
    hideTip: "Hide tip",
    start: "Start",
    mathProgress: "Math progress",
    correct: "Correct",
    left: "Left",
    worksheet: "Math worksheet",
    newWorksheet: "↻ New worksheet",
    finish: "✓ Finish",
    allDone: "All done!",
    timeUp: "Time is up!",
    brilliant: "Brilliant!"
  },
  de: {
    appTitle: "Deutsch und Mathe",
    toggle: "English",
    toggleLabel: "Sprache auf Englisch umstellen",
    practiceTime: "Übungszeit",
    german: "Deutsch",
    germanSub: "Wörter, Hören, fehlende Buchstaben",
    math: "Mathe",
    mathSub: "Plus und Minus bis 100",
    administration: "Verwaltung",
    adminSub: "Neue deutsche Wörter hinzufügen",
    backHome: "Zur Auswahl zurück",
    homeTitle: "Start",
    writingPractice: "Schreibübung",
    wordGarden: "Wörtergarten",
    germanApps: "Deutsch-Apps",
    rebus: "Rebus",
    rebusSub: "Fehlende Buchstaben",
    articleGame: "DER/DIE/DAS",
    articleSub: "Artikel wählen",
    handwriting: "Schreiben",
    handwritingSub: "Mit dem Stift schreiben",
    handwritingInfo: "Diese App ist für XP-PEN-ähnliche Schreibgeräte gedacht.",
    handwritingProgress: "Schreibfortschritt",
    pages: "Seiten",
    nextLetter: "Nächster Buchstabe",
    handwritingHint: "Höre zu und schreibe den nächsten fehlenden Buchstaben.",
    handwritingDone: "Schöne Seite!",
    handwritingCorrect: "Gut. Schreibe den nächsten Buchstaben.",
    handwritingTry: "Versuch diesen Buchstaben noch einmal.",
    clear: "Löschen",
    done: "Fertig",
    stars: "Sterne",
    streak: "Serie",
    round: "Runde",
    wordPromptLabel: "Wort mit fehlenden Buchstaben",
    answerLabel: "Fehlende Buchstaben eingeben",
    check: "Prüfen",
    hearWord: "🔊 Wort hören",
    newWord: "↪ Neues Wort",
    wordClueDefault: "Höre zu und ergänze die fehlenden Buchstaben.",
    wordHintDefault: "Höre zu, schau genau und ergänze die fehlenden Buchstaben.",
    wordSuccess: (word) => `Ja! Das Wort ist ${word}.`,
    wordTry: "Versuch es noch einmal. Achte auf Groß- und Kleinschreibung, wenn du das ganze Wort schreibst.",
    articlePrompt: "Wähle der, die oder das.",
    articleSuccess: (article, word) => `Ja! ${article} ${word}`,
    articleTry: () => "Fast. Versuch es noch einmal.",
    articleNoWords: "Füge Wörter mit der, die oder das in der Verwaltung hinzu.",
    adminTitle: "Deutsche Wörter",
    adminCopy: "Rebus-Wörter. Ein Eintrag pro Zeile: Wort, Emoji, Hinweis",
    adminArticleCopy: "DER/DIE/DAS-Wörter. Ein Eintrag pro Zeile: Wort, Artikel, Emoji",
    adminExample: "die Sonne, ☀️, Höre zu und ergänze die fehlenden Buchstaben.",
    adminArticleExample: "Sonne, die, ☀️",
    saveWords: "Wörter speichern",
    reset: "Zurücksetzen",
    adminReady: "Gespeicherte Wörter werden auf diesem Gerät im Deutsch-Spiel benutzt.",
    adminSaved: "Gespeichert. Die Deutsch-Übung benutzt diese Liste.",
    adminReset: "Die Wortlisten aus den GitHub-Dateien wurden wiederhergestellt.",
    mathPractice: "Matheübung",
    mathApps: "Mathe-Apps",
    numberSprint: "Zahlensprint",
    numberSprintSub: "Plus und Minus bis 100",
    mathSetupLabel: "Mathe-Einstellungen",
    exercise: "Aufgabe",
    exerciseName: "Plus und Minus bis 100",
    time: "Zeit",
    chooseTime: "Übungszeit auswählen",
    chooseFeedback: "Antwortanzeige auswählen",
    showNow: "Ergebnisse sofort zeigen",
    atFinish: "Ergebnisse am Ende zeigen",
    withTips: "Ergebnisse und Tipps zeigen",
    withSchool: "Test mit Schulbeispielen starten",
    contest: "Wettbewerb",
    contestLabel: "Wettbewerb",
    players: "Spieler",
    choosePlayers: "Spieler auswÃ¤hlen",
    seconds: "Sekunden",
    chooseSeconds: "Sekunden pro Aufgabe auswÃ¤hlen",
    startContest: "Wettbewerb starten",
    contestPlayer: "Spieler",
    contestQuestion: "Frage",
    contestEquation: "Wettbewerbsaufgabe",
    contestAnswer: "Wettbewerbsantwort",
    submit: "Antworten",
    nextTurn: "NÃ¤chster Spieler",
    newContest: "Neuer Wettbewerb",
    contestScores: "Punktestand",
    finalScores: "Endstand",
    playerName: (number) => `Spieler ${number}`,
    contestCorrect: "Richtig! +1 Punkt",
    contestWrong: (answer) => `Leider nicht. Antwort: ${answer}`,
    contestTimeout: (answer) => `Zeit vorbei. Antwort: ${answer}`,
    contestWinner: (names) => `Gewinner: ${names}`,
    contestTie: (names) => `Unentschieden: ${names}`,
    showTip: "Tipp",
    hideTip: "Tipp ausblenden",
    start: "Start",
    mathProgress: "Mathe-Fortschritt",
    correct: "Richtig",
    left: "Übrig",
    worksheet: "Mathe-Arbeitsblatt",
    newWorksheet: "↻ Neues Blatt",
    finish: "✓ Fertig",
    allDone: "Alles geschafft!",
    timeUp: "Die Zeit ist vorbei!",
    brilliant: "Super!"
  }
};

const elements = {
  languageToggle: document.querySelector("#language-toggle"),
  homeScreen: document.querySelector("#home-screen"),
  germanScreen: document.querySelector("#german-screen"),
  mathScreen: document.querySelector("#math-screen"),
  adminScreen: document.querySelector("#admin-screen"),
  openGerman: document.querySelector("#open-german"),
  openMath: document.querySelector("#open-math"),
  openAdmin: document.querySelector("#open-admin"),
  germanHub: document.querySelector("#german-hub"),
  rebusApp: document.querySelector("#rebus-app"),
  articleApp: document.querySelector("#article-app"),
  handwritingApp: document.querySelector("#handwriting-app"),
  openRebus: document.querySelector("#open-rebus"),
  openArticles: document.querySelector("#open-articles"),
  openHandwriting: document.querySelector("#open-handwriting"),
  germanMenuButtons: document.querySelectorAll(".german-menu-button"),
  mathHub: document.querySelector("#math-hub"),
  numberSprintApp: document.querySelector("#number-sprint-app"),
  openNumberSprint: document.querySelector("#open-number-sprint"),
  mathMenuButtons: document.querySelectorAll(".math-menu-button"),
  germanHome: document.querySelector("#german-home"),
  mathHome: document.querySelector("#math-home"),
  adminHome: document.querySelector("#admin-home"),
  emoji: document.querySelector("#emoji-clue"),
  phrase: document.querySelector("#phrase-clue"),
  prompt: document.querySelector("#word-prompt"),
  input: document.querySelector("#answer-input"),
  check: document.querySelector("#check-button"),
  hint: document.querySelector("#hint"),
  stars: document.querySelector("#stars"),
  streak: document.querySelector("#streak"),
  round: document.querySelector("#round"),
  speak: document.querySelector("#speak-button"),
  skip: document.querySelector("#skip-button"),
  articleEmoji: document.querySelector("#article-emoji"),
  articleWord: document.querySelector("#article-word"),
  articleOptions: document.querySelector("#article-options"),
  articleHint: document.querySelector("#article-hint"),
  articleCorrect: document.querySelector("#article-correct"),
  articleStreak: document.querySelector("#article-streak"),
  articleRound: document.querySelector("#article-round"),
  articleSkip: document.querySelector("#article-skip"),
  handwritingEmoji: document.querySelector("#handwriting-emoji"),
  handwritingPrompt: document.querySelector("#handwriting-prompt"),
  handwritingRecognized: document.querySelector("#handwriting-recognized"),
  handwritingHint: document.querySelector("#handwriting-hint"),
  handwritingPages: document.querySelector("#handwriting-pages"),
  handwritingRound: document.querySelector("#handwriting-round"),
  handwritingSpeak: document.querySelector("#handwriting-speak"),
  clearHandwriting: document.querySelector("#clear-handwriting"),
  skipHandwriting: document.querySelector("#skip-handwriting"),
  finishHandwriting: document.querySelector("#finish-handwriting"),
  rewardLayer: document.querySelector("#reward-layer"),
  rewardEmoji: document.querySelector("#reward-emoji"),
  rewardText: document.querySelector("#reward-text"),
  studio: document.querySelector("#studio-panel"),
  wordList: document.querySelector("#word-list"),
  articleWordList: document.querySelector("#article-word-list"),
  saveWords: document.querySelector("#save-words"),
  resetWords: document.querySelector("#reset-words"),
  adminNote: document.querySelector("#admin-note"),
  timeOptions: document.querySelector("#time-options"),
  startOptions: document.querySelector("#start-options"),
  timerDisplay: document.querySelector("#timer-display"),
  mathProgress: document.querySelector(".math-progress"),
  mathControls: document.querySelector("#math-screen .controls"),
  startMath: document.querySelector("#start-math"),
  newMath: document.querySelector("#new-math"),
  finishMath: document.querySelector("#finish-math"),
  worksheet: document.querySelector("#worksheet"),
  mathCorrect: document.querySelector("#math-correct"),
  mathLeft: document.querySelector("#math-left"),
  contestPanel: document.querySelector("#contest-panel"),
  contestSetup: document.querySelector("#contest-setup"),
  contestArena: document.querySelector("#contest-arena"),
  contestResults: document.querySelector("#contest-results"),
  contestPlayerOptions: document.querySelector("#contest-player-options"),
  contestTimeOptions: document.querySelector("#contest-time-options"),
  startContest: document.querySelector("#start-contest"),
  contestPlayer: document.querySelector("#contest-player"),
  contestRound: document.querySelector("#contest-round"),
  contestTimer: document.querySelector("#contest-timer"),
  contestEquation: document.querySelector("#contest-equation"),
  contestAnswer: document.querySelector("#contest-answer"),
  contestMessage: document.querySelector("#contest-message"),
  submitContest: document.querySelector("#submit-contest"),
  nextContest: document.querySelector("#next-contest"),
  contestScoreboard: document.querySelector("#contest-scoreboard"),
  contestWinner: document.querySelector("#contest-winner"),
  contestFinalScoreboard: document.querySelector("#contest-final-scoreboard"),
  newContest: document.querySelector("#new-contest")
};

let words = loadWords();
let articlePracticeWords = loadArticleWords();
let currentIndex = -1;
let currentWord = words[0];
let stars = Number(localStorage.getItem("wordGardenStars") || 0);
let streak = 0;
let round = 1;
let articleCurrentIndex = -1;
let articleCurrentWord = null;
let articleCorrect = Number(localStorage.getItem("articleGameCorrect") || 0);
let articleStreak = 0;
let articleRound = 1;
let handwritingCurrentIndex = -1;
let handwritingCurrentWord = null;
let handwritingPages = Number(localStorage.getItem("handwritingPages") || 0);
let handwritingRound = 1;
let handwritingTargetLetters = [];
let handwritingSolvedLetters = [];
let handwritingNextLetterIndex = 0;
let mathSelectedMinutes = 10;
let mathProblems = [];
let mathTimer = null;
let mathDeadline = 0;
let mathStarted = false;
let mathEnded = false;
let mathFeedbackMode = "instant";
let contestPlayerCount = 2;
let contestSeconds = 30;
let contestProblems = [];
let contestScores = [];
let contestIndex = 0;
let contestTimer = null;
let contestDeadline = 0;
let contestAnswered = false;
let currentLanguage = translations[localStorage.getItem("practiceLanguage")] ? localStorage.getItem("practiceLanguage") : "en";

function t(key, ...args) {
  const value = translations[currentLanguage][key] || translations.en[key] || key;
  return typeof value === "function" ? value(...args) : value;
}

function setText(selector, key) {
  const node = document.querySelector(selector);
  if (node) {
    node.textContent = t(key);
  }
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.title = t("appTitle");
  elements.languageToggle.textContent = t("toggle");
  elements.languageToggle.setAttribute("aria-label", t("toggleLabel"));

  setText(".home-header .eyebrow", "practiceTime");
  setText("#open-german strong", "german");
  setText("#open-german small", "germanSub");
  setText("#open-math strong", "math");
  setText("#open-math small", "mathSub");
  setText("#open-admin strong", "administration");
  setText("#open-admin small", "adminSub");

  [elements.germanHome, elements.mathHome, elements.adminHome].forEach((button) => {
    button.setAttribute("aria-label", t("backHome"));
    button.setAttribute("title", t("homeTitle"));
  });

  setText("#german-screen .eyebrow", "writingPractice");
  setText("#app-title", "germanApps");
  setText("#open-rebus strong", "rebus");
  setText("#open-rebus small", "rebusSub");
  setText("#open-articles strong", "articleGame");
  setText("#open-articles small", "articleSub");
  setText("#open-handwriting strong", "handwriting");
  setText("#open-handwriting small", "handwritingSub");
  const handwritingInfo = document.querySelector("#handwriting-info");
  if (handwritingInfo) {
    handwritingInfo.setAttribute("title", t("handwritingInfo"));
    handwritingInfo.setAttribute("aria-label", t("handwritingInfo"));
  }
  setText(".score-row div:nth-child(1) .score-label", "stars");
  setText(".score-row div:nth-child(2) .score-label", "streak");
  setText(".score-row div:nth-child(3) .score-label", "round");
  elements.germanMenuButtons.forEach((button) => {
    button.textContent = t("germanApps");
  });
  elements.prompt.setAttribute("aria-label", t("wordPromptLabel"));
  setText(".answer-label", "answerLabel");
  elements.check.textContent = t("check");
  elements.speak.textContent = t("hearWord");
  elements.skip.textContent = t("newWord");
  setText(".article-score-row div:nth-child(1) .score-label", "correct");
  setText(".article-score-row div:nth-child(2) .score-label", "streak");
  setText(".article-score-row div:nth-child(3) .score-label", "round");
  elements.articleOptions.setAttribute("aria-label", t("articleSub"));
  elements.articleSkip.textContent = t("newWord");
  document.querySelector(".handwriting-score-row").setAttribute("aria-label", t("handwritingProgress"));
  setText(".handwriting-score-row div:nth-child(1) .score-label", "pages");
  setText(".handwriting-score-row div:nth-child(2) .score-label", "round");
  setText(".handwriting-target .score-label", "nextLetter");
  elements.handwritingPrompt.setAttribute("aria-label", t("wordPromptLabel"));
  elements.handwritingSpeak.textContent = t("hearWord");
  elements.clearHandwriting.textContent = t("clear");
  elements.skipHandwriting.textContent = t("newWord");
  elements.finishHandwriting.textContent = t("done");
  if (!elements.handwritingHint.dataset.state || elements.handwritingHint.dataset.state === "default") {
    setHandwritingHint("default");
  }
  if (!elements.articleHint.dataset.state || elements.articleHint.dataset.state === "default") {
    setArticleHint("default");
  }
  if (!elements.rebusApp.classList.contains("hidden")) {
    document.querySelector("#app-title").textContent = t("rebus");
  } else if (!elements.articleApp.classList.contains("hidden")) {
    document.querySelector("#app-title").textContent = t("articleGame");
  } else if (!elements.handwritingApp.classList.contains("hidden")) {
    document.querySelector("#app-title").textContent = t("handwriting");
  }

  setText("#admin-screen .eyebrow", "administration");
  setText("#admin-title", "adminTitle");
  const adminCopies = document.querySelectorAll("#admin-screen .studio-copy");
  if (adminCopies[0]) {
    adminCopies[0].textContent = t("adminCopy");
  }
  if (adminCopies[1]) {
    adminCopies[1].textContent = t("adminArticleCopy");
  }
  const adminExamples = document.querySelectorAll("#admin-screen pre");
  if (adminExamples[0]) {
    adminExamples[0].textContent = t("adminExample");
  }
  if (adminExamples[1]) {
    adminExamples[1].textContent = t("adminArticleExample");
  }
  elements.saveWords.textContent = t("saveWords");
  elements.resetWords.textContent = t("reset");
  if (!elements.adminNote.dataset.state || elements.adminNote.dataset.state === "ready") {
    setAdminNote("ready");
  }

  setText("#math-screen .eyebrow", "mathPractice");
  setText("#math-title", "mathApps");
  setText("#open-number-sprint strong", "numberSprint");
  setText("#open-number-sprint small", "numberSprintSub");
  elements.mathHub.setAttribute("aria-label", t("mathApps"));
  document.querySelector(".math-setup").setAttribute("aria-label", t("mathSetupLabel"));
  setText(".math-setup > div:nth-child(1) .score-label", "exercise");
  setText(".math-setup > div:nth-child(1) strong", "exerciseName");
  setText(".math-setup > div:nth-child(2) .score-label", "time");
  elements.timeOptions.setAttribute("aria-label", t("chooseTime"));
  elements.startOptions.setAttribute("aria-label", t("chooseFeedback"));
  elements.startOptions.querySelector('[data-feedback="instant"]').textContent = t("showNow");
  elements.startOptions.querySelector('[data-feedback="end"]').textContent = t("atFinish");
  elements.startOptions.querySelector('[data-feedback="tips"]').textContent = t("withTips");
  elements.startOptions.querySelector('[data-feedback="school"]').textContent = t("withSchool");
  elements.startOptions.querySelector('[data-feedback="contest"]').textContent = t("contest");
  elements.startMath.textContent = t("start");
  elements.mathMenuButtons.forEach((button) => {
    button.textContent = t("mathApps");
  });
  document.querySelector(".math-progress").setAttribute("aria-label", t("mathProgress"));
  setText(".math-progress div:nth-child(1) .score-label", "correct");
  setText(".math-progress div:nth-child(2) .score-label", "left");
  elements.worksheet.setAttribute("aria-label", t("worksheet"));
  elements.newMath.textContent = t("newWorksheet");
  elements.finishMath.textContent = t("finish");
  elements.contestPanel.setAttribute("aria-label", t("contestLabel"));
  setText("#contest-setup > div:nth-child(1) .score-label", "players");
  setText("#contest-setup > div:nth-child(2) .score-label", "seconds");
  elements.contestPlayerOptions.setAttribute("aria-label", t("choosePlayers"));
  elements.contestTimeOptions.setAttribute("aria-label", t("chooseSeconds"));
  elements.startContest.textContent = t("startContest");
  setText(".contest-status > div:nth-child(1) .score-label", "contestPlayer");
  setText(".contest-status > div:nth-child(2) .score-label", "contestQuestion");
  setText(".contest-status > div:nth-child(3) .score-label", "time");
  document.querySelector(".contest-card").setAttribute("aria-label", t("contestEquation"));
  elements.contestAnswer.setAttribute("aria-label", t("contestAnswer"));
  elements.submitContest.textContent = t("submit");
  elements.nextContest.textContent = t("nextTurn");
  elements.contestScoreboard.setAttribute("aria-label", t("contestScores"));
  elements.contestFinalScoreboard.setAttribute("aria-label", t("finalScores"));
  elements.newContest.textContent = t("newContest");
  renderContestStatus();
  if (!elements.numberSprintApp.classList.contains("hidden")) {
    document.querySelector("#math-title").textContent = t("numberSprint");
  }

  if (elements.phrase.textContent === translations.en.wordClueDefault || elements.phrase.textContent === translations.de.wordClueDefault) {
    elements.phrase.textContent = t("wordClueDefault");
  }
  if (!elements.hint.dataset.state || elements.hint.dataset.state === "default") {
    setHint("default");
  } else if (elements.hint.dataset.state === "success") {
    setHint("success", currentWord.word);
  } else if (elements.hint.dataset.state === "try") {
    setHint("try");
  }
}

function setHint(state, word = "") {
  elements.hint.dataset.state = state;
  elements.hint.className = "hint";
  if (state === "success") {
    elements.hint.classList.add("success");
    elements.hint.textContent = t("wordSuccess", word);
    return;
  }
  if (state === "try") {
    elements.hint.classList.add("try");
    elements.hint.textContent = t("wordTry");
    return;
  }
  elements.hint.textContent = t("wordHintDefault");
}

function setHandwritingHint(state) {
  elements.handwritingHint.dataset.state = state;
  elements.handwritingHint.className = "hint";
  if (state === "done") {
    elements.handwritingHint.classList.add("success");
    elements.handwritingHint.textContent = t("handwritingDone");
    return;
  }
  if (state === "correct") {
    elements.handwritingHint.classList.add("success");
    elements.handwritingHint.textContent = t("handwritingCorrect");
    return;
  }
  if (state === "try") {
    elements.handwritingHint.classList.add("try");
    elements.handwritingHint.textContent = t("handwritingTry");
    return;
  }
  elements.handwritingHint.textContent = t("handwritingHint");
}

function setAdminNote(state) {
  elements.adminNote.dataset.state = state;
  const key = state === "saved" ? "adminSaved" : state === "reset" ? "adminReset" : "adminReady";
  elements.adminNote.textContent = t(key);
}

function showScreen(screenName) {
  elements.homeScreen.classList.toggle("hidden", screenName !== "home");
  elements.germanScreen.classList.toggle("hidden", screenName !== "german");
  elements.mathScreen.classList.toggle("hidden", screenName !== "math");
  elements.adminScreen.classList.toggle("hidden", screenName !== "admin");

  if (screenName === "german") {
    showGermanMenu();
  }

  if (screenName === "math") {
    showMathMenu();
  }

  if (screenName === "admin") {
    openAdmin();
  }
}

function showGermanMenu() {
  elements.germanHub.classList.remove("hidden");
  elements.rebusApp.classList.add("hidden");
  elements.articleApp.classList.add("hidden");
  elements.handwritingApp.classList.add("hidden");
  elements.input.blur();
  document.querySelector("#app-title").textContent = t("germanApps");
}

function showGermanApp(appName) {
  elements.germanHub.classList.add("hidden");
  elements.rebusApp.classList.toggle("hidden", appName !== "rebus");
  elements.articleApp.classList.toggle("hidden", appName !== "articles");
  elements.handwritingApp.classList.toggle("hidden", appName !== "handwriting");
  document.querySelector("#app-title").textContent = appName === "rebus"
    ? t("rebus")
    : appName === "articles"
      ? t("articleGame")
      : t("handwriting");
  if (appName === "rebus") {
    pickWord();
    elements.input.focus();
  }
  if (appName === "articles") {
    pickArticleWord();
  }
  if (appName === "handwriting") {
    pickHandwritingWord();
  }
}

function showMathMenu() {
  resetMathWorksheet();
  stopContestTimer();
  elements.mathHub.classList.remove("hidden");
  elements.numberSprintApp.classList.add("hidden");
  elements.timerDisplay.classList.add("hidden");
  document.querySelector("#math-title").textContent = t("mathApps");
}

function showMathApp(appName) {
  elements.mathHub.classList.add("hidden");
  elements.numberSprintApp.classList.toggle("hidden", appName !== "number-sprint");
  elements.timerDisplay.classList.toggle("hidden", appName !== "number-sprint");
  document.querySelector("#math-title").textContent = t("numberSprint");

  if (appName === "number-sprint") {
    ensureMathWorksheet();
  }
}

function normalize(value) {
  return value
    .trim()
    .toLocaleLowerCase("de-DE")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function normalizeExactCase(value) {
  return value.trim().replace(/\s+/g, " ");
}

function cleanWord(value) {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[^\p{L}\s-]/gu, "");
}

function cleanArticle(value) {
  const article = normalize(value).replace(/\s/g, "");
  return ["der", "die", "das"].includes(article) ? article : "";
}

function capitalizeRebusNouns(value) {
  const standaloneNouns = new Set(commonArticleWords.map(([word]) => normalize(word)));
  const trimmed = value.trim();
  const withArticleNoun = trimmed.replace(/\b(der|die|das)(\s+)([a-zäöüß])/gi, (_, article, space, nounStart) => {
    return `${article}${space}${nounStart.toLocaleUpperCase("de-DE")}`;
  });

  return standaloneNouns.has(normalize(withArticleNoun))
    ? withArticleNoun.charAt(0).toLocaleUpperCase("de-DE") + withArticleNoun.slice(1)
    : withArticleNoun;
}

function isLetter(character) {
  return /^\p{L}$/u.test(character);
}

function sameGermanLetter(left, right) {
  return left.normalize("NFC") === right.normalize("NFC");
}

function decorateWord(word) {
  const normalized = normalize(word);
  const match = emojiRules.find(([keys]) => keys.some((key) => normalized.includes(key)));

  return {
    word,
    emoji: match ? match[1] : "✨",
    clue: match ? match[2] : "Listen and fill the missing letters."
  };
}

function normalizeWordItem(item) {
  if (typeof item === "string") {
    return decorateWord(item);
  }

  const word = cleanWord(item?.word || "");
  if (!word) {
    return null;
  }

  const decorated = decorateWord(word);
  return {
    word,
    article: cleanArticle(item?.article || ""),
    emoji: item?.emoji || decorated.emoji,
    clue: item?.clue || decorated.clue
  };
}

function withDefaultArticleWords(nextWords) {
  const seen = new Set(nextWords.map((item) => normalize(item.word)));
  const missingArticleWords = defaultArticleWords.filter((item) => item.article && !seen.has(normalize(item.word)));
  return [...nextWords, ...missingArticleWords];
}

function getWordClue(wordItem) {
  if (wordItem.clue === translations.en.wordClueDefault || wordItem.clue === translations.de.wordClueDefault) {
    return t("wordClueDefault");
  }
  return wordItem.clue || t("wordClueDefault");
}

function hiddenLettersOf(value) {
  return value
    .split(/(\s+|-)/)
    .map((part) => {
      const letters = [...part].filter(isLetter);
      if (letters.length <= 2) {
        return "";
      }
      return [...part].filter((character, index) => isLetter(character) && index > 0 && index < part.length - 1).join("");
    })
    .join("");
}

function loadWords() {
  const combined = loadCombinedGermanWordLists();
  if (combined?.rebus?.length) {
    return combined.rebus;
  }

  const saved = localStorage.getItem(wordsStorageKey);
  if (!saved) {
    return defaultRebusWords;
  }

  try {
    const parsed = JSON.parse(saved);
    const normalized = Array.isArray(parsed) ? parsed.map(normalizeWordItem).filter(Boolean) : [];
    return normalized.length ? normalized.map((item) => ({ ...item, article: "" })) : defaultRebusWords;
  } catch {
    return defaultRebusWords;
  }
}

function saveWordState(nextWords) {
  localStorage.setItem(wordsStorageKey, JSON.stringify(nextWords));
  saveCombinedGermanWordLists(nextWords, articlePracticeWords || defaultArticleWords);
}

function loadArticleWords() {
  const combined = loadCombinedGermanWordLists();
  if (combined?.articles?.length) {
    return combined.articles;
  }

  const saved = localStorage.getItem(articleWordsStorageKey);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      const normalized = Array.isArray(parsed) ? parsed.map(normalizeWordItem).filter((item) => item && item.article) : [];
      if (normalized.length) {
        return normalized;
      }
    } catch {
      // Fall back to defaults below.
    }
  }

  const legacySaved = localStorage.getItem(wordsStorageKey);
  if (legacySaved) {
    try {
      const parsed = JSON.parse(legacySaved);
      const legacyArticleWords = Array.isArray(parsed)
        ? parsed.map(normalizeWordItem).filter((item) => item && item.article)
        : [];
      return withDefaultArticleWords(legacyArticleWords);
    } catch {
      return defaultArticleWords;
    }
  }

  return defaultArticleWords;
}

function saveArticleWordState(nextWords) {
  localStorage.setItem(articleWordsStorageKey, JSON.stringify(nextWords));
  saveCombinedGermanWordLists(words || defaultRebusWords, nextWords);
}

function loadCombinedGermanWordLists() {
  const saved = localStorage.getItem(germanAppsStorageKey);
  if (!saved) {
    return null;
  }

  try {
    const parsed = JSON.parse(saved);
    const rebus = Array.isArray(parsed?.rebus)
      ? parsed.rebus.map(normalizeWordItem).filter(Boolean).map((item) => ({ ...item, article: "" }))
      : [];
    const articles = Array.isArray(parsed?.articles)
      ? parsed.articles.map(normalizeWordItem).filter((item) => item && item.article)
      : [];
    return { rebus, articles };
  } catch {
    return null;
  }
}

function saveCombinedGermanWordLists(rebus, articles) {
  localStorage.setItem(germanAppsStorageKey, JSON.stringify({ rebus, articles }));
}

function hasStoredGermanWordLists() {
  return Boolean(
    localStorage.getItem(germanAppsStorageKey)
    || localStorage.getItem(wordsStorageKey)
    || localStorage.getItem(articleWordsStorageKey)
  );
}

async function loadBundledWordFiles(force = false) {
  if (!force && hasStoredGermanWordLists()) {
    return false;
  }

  try {
    const cacheBuster = `?updated=${Date.now()}`;
    const [rebusResponse, articleResponse] = await Promise.all([
      fetch(`${rebusWordsFile}${cacheBuster}`, { cache: "no-store" }),
      fetch(`${articleWordsFile}${cacheBuster}`, { cache: "no-store" })
    ]);
    if (!rebusResponse.ok || !articleResponse.ok) {
      return false;
    }

    const [rebusText, articleText] = await Promise.all([rebusResponse.text(), articleResponse.text()]);
    const nextRebusWords = parseRebusWords(rebusText);
    const nextArticleWords = parseArticleWords(articleText);
    if (!nextRebusWords.length || !nextArticleWords.length) {
      return false;
    }

    words = nextRebusWords;
    articlePracticeWords = nextArticleWords;
    saveWordState(words);
    saveArticleWordState(articlePracticeWords);
    return true;
  } catch {
    return false;
  }
}

function renderScore() {
  elements.stars.textContent = stars;
  elements.streak.textContent = streak;
  elements.round.textContent = round;
}

function renderPrompt(word) {
  elements.prompt.replaceChildren();

  word.split(/(\s+|-)/).forEach((part) => {
    if (/^\s+$/.test(part)) {
      const space = document.createElement("span");
      space.className = "word-space";
      space.textContent = " ";
      elements.prompt.append(space);
      return;
    }

    if (part === "-") {
      const hyphen = document.createElement("span");
      hyphen.className = "word-hyphen";
      hyphen.textContent = "-";
      elements.prompt.append(hyphen);
      return;
    }

    const letters = [...part].filter(isLetter);
    [...part].forEach((letter, index) => {
      const tile = document.createElement("span");
      tile.className = "tile";
      if (!isLetter(letter) || index === 0 || index === part.length - 1 || letters.length <= 2) {
        tile.textContent = letter;
      } else {
        tile.textContent = "·";
        tile.classList.add("missing");
      }
      elements.prompt.append(tile);
    });
  });
}

function pickWord() {
  if (!words.length) {
    words = defaultWords;
  }

  let nextIndex = Math.floor(Math.random() * words.length);
  if (words.length > 1) {
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * words.length);
    }
  }

  currentIndex = nextIndex;
  currentWord = words[currentIndex];
  elements.emoji.textContent = currentWord.emoji || "✨";
  elements.phrase.textContent = getWordClue(currentWord);
  elements.input.value = "";
  elements.input.maxLength = Math.max(currentWord.word.length + 4, hiddenLettersOf(currentWord.word).length + 2, 3);
  setHint("default");
  renderPrompt(currentWord.word);
}

function renderHandwritingScore() {
  elements.handwritingPages.textContent = handwritingPages;
  elements.handwritingRound.textContent = handwritingRound;
}

function prepareHandwritingPrompt(word) {
  elements.handwritingPrompt.replaceChildren();
  handwritingTargetLetters = [];
  handwritingSolvedLetters = [];
  handwritingNextLetterIndex = 0;

  word.split(/(\s+|-)/).forEach((part) => {
    if (/^\s+$/.test(part)) {
      const space = document.createElement("span");
      space.className = "word-space";
      space.textContent = " ";
      elements.handwritingPrompt.append(space);
      return;
    }

    if (part === "-") {
      const hyphen = document.createElement("span");
      hyphen.className = "word-hyphen";
      hyphen.textContent = "-";
      elements.handwritingPrompt.append(hyphen);
      return;
    }

    const letters = [...part].filter(isLetter);
    let letterPosition = 0;
    [...part].forEach((letter) => {
      const tile = document.createElement("span");
      tile.className = "tile";
      if (!isLetter(letter)) {
        tile.textContent = letter;
      } else {
        const letterIndex = handwritingTargetLetters.length;
        const isEdgeLetter = letterPosition === 0 || letterPosition === letters.length - 1;
        handwritingTargetLetters.push(letter);
        handwritingSolvedLetters.push("");
        tile.textContent = isEdgeLetter ? letter : "·";
        tile.classList.add("pending");
        tile.dataset.letterIndex = String(letterIndex);
        letterPosition += 1;
      }
      elements.handwritingPrompt.append(tile);
    });
  });
}

function fillNextHandwritingLetter() {
  const tile = elements.handwritingPrompt.querySelector(`[data-letter-index="${handwritingNextLetterIndex}"]`);
  if (!tile) {
    return;
  }

  tile.textContent = handwritingTargetLetters[handwritingNextLetterIndex];
  tile.classList.remove("pending");
  tile.classList.add("filled");
  handwritingSolvedLetters[handwritingNextLetterIndex] = handwritingTargetLetters[handwritingNextLetterIndex];
  handwritingNextLetterIndex += 1;
}

function clearHandwritingInput() {
  elements.handwritingRecognized.value = "";
  window.requestAnimationFrame(() => {
    elements.handwritingRecognized.focus();
    elements.handwritingRecognized.select();
  });
}

function processHandwritingRecognition(value) {
  const letters = [...normalizeExactCase(value)].filter(isLetter);
  if (!letters.length || !handwritingCurrentWord) {
    return;
  }

  const letter = letters[letters.length - 1];
  const expected = handwritingTargetLetters[handwritingNextLetterIndex];
  if (!expected) {
    return;
  }

  if (sameGermanLetter(letter, expected)) {
    fillNextHandwritingLetter();
    clearHandwritingInput();

    if (handwritingNextLetterIndex >= handwritingTargetLetters.length) {
      finishHandwritingPage();
      return;
    }

    setHandwritingHint("correct");
  } else {
    elements.handwritingRecognized.value = letter;
    elements.handwritingRecognized.select();
    setHandwritingHint("try");
  }
}

function pickHandwritingWord() {
  if (!words.length) {
    words = defaultRebusWords;
  }

  let nextIndex = Math.floor(Math.random() * words.length);
  if (words.length > 1) {
    while (nextIndex === handwritingCurrentIndex) {
      nextIndex = Math.floor(Math.random() * words.length);
    }
  }

  handwritingCurrentIndex = nextIndex;
  handwritingCurrentWord = words[handwritingCurrentIndex];
  elements.handwritingEmoji.textContent = handwritingCurrentWord.emoji || "✍️";
  elements.handwritingRecognized.value = "";
  prepareHandwritingPrompt(handwritingCurrentWord.word);
  setHandwritingHint("default");
  renderHandwritingScore();
  speak(handwritingCurrentWord.word);
  window.requestAnimationFrame(() => elements.handwritingRecognized.focus());
}

function finishHandwritingPage() {
  if (!handwritingCurrentWord) {
    return;
  }

  if (handwritingTargetLetters.length && handwritingNextLetterIndex < handwritingTargetLetters.length) {
    setHandwritingHint("try");
    elements.handwritingRecognized.focus();
    return;
  }

  handwritingPages += 1;
  handwritingRound += 1;
  localStorage.setItem("handwritingPages", String(handwritingPages));
  renderHandwritingScore();
  setHandwritingHint("done");
  showReward("🌟", t("handwritingDone"), 1200, pickHandwritingWord);
}

function showReward(emoji, text, duration = 1450, afterClose = null, textColorClass = "") {
  elements.rewardEmoji.textContent = emoji;
  elements.rewardText.textContent = text;
  elements.rewardText.className = textColorClass ? `reward-text ${textColorClass}` : "reward-text";
  elements.rewardLayer.classList.add("show");
  elements.rewardLayer.setAttribute("aria-hidden", "false");

  window.setTimeout(() => {
    elements.rewardLayer.classList.remove("show");
    elements.rewardLayer.setAttribute("aria-hidden", "true");
    if (afterClose) {
      afterClose();
    }
  }, duration);
}

function showWordReward() {
  const rewards = currentLanguage === "de" ? wordRewardsDe : wordRewards;
  const reward = rewards[Math.floor(Math.random() * rewards.length)];
  showReward(reward[0], reward[1], 1450, () => {
    round += 1;
    renderScore();
    pickWord();
    elements.input.focus();
  });
}

function checkAnswer() {
  const hiddenAnswer = normalizeExactCase(hiddenLettersOf(currentWord.word)).replace(/\s/g, "");
  const fullAnswer = normalizeExactCase(currentWord.word);
  const given = normalizeExactCase(elements.input.value);
  const compactGiven = given.replace(/\s/g, "");

  if (compactGiven === hiddenAnswer || given === fullAnswer) {
    stars += 1;
    streak += 1;
    localStorage.setItem("wordGardenStars", String(stars));
    setHint("success", currentWord.word);
    renderScore();
    showWordReward();
    speak(currentWord.word);
    return;
  }

  streak = 0;
  setHint("try");
  renderScore();
  elements.input.select();
}

function articleWords() {
  return articlePracticeWords.filter((item) => cleanArticle(item.article));
}

function renderArticleScore() {
  elements.articleCorrect.textContent = articleCorrect;
  elements.articleStreak.textContent = articleStreak;
  elements.articleRound.textContent = articleRound;
}

function setArticleHint(state, wordItem = null) {
  elements.articleHint.dataset.state = state;
  elements.articleHint.className = "hint";
  if (state === "success" && wordItem) {
    elements.articleHint.classList.add("success");
    elements.articleHint.textContent = t("articleSuccess", wordItem.article, wordItem.word);
    return;
  }
  if (state === "try" && wordItem) {
    elements.articleHint.classList.add("try");
    elements.articleHint.textContent = t("articleTry", wordItem.article, wordItem.word);
    return;
  }
  if (state === "empty") {
    elements.articleHint.classList.add("try");
    elements.articleHint.textContent = t("articleNoWords");
    return;
  }
  elements.articleHint.textContent = t("articlePrompt");
}

function pickArticleWord() {
  const candidates = articleWords();
  renderArticleScore();
  elements.articleOptions.querySelectorAll("button").forEach((button) => {
    button.disabled = !candidates.length;
    button.classList.remove("selected", "correct", "wrong");
  });

  if (!candidates.length) {
    articleCurrentWord = null;
    elements.articleEmoji.textContent = "📘";
    elements.articleWord.textContent = "DER/DIE/DAS";
    setArticleHint("empty");
    return;
  }

  let nextIndex = Math.floor(Math.random() * candidates.length);
  if (candidates.length > 1) {
    while (nextIndex === articleCurrentIndex) {
      nextIndex = Math.floor(Math.random() * candidates.length);
    }
  }

  articleCurrentIndex = nextIndex;
  articleCurrentWord = candidates[nextIndex];
  elements.articleEmoji.textContent = articleCurrentWord.emoji || "📘";
  elements.articleWord.textContent = articleCurrentWord.word;
  elements.articleWord.classList.remove("article-der", "article-die", "article-das");
  setArticleHint("default");
}

function chooseArticle(article) {
  if (!articleCurrentWord) {
    return;
  }

  const isCorrect = article === articleCurrentWord.article;
  const articleButtons = elements.articleOptions.querySelectorAll("button");

  if (isCorrect) {
    articleButtons.forEach((button) => {
      const buttonArticle = button.dataset.article;
      button.classList.toggle("selected", buttonArticle === article);
      button.classList.toggle("correct", buttonArticle === articleCurrentWord.article);
      button.classList.remove("wrong");
      button.disabled = true;
    });
    articleCorrect += 1;
    articleStreak += 1;
    elements.articleWord.classList.remove("article-der", "article-die", "article-das");
    elements.articleWord.classList.add(`article-${articleCurrentWord.article}`);
    localStorage.setItem("articleGameCorrect", String(articleCorrect));
    setArticleHint("success", articleCurrentWord);
    showReward(
      "🏆",
      t("articleSuccess", articleCurrentWord.article, articleCurrentWord.word),
      1150,
      nextArticleRound,
      `article-${articleCurrentWord.article}`
    );
    speak(`${articleCurrentWord.article} ${articleCurrentWord.word}`);
  } else {
    articleButtons.forEach((button) => {
      const buttonArticle = button.dataset.article;
      button.classList.toggle("selected", buttonArticle === article);
      button.classList.remove("correct");
      button.classList.toggle("wrong", buttonArticle === article);
      button.disabled = false;
    });
    articleStreak = 0;
    setArticleHint("try", articleCurrentWord);
  }

  renderArticleScore();
}

function nextArticleRound() {
  articleRound += 1;
  renderArticleScore();
  pickArticleWord();
}

let germanVoice = null;

function findGermanVoice() {
  if (!("speechSynthesis" in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) {
    return null;
  }

  const germanVoices = voices.filter((voice) => /^de([-_]|$)/i.test(voice.lang));
  return germanVoices.find((voice) => /^de[-_]DE$/i.test(voice.lang))
    || germanVoices.find((voice) => /^de[-_]AT$/i.test(voice.lang))
    || germanVoices.find((voice) => /^de[-_]CH$/i.test(voice.lang))
    || germanVoices[0]
    || null;
}

function refreshGermanVoice() {
  germanVoice = findGermanVoice();
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  if (!germanVoice) {
    refreshGermanVoice();
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = germanVoice?.lang || "de-DE";
  if (germanVoice) {
    utterance.voice = germanVoice;
  }
  utterance.rate = 0.82;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function serializeWords() {
  return words.map((item) => `${item.word}, ${item.emoji || "✨"}, ${item.clue || ""}`).join("\n");
}

function parseWords(value) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(",").map((part) => part.trim());
      const word = cleanWord(parts[0]);
      const decorated = decorateWord(word);
      return {
        word,
        emoji: parts[1] || decorated.emoji,
        clue: parts.slice(2).join(", ") || decorated.clue
      };
    })
    .filter((item) => item.word.length >= 2);
}

function serializeWords() {
  return words.map((item) => `${item.word}, ${item.article || ""}, ${item.emoji || "✨"}, ${item.clue || ""}`).join("\n");
}

function parseWords(value) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(",").map((part) => part.trim());
      const word = cleanWord(parts[0]);
      const decorated = decorateWord(word);
      const article = cleanArticle(parts[1] || "");
      const emojiIndex = article ? 2 : 1;
      const clueIndex = article ? 3 : 2;
      return {
        word,
        article,
        emoji: parts[emojiIndex] || decorated.emoji,
        clue: parts.slice(clueIndex).join(", ") || decorated.clue
      };
    })
    .filter((item) => item.word.length >= 2);
}

function serializeRebusWords() {
  return words.map((item) => `${item.word}, ${item.emoji || "✨"}, ${item.clue || ""}`).join("\n");
}

function parseRebusWords(value) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(",").map((part) => part.trim());
      const word = cleanWord(parts[0]);
      const decorated = decorateWord(word);
      return {
        word,
        article: "",
        emoji: parts[1] || decorated.emoji,
        clue: parts.slice(2).join(", ") || decorated.clue
      };
    })
    .filter((item) => item.word.length >= 2);
}

function serializeArticleWords() {
  return articlePracticeWords.map((item) => `${item.word}, ${item.article}, ${item.emoji || "📘"}`).join("\n");
}

function parseArticleWords(value) {
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(",").map((part) => part.trim());
      const word = cleanWord(parts[0]);
      const decorated = decorateWord(word);
      const article = cleanArticle(parts[1] || "");
      return {
        word,
        article,
        emoji: parts[2] || decorated.emoji,
        clue: decorated.clue
      };
    })
    .filter((item) => item.word.length >= 2 && item.article);
}

function openAdmin() {
  elements.wordList.value = serializeRebusWords();
  elements.articleWordList.value = serializeArticleWords();
  setAdminNote("ready");
  elements.wordList.focus();
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeAdditionProblem(index = 0) {
  let left = randomInt(4, 79);
  let right = randomInt(3, 35);
  while (left + right > 100) {
    left = randomInt(4, 79);
    right = randomInt(3, 35);
  }

  return {
    left,
    operator: "+",
    right,
    answer: left + right,
    tip: makeMathTip(left, "+", right, index)
  };
}

function makeSubtractionProblem(index = 0) {
  const left = randomInt(20, 100);
  const right = randomInt(2, Math.min(49, left));

  return {
    left,
    operator: "-",
    right,
    answer: left - right,
    tip: makeMathTip(left, "-", right, index)
  };
}

function makeMathTip(left, operator, right, index = 0) {
  const tens = Math.floor(right / 10) * 10;
  const ones = right % 10;
  const firstPart = tens > 0 ? tens : ones;

  return {
    first: `${left} ${operator} ${firstPart} =`,
    second: "",
    schoolExamples: operator === "+"
      ? makeAdditionSchoolExamples(left, right)
      : makeSubtractionSchoolExamples(left, right)
  };
}

function makeAdditionSchoolExamples(left, right) {
  return [
    { name: "Lilli", steps: makeAdditionTensFirstSteps(right) },
    { name: "Emil", steps: makeAdditionOnesFirstSteps(right) },
    { name: "Willi", steps: makeAdditionMakeTenSteps(left, right) }
  ];
}

function makeSubtractionSchoolExamples(left, right) {
  return [
    { name: "Mira", steps: makeSubtractionOnesFirstSteps(right) },
    { name: "Rudi", steps: makeSubtractionTensFirstSteps(right) },
    { name: "Gabi", steps: makeSubtractionCompensationSteps(right) }
  ];
}

function makeAdditionTensFirstSteps(right) {
  const tens = Math.floor(right / 10) * 10;
  const ones = right % 10;
  const steps = [];
  if (tens > 0) {
    steps.push({ label: `+ ${tens}`, direction: "right" });
  }
  if (ones > 0) {
    steps.push({ label: `+ ${ones}`, direction: "right" });
  }
  return steps.length ? steps : [{ label: `+ ${right}`, direction: "right" }];
}

function makeAdditionOnesFirstSteps(right) {
  const tens = Math.floor(right / 10) * 10;
  const ones = right % 10;
  const steps = [];
  if (ones > 0) {
    steps.push({ label: `+ ${ones}`, direction: "right" });
  }
  if (tens > 0) {
    steps.push({ label: `+ ${tens}`, direction: "right" });
  }
  return steps.length ? steps : [{ label: `+ ${right}`, direction: "right" }];
}

function makeAdditionMakeTenSteps(left, right) {
  const bridge = (10 - (left % 10)) % 10;
  if (bridge > 0 && bridge < right) {
    return [
      { label: `+ ${bridge}`, direction: "right" },
      { label: `+ ${right - bridge}`, direction: "right" }
    ];
  }
  return makeAdditionTensFirstSteps(right);
}

function makeSubtractionTensFirstSteps(right) {
  const tens = Math.floor(right / 10) * 10;
  const ones = right % 10;
  const steps = [];
  if (tens > 0) {
    steps.push({ label: `- ${tens}`, direction: "left" });
  }
  if (ones > 0) {
    steps.push({ label: `- ${ones}`, direction: "left" });
  }
  return steps.length ? steps : [{ label: `- ${right}`, direction: "left" }];
}

function makeSubtractionOnesFirstSteps(right) {
  const tens = Math.floor(right / 10) * 10;
  const ones = right % 10;
  const steps = [];
  if (ones > 0) {
    steps.push({ label: `- ${ones}`, direction: "left" });
  }
  if (tens > 0) {
    steps.push({ label: `- ${tens}`, direction: "left" });
  }
  return steps.length ? steps : [{ label: `- ${right}`, direction: "left" }];
}

function makeSubtractionCompensationSteps(right) {
  const tens = Math.floor(right / 10) * 10;
  const ones = right % 10;
  if (ones > 0) {
    const rounded = tens + 10;
    return [
      { label: `- ${rounded}`, direction: "left" },
      { label: `+ ${10 - ones}`, direction: "right" }
    ];
  }
  return makeSubtractionTensFirstSteps(right);
}

function shuffle(items) {
  return items
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function createMathProblems() {
  const additions = Array.from({ length: 12 }, (_, index) => makeAdditionProblem(index));
  const subtractions = Array.from({ length: 12 }, (_, index) => makeSubtractionProblem(index));
  return shuffle([...additions, ...subtractions]);
}

function ensureMathWorksheet() {
  if (!mathProblems.length) {
    resetMathWorksheet();
  }
}

function resetMathWorksheet() {
  stopMathTimer();
  stopContestTimer();
  mathProblems = createMathProblems();
  mathStarted = false;
  mathEnded = false;
  showStandardMathView();
  elements.startOptions.classList.add("hidden");
  updateTimerDisplay(mathSelectedMinutes * 60);
  renderMathWorksheet();
  updateMathProgress();
}

function renderMathWorksheet() {
  elements.worksheet.replaceChildren();
  elements.worksheet.classList.toggle("tips-enabled", mathFeedbackMode === "tips" || mathFeedbackMode === "school");
  elements.worksheet.classList.toggle("school-enabled", mathFeedbackMode === "school");
  elements.worksheet.classList.toggle("answers-revealed", mathEnded);
  mathProblems.forEach((problem, index) => {
    const row = document.createElement("label");
    row.className = "problem";
    row.dataset.index = String(index);

    const equation = document.createElement("span");
    equation.textContent = `${problem.left} ${problem.operator} ${problem.right} =`;

    const input = document.createElement("input");
    input.type = "tel";
    input.inputMode = "numeric";
    input.pattern = "[0-9]*";
    input.autocomplete = "off";
    input.disabled = !mathStarted || mathEnded;
    input.setAttribute("aria-label", `${problem.left} ${problem.operator} ${problem.right}`);
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(0, 3);
      if (showsImmediateMathFeedback()) {
        markProblem(row, problem, input.value);
      } else {
        row.classList.remove("correct", "wrong");
        row.querySelector(".answer-result").textContent = "";
      }
      updateMathProgress();
      if (showsImmediateMathFeedback() && Number(input.value) === problem.answer) {
        focusNextMathInput(index);
      }
    });

    const result = document.createElement("span");
    result.className = "answer-result";
    result.setAttribute("aria-live", "polite");

    row.append(equation, input, result);
    if (shouldShowTipForProblem(problem)) {
      row.append(createTipBox(problem));
    }
    elements.worksheet.append(row);
  });
}

function shouldShowTipForProblem(problem) {
  if (mathFeedbackMode === "tips") {
    return true;
  }
  if (mathFeedbackMode !== "school") {
    return false;
  }
  return crossesTenBoundary(problem);
}

function crossesTenBoundary(problem) {
  const startGroup = Math.floor(problem.left / 10);
  const endGroup = Math.floor(problem.answer / 10);
  return startGroup !== endGroup;
}

function showsImmediateMathFeedback() {
  return mathFeedbackMode === "instant" || mathFeedbackMode === "tips" || mathFeedbackMode === "school";
}

function createTipBox(problem) {
  const wrap = document.createElement("div");
  wrap.className = "tip-wrap";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "tip-toggle";
  button.textContent = t("showTip");

  const box = document.createElement("div");
  box.className = "tip-box hidden";
  if (mathFeedbackMode === "school") {
    box.append(createSchoolGraphs(problem));
  } else {
    const firstStep = document.createElement("span");
    firstStep.textContent = problem.tip.first;
    box.append(firstStep);
    if (problem.tip.second) {
      const secondStep = document.createElement("span");
      secondStep.textContent = problem.tip.second;
      box.append(secondStep);
    }
  }

  button.addEventListener("click", () => {
    const isHidden = box.classList.toggle("hidden");
    button.textContent = isHidden ? t("showTip") : t("hideTip");
  });

  wrap.append(button, box);
  return wrap;
}

function createSchoolGraphs(problem) {
  const graphs = document.createElement("div");
  graphs.className = "school-graphs";
  problem.tip.schoolExamples.forEach((example) => {
    graphs.append(createSchoolGraph(problem, example));
  });
  return graphs;
}

function createSchoolGraph(problem, example) {
  const graph = document.createElement("div");
  graph.className = "school-graph";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 260 104");
  svg.setAttribute("aria-hidden", "true");

  const baseline = createSvgElement("line", { x1: 18, y1: 72, x2: 242, y2: 72, class: "school-line" });
  svg.append(baseline);

  const steps = example.steps.slice(0, 2);
  const points = getSchoolPoints(problem.operator, steps);
  steps.forEach((step, index) => {
    const [start, end] = points.segments[index];
    svg.append(createArc(start, end, index, step.direction));
    svg.append(createSvgElement("text", {
      x: (start + end) / 2,
      y: index === 0 ? 24 : 38,
      class: "school-jump"
    }, step.label));
  });

  svg.append(createSvgElement("text", { x: points.startX, y: 92, class: "school-number" }, String(problem.left)));
  svg.append(createSvgElement("text", { x: points.endX, y: 92, class: "school-number school-blank" }, "__"));
  svg.append(createSvgElement("text", { x: 130, y: 94, class: "school-name" }, example.name));

  graph.append(svg);
  return graph;
}

function getSchoolPoints(operator, steps) {
  const startX = operator === "+" ? 32 : 228;
  const totalDistance = 196;
  const totalValue = steps.reduce((sum, step) => sum + getStepValue(step), 0) || 1;
  let currentX = startX;
  const segments = steps.map((step) => {
    const distance = (getStepValue(step) / totalValue) * totalDistance;
    const nextX = step.direction === "right" ? currentX + distance : currentX - distance;
    const segment = [currentX, nextX];
    currentX = nextX;
    return segment;
  });

  return {
    startX,
    endX: currentX,
    segments
  };
}

function getStepValue(step) {
  const value = Number(step.label.replace(/[^\d]/g, ""));
  return Number.isFinite(value) && value > 0 ? value : 1;
}

function createArc(start, end, index, direction) {
  const arcTop = index === 0 ? 20 : 34;
  const sweep = direction === "right" ? 1 : 0;
  const radius = Math.abs(end - start) / 2;
  return createSvgElement("path", {
    d: `M ${start} 70 A ${radius} ${arcTop} 0 0 ${sweep} ${end} 70`,
    class: "school-arc"
  });
}

function createSvgElement(tag, attributes, text = "") {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  if (text) {
    element.textContent = text;
  }
  return element;
}

function focusNextMathInput(currentIndex) {
  const nextInput = getMathInputs().find((input, index) => index > currentIndex && !input.value && !input.disabled);
  if (nextInput) {
    nextInput.focus();
  }
}

function markProblem(row, problem, value, revealAnswer = false) {
  const result = row.querySelector(".answer-result");
  row.classList.remove("correct", "wrong");
  if (result) {
    result.textContent = "";
  }
  if (!value) {
    if (revealAnswer && result) {
      result.textContent = `= ${problem.answer}`;
    }
    return;
  }

  const isCorrect = Number(value) === problem.answer;
  row.classList.add(isCorrect ? "correct" : "wrong");
  if (revealAnswer && result) {
    result.textContent = isCorrect ? "✓" : `= ${problem.answer}`;
  }
}

function getMathInputs() {
  return [...elements.worksheet.querySelectorAll("input")];
}

function countCorrectMath() {
  return getMathInputs().filter((input, index) => input.value !== "" && Number(input.value) === mathProblems[index].answer).length;
}

function allMathCorrect() {
  return mathProblems.length > 0 && countCorrectMath() === mathProblems.length;
}

function updateMathProgress() {
  const correct = countCorrectMath();
  if (showsImmediateMathFeedback() || mathEnded || !mathStarted) {
    document.querySelector(".math-progress").classList.remove("concealed");
    elements.mathCorrect.textContent = correct;
    elements.mathLeft.textContent = Math.max(mathProblems.length - correct, 0);
    return;
  }

  document.querySelector(".math-progress").classList.add("concealed");
  elements.mathCorrect.textContent = "—";
  elements.mathLeft.textContent = "—";
}

function updateTimerDisplay(totalSeconds) {
  const seconds = Math.max(0, totalSeconds);
  const minutesPart = Math.floor(seconds / 60);
  const secondsPart = seconds % 60;
  elements.timerDisplay.textContent = `${minutesPart}:${String(secondsPart).padStart(2, "0")}`;
}

function stopMathTimer() {
  if (mathTimer) {
    window.clearInterval(mathTimer);
    mathTimer = null;
  }
}

function startMathTimer() {
  stopMathTimer();
  mathDeadline = Date.now() + mathSelectedMinutes * 60 * 1000;
  updateTimerDisplay(mathSelectedMinutes * 60);

  mathTimer = window.setInterval(() => {
    const remaining = Math.ceil((mathDeadline - Date.now()) / 1000);
    updateTimerDisplay(remaining);
    if (remaining <= 0) {
      endMath(allMathCorrect());
    }
  }, 250);
}

function showMathStartOptions() {
  if (mathStarted && !mathEnded) {
    return;
  }

  elements.startOptions.classList.remove("hidden");
}

function startMath(mode) {
  if (mode === "contest") {
    showContestSetup();
    return;
  }

  if (mathEnded || !mathProblems.length) {
    resetMathWorksheet();
  }

  stopContestTimer();
  showStandardMathView();
  selectMathFeedback(mode);
  elements.startOptions.classList.add("hidden");
  mathStarted = true;
  mathEnded = false;
  renderMathWorksheet();
  updateMathProgress();
  startMathTimer();
  const firstInput = elements.worksheet.querySelector("input");
  if (firstInput) {
    firstInput.focus();
  }
}

function endMath(wasSuccessful) {
  if (mathEnded) {
    return;
  }

  mathEnded = true;
  stopMathTimer();
  getMathInputs().forEach((input) => {
    input.disabled = true;
  });
  revealMathAnswers();
  updateMathProgress();
  updateTimerDisplay(Math.max(0, Math.ceil((mathDeadline - Date.now()) / 1000)));
  showReward(wasSuccessful ? "😄" : "😢", wasSuccessful ? t("allDone") : t("timeUp"), 2400);
}

function revealMathAnswers() {
  elements.worksheet.classList.add("answers-revealed");
  [...elements.worksheet.querySelectorAll(".problem")].forEach((row, index) => {
    const input = row.querySelector("input");
    markProblem(row, mathProblems[index], input.value, true);
  });
}

function selectMathTime(minutes) {
  mathSelectedMinutes = minutes;
  [...elements.timeOptions.querySelectorAll("button")].forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.minutes) === minutes);
  });

  if (!mathStarted || mathEnded) {
    updateTimerDisplay(mathSelectedMinutes * 60);
  }
}

function selectMathFeedback(mode) {
  mathFeedbackMode = mode;

  getMathInputs().forEach((input, index) => {
    const row = input.closest(".problem");
    if (mode === "instant" || mode === "tips" || mode === "school") {
      markProblem(row, mathProblems[index], input.value);
    } else if (!mathEnded) {
      row.classList.remove("correct", "wrong");
      row.querySelector(".answer-result").textContent = "";
    }
  });
  updateMathProgress();
}

function showStandardMathView() {
  elements.contestPanel.classList.add("hidden");
  elements.mathProgress.classList.remove("hidden");
  elements.worksheet.classList.remove("hidden");
  elements.mathControls.classList.remove("hidden");
}

function showContestSetup() {
  stopMathTimer();
  stopContestTimer();
  mathStarted = false;
  mathEnded = false;
  elements.startOptions.classList.add("hidden");
  elements.mathProgress.classList.add("hidden");
  elements.worksheet.classList.add("hidden");
  elements.mathControls.classList.add("hidden");
  elements.contestPanel.classList.remove("hidden");
  elements.contestSetup.classList.remove("hidden");
  elements.contestArena.classList.add("hidden");
  elements.contestResults.classList.add("hidden");
  elements.contestMessage.textContent = "";
  updateTimerDisplay(mathSelectedMinutes * 60);
  renderContestStatus();
}

function selectContestPlayers(count) {
  contestPlayerCount = count;
  [...elements.contestPlayerOptions.querySelectorAll("button")].forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.players) === count);
  });
  renderContestStatus();
}

function selectContestSeconds(seconds) {
  contestSeconds = seconds;
  [...elements.contestTimeOptions.querySelectorAll("button")].forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.seconds) === seconds);
  });
  elements.contestTimer.textContent = String(seconds);
}

function startContest() {
  contestProblems = createMathProblems();
  contestScores = Array.from({ length: contestPlayerCount }, () => 0);
  contestIndex = 0;
  contestAnswered = false;
  elements.contestSetup.classList.add("hidden");
  elements.contestResults.classList.add("hidden");
  elements.contestArena.classList.remove("hidden");
  renderContestQuestion();
}

function renderContestQuestion() {
  const problem = contestProblems[contestIndex];
  contestAnswered = false;
  elements.contestPlayer.textContent = getContestPlayerName(currentContestPlayerIndex());
  elements.contestRound.textContent = `${contestIndex + 1} / ${contestProblems.length}`;
  elements.contestEquation.textContent = `${problem.left} ${problem.operator} ${problem.right} =`;
  elements.contestAnswer.value = "";
  elements.contestAnswer.disabled = false;
  elements.contestMessage.className = "contest-message";
  elements.contestMessage.textContent = "";
  elements.submitContest.disabled = false;
  elements.submitContest.classList.remove("hidden");
  elements.nextContest.classList.add("hidden");
  renderContestScoreboard(elements.contestScoreboard, currentContestPlayerIndex());
  startContestTimer();
  elements.contestAnswer.focus();
}

function currentContestPlayerIndex() {
  return contestIndex % contestPlayerCount;
}

function getContestPlayerName(index) {
  return t("playerName", index + 1);
}

function startContestTimer() {
  stopContestTimer();
  updateContestTimer(contestSeconds);
  contestDeadline = Date.now() + contestSeconds * 1000;
  contestTimer = window.setInterval(() => {
    const remaining = Math.ceil((contestDeadline - Date.now()) / 1000);
    updateContestTimer(remaining);
    if (remaining <= 0) {
      finishContestQuestion(false, true);
    }
  }, 250);
}

function updateContestTimer(seconds) {
  elements.contestTimer.textContent = String(Math.max(0, seconds));
}

function stopContestTimer() {
  if (contestTimer) {
    window.clearInterval(contestTimer);
    contestTimer = null;
  }
}

function submitContestAnswer() {
  if (contestAnswered || !contestProblems.length) {
    return;
  }
  const problem = contestProblems[contestIndex];
  const isCorrect = elements.contestAnswer.value !== "" && Number(elements.contestAnswer.value) === problem.answer;
  finishContestQuestion(isCorrect, false);
}

function finishContestQuestion(isCorrect, timedOut) {
  if (contestAnswered || !contestProblems.length) {
    return;
  }

  stopContestTimer();
  contestAnswered = true;
  const problem = contestProblems[contestIndex];
  const playerIndex = currentContestPlayerIndex();
  if (isCorrect) {
    contestScores[playerIndex] += 1;
  }

  elements.contestAnswer.disabled = true;
  elements.submitContest.disabled = true;
  elements.submitContest.classList.add("hidden");
  elements.nextContest.classList.remove("hidden");
  elements.contestMessage.className = `contest-message ${isCorrect ? "good" : "bad"}`;
  elements.contestMessage.textContent = isCorrect
    ? t("contestCorrect")
    : timedOut
      ? t("contestTimeout", problem.answer)
      : t("contestWrong", problem.answer);
  elements.nextContest.textContent = contestIndex + 1 >= contestProblems.length ? t("finish") : t("nextTurn");
  renderContestScoreboard(elements.contestScoreboard, playerIndex);
}

function advanceContest() {
  if (!contestAnswered) {
    return;
  }
  contestIndex += 1;
  if (contestIndex >= contestProblems.length) {
    endContest();
    return;
  }
  renderContestQuestion();
}

function endContest() {
  stopContestTimer();
  elements.contestArena.classList.add("hidden");
  elements.contestResults.classList.remove("hidden");
  renderContestResults();
  showReward(elements.contestWinner.dataset.tie === "true" ? "🤝" : "🏆", elements.contestWinner.textContent, 2200);
}

function renderContestResults() {
  const maxScore = Math.max(...contestScores);
  const winners = contestScores
    .map((score, index) => ({ score, index }))
    .filter((entry) => entry.score === maxScore)
    .map((entry) => getContestPlayerName(entry.index));
  elements.contestWinner.dataset.tie = winners.length === 1 ? "false" : "true";
  elements.contestWinner.textContent = winners.length === 1
    ? t("contestWinner", winners[0])
    : t("contestTie", winners.join(", "));
  renderContestScoreboard(elements.contestFinalScoreboard, -1, winners);
}

function renderContestScoreboard(target, currentIndex = -1, winnerNames = []) {
  target.replaceChildren();
  contestScores.forEach((score, index) => {
    const card = document.createElement("div");
    const name = getContestPlayerName(index);
    card.className = "contest-score";
    card.classList.toggle("current", index === currentIndex);
    card.classList.toggle("winner", winnerNames.includes(name));

    const label = document.createElement("span");
    label.className = "score-label";
    label.textContent = name;

    const value = document.createElement("strong");
    value.textContent = String(score);

    card.append(label, value);
    target.append(card);
  });
}

function renderContestStatus() {
  if (!elements.contestPlayer || !contestScores.length) {
    if (elements.contestPlayer) {
      elements.contestPlayer.textContent = getContestPlayerName(0);
      elements.contestRound.textContent = `1 / 24`;
      elements.contestTimer.textContent = String(contestSeconds);
    }
    return;
  }

  elements.contestPlayer.textContent = getContestPlayerName(currentContestPlayerIndex());
  elements.contestRound.textContent = `${Math.min(contestIndex + 1, contestProblems.length || 24)} / ${contestProblems.length || 24}`;
  renderContestScoreboard(elements.contestScoreboard, currentContestPlayerIndex());
  if (!elements.contestResults.classList.contains("hidden")) {
    renderContestResults();
  }
}

elements.openGerman.addEventListener("click", () => showScreen("german"));
elements.openRebus.addEventListener("click", () => showGermanApp("rebus"));
elements.openArticles.addEventListener("click", () => showGermanApp("articles"));
elements.openHandwriting.addEventListener("click", () => showGermanApp("handwriting"));
elements.germanMenuButtons.forEach((button) => {
  button.addEventListener("click", showGermanMenu);
});
elements.openMath.addEventListener("click", () => showScreen("math"));
elements.openNumberSprint.addEventListener("click", () => showMathApp("number-sprint"));
elements.mathMenuButtons.forEach((button) => {
  button.addEventListener("click", showMathMenu);
});
elements.openAdmin.addEventListener("click", () => showScreen("admin"));
elements.languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "de" : "en";
  localStorage.setItem("practiceLanguage", currentLanguage);
  applyLanguage();
  if (currentWord) {
    elements.phrase.textContent = getWordClue(currentWord);
  }
});
if ("speechSynthesis" in window) {
  refreshGermanVoice();
  window.speechSynthesis.addEventListener("voiceschanged", refreshGermanVoice);
}
elements.germanHome.addEventListener("click", () => showScreen("home"));
elements.mathHome.addEventListener("click", () => {
  resetMathWorksheet();
  stopContestTimer();
  showScreen("home");
});
elements.adminHome.addEventListener("click", () => showScreen("home"));

elements.check.addEventListener("click", checkAnswer);
elements.input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

elements.skip.addEventListener("click", () => {
  streak = 0;
  round += 1;
  renderScore();
  pickWord();
});

elements.speak.addEventListener("click", () => speak(currentWord.word));
elements.articleOptions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-article]");
  if (!button) {
    return;
  }
  chooseArticle(button.dataset.article);
});
elements.articleSkip.addEventListener("click", nextArticleRound);
elements.handwritingSpeak.addEventListener("click", () => {
  if (handwritingCurrentWord) {
    speak(handwritingCurrentWord.word);
  }
});
elements.handwritingRecognized.addEventListener("input", () => {
  processHandwritingRecognition(elements.handwritingRecognized.value);
});
elements.clearHandwriting.addEventListener("click", () => {
  elements.handwritingRecognized.value = "";
  elements.handwritingRecognized.focus();
  setHandwritingHint("default");
});
elements.skipHandwriting.addEventListener("click", () => {
  handwritingRound += 1;
  pickHandwritingWord();
});
elements.finishHandwriting.addEventListener("click", finishHandwritingPage);

elements.saveWords.addEventListener("click", () => {
  const nextWords = parseRebusWords(elements.wordList.value);
  const nextArticleWords = parseArticleWords(elements.articleWordList.value);
  if (!nextWords.length && !nextArticleWords.length) {
    return;
  }

  if (nextWords.length) {
    words = nextWords;
  }
  if (nextArticleWords.length) {
    articlePracticeWords = nextArticleWords;
  }
  saveWordState(words);
  saveArticleWordState(articlePracticeWords);
  pickWord();
  if (!elements.articleApp.classList.contains("hidden")) {
    pickArticleWord();
  }
  if (!elements.handwritingApp.classList.contains("hidden")) {
    pickHandwritingWord();
  }
  elements.wordList.value = serializeRebusWords();
  elements.articleWordList.value = serializeArticleWords();
  setAdminNote("saved");
});

elements.resetWords.addEventListener("click", async () => {
  const restoredFromFiles = await loadBundledWordFiles(true);
  if (!restoredFromFiles) {
    words = defaultRebusWords;
    articlePracticeWords = defaultArticleWords;
    saveWordState(words);
    saveArticleWordState(articlePracticeWords);
  }
  elements.wordList.value = serializeRebusWords();
  elements.articleWordList.value = serializeArticleWords();
  pickWord();
  if (!elements.articleApp.classList.contains("hidden")) {
    pickArticleWord();
  }
  if (!elements.handwritingApp.classList.contains("hidden")) {
    pickHandwritingWord();
  }
  setAdminNote("reset");
});

elements.timeOptions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-minutes]");
  if (!button) {
    return;
  }
  selectMathTime(Number(button.dataset.minutes));
});

elements.startOptions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-feedback]");
  if (!button) {
    return;
  }
  startMath(button.dataset.feedback);
});

elements.contestPlayerOptions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-players]");
  if (!button) {
    return;
  }
  selectContestPlayers(Number(button.dataset.players));
});

elements.contestTimeOptions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-seconds]");
  if (!button) {
    return;
  }
  selectContestSeconds(Number(button.dataset.seconds));
});

elements.startMath.addEventListener("click", showMathStartOptions);
elements.newMath.addEventListener("click", resetMathWorksheet);
elements.finishMath.addEventListener("click", () => {
  if (mathStarted && !mathEnded) {
    endMath(allMathCorrect());
  }
});
elements.startContest.addEventListener("click", startContest);
elements.submitContest.addEventListener("click", submitContestAnswer);
elements.nextContest.addEventListener("click", advanceContest);
elements.newContest.addEventListener("click", showContestSetup);
elements.contestAnswer.addEventListener("input", () => {
  elements.contestAnswer.value = elements.contestAnswer.value.replace(/\D/g, "").slice(0, 3);
});
elements.contestAnswer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitContestAnswer();
  }
});

selectMathTime(10);
selectMathFeedback("instant");
selectContestPlayers(2);
selectContestSeconds(30);
renderScore();
renderArticleScore();
applyLanguage();
pickWord();
void loadBundledWordFiles().then((loaded) => {
  if (!loaded) {
    return;
  }
  pickWord();
  if (!elements.articleApp.classList.contains("hidden")) {
    pickArticleWord();
  }
});
