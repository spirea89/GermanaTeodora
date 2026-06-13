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

const defaultWords = practiceWords.map((word) => decorateWord(word));
const wordsStorageKey = "wordGardenGermanWords";

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
    appTitle: "Germana Teodora Practice",
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
    wordTry: "Try again. You can type the hidden letters or the whole word.",
    adminTitle: "German Words",
    adminCopy: "One item per line. Add an emoji and clue with commas:",
    adminExample: "die Sonne, ☀️, Listen and fill the missing letters.",
    saveWords: "Save words",
    reset: "Reset",
    adminReady: "Saved words are used in the German game on this device.",
    adminSaved: "Saved. German practice will use this list.",
    adminReset: "Reset to the original German word list.",
    mathPractice: "Math practice",
    numberSprint: "Number Sprint",
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
    appTitle: "Germana Teodora Übung",
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
    wordTry: "Versuch es noch einmal. Du kannst die fehlenden Buchstaben oder das ganze Wort schreiben.",
    adminTitle: "Deutsche Wörter",
    adminCopy: "Ein Eintrag pro Zeile. Emoji und Hinweis mit Kommas ergänzen:",
    adminExample: "die Sonne, ☀️, Höre zu und ergänze die fehlenden Buchstaben.",
    saveWords: "Wörter speichern",
    reset: "Zurücksetzen",
    adminReady: "Gespeicherte Wörter werden auf diesem Gerät im Deutsch-Spiel benutzt.",
    adminSaved: "Gespeichert. Die Deutsch-Übung benutzt diese Liste.",
    adminReset: "Die ursprüngliche deutsche Wortliste wurde wiederhergestellt.",
    mathPractice: "Matheübung",
    numberSprint: "Zahlensprint",
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
  rewardLayer: document.querySelector("#reward-layer"),
  rewardEmoji: document.querySelector("#reward-emoji"),
  rewardText: document.querySelector("#reward-text"),
  studio: document.querySelector("#studio-panel"),
  wordList: document.querySelector("#word-list"),
  saveWords: document.querySelector("#save-words"),
  resetWords: document.querySelector("#reset-words"),
  adminNote: document.querySelector("#admin-note"),
  timeOptions: document.querySelector("#time-options"),
  startOptions: document.querySelector("#start-options"),
  timerDisplay: document.querySelector("#timer-display"),
  startMath: document.querySelector("#start-math"),
  newMath: document.querySelector("#new-math"),
  finishMath: document.querySelector("#finish-math"),
  worksheet: document.querySelector("#worksheet"),
  mathCorrect: document.querySelector("#math-correct"),
  mathLeft: document.querySelector("#math-left")
};

let words = loadWords();
let currentIndex = -1;
let currentWord = words[0];
let stars = Number(localStorage.getItem("wordGardenStars") || 0);
let streak = 0;
let round = 1;
let mathSelectedMinutes = 10;
let mathProblems = [];
let mathTimer = null;
let mathDeadline = 0;
let mathStarted = false;
let mathEnded = false;
let mathFeedbackMode = "instant";
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
  setText("#app-title", "wordGarden");
  setText(".score-row div:nth-child(1) .score-label", "stars");
  setText(".score-row div:nth-child(2) .score-label", "streak");
  setText(".score-row div:nth-child(3) .score-label", "round");
  elements.prompt.setAttribute("aria-label", t("wordPromptLabel"));
  setText(".answer-label", "answerLabel");
  elements.check.textContent = t("check");
  elements.speak.textContent = t("hearWord");
  elements.skip.textContent = t("newWord");

  setText("#admin-screen .eyebrow", "administration");
  setText("#admin-title", "adminTitle");
  setText(".studio-copy", "adminCopy");
  const adminExample = document.querySelector("#admin-screen pre");
  if (adminExample) {
    adminExample.textContent = t("adminExample");
  }
  elements.saveWords.textContent = t("saveWords");
  elements.resetWords.textContent = t("reset");
  if (!elements.adminNote.dataset.state || elements.adminNote.dataset.state === "ready") {
    setAdminNote("ready");
  }

  setText("#math-screen .eyebrow", "mathPractice");
  setText("#math-title", "numberSprint");
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
  elements.startMath.textContent = t("start");
  document.querySelector(".math-progress").setAttribute("aria-label", t("mathProgress"));
  setText(".math-progress div:nth-child(1) .score-label", "correct");
  setText(".math-progress div:nth-child(2) .score-label", "left");
  elements.worksheet.setAttribute("aria-label", t("worksheet"));
  elements.newMath.textContent = t("newWorksheet");
  elements.finishMath.textContent = t("finish");

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
    elements.input.focus();
  }

  if (screenName === "math") {
    ensureMathWorksheet();
  }

  if (screenName === "admin") {
    openAdmin();
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

function cleanWord(value) {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[^a-zA-ZäöüÄÖÜß\s-]/g, "");
}

function isLetter(character) {
  return /[a-zA-ZäöüÄÖÜß]/.test(character);
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
  const saved = localStorage.getItem(wordsStorageKey);
  if (!saved) {
    return defaultWords;
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : defaultWords;
  } catch {
    return defaultWords;
  }
}

function saveWordState(nextWords) {
  localStorage.setItem(wordsStorageKey, JSON.stringify(nextWords));
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

function showReward(emoji, text, duration = 1450, afterClose = null) {
  elements.rewardEmoji.textContent = emoji;
  elements.rewardText.textContent = text;
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
  const hiddenAnswer = normalize(hiddenLettersOf(currentWord.word)).replace(/\s/g, "");
  const fullAnswer = normalize(currentWord.word);
  const given = normalize(elements.input.value);
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

function speak(text) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
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

function openAdmin() {
  elements.wordList.value = serializeWords();
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
  mathProblems = createMathProblems();
  mathStarted = false;
  mathEnded = false;
  elements.startOptions.classList.add("hidden");
  updateTimerDisplay(mathSelectedMinutes * 60);
  renderMathWorksheet();
  updateMathProgress();
}

function renderMathWorksheet() {
  elements.worksheet.replaceChildren();
  elements.worksheet.classList.toggle("tips-enabled", mathFeedbackMode === "tips" || mathFeedbackMode === "school");
  elements.worksheet.classList.toggle("school-enabled", mathFeedbackMode === "school");
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
  if (mathEnded || !mathProblems.length) {
    resetMathWorksheet();
  }

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

elements.openGerman.addEventListener("click", () => showScreen("german"));
elements.openMath.addEventListener("click", () => showScreen("math"));
elements.openAdmin.addEventListener("click", () => showScreen("admin"));
elements.languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "de" : "en";
  localStorage.setItem("practiceLanguage", currentLanguage);
  applyLanguage();
  if (currentWord) {
    elements.phrase.textContent = getWordClue(currentWord);
  }
});
elements.germanHome.addEventListener("click", () => showScreen("home"));
elements.mathHome.addEventListener("click", () => {
  resetMathWorksheet();
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

elements.saveWords.addEventListener("click", () => {
  const nextWords = parseWords(elements.wordList.value);
  if (!nextWords.length) {
    elements.wordList.value = serializeWords();
    return;
  }

  words = nextWords;
  saveWordState(words);
  pickWord();
  elements.wordList.value = serializeWords();
  setAdminNote("saved");
});

elements.resetWords.addEventListener("click", () => {
  words = defaultWords;
  saveWordState(words);
  elements.wordList.value = serializeWords();
  pickWord();
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

elements.startMath.addEventListener("click", showMathStartOptions);
elements.newMath.addEventListener("click", resetMathWorksheet);
elements.finishMath.addEventListener("click", () => {
  if (mathStarted && !mathEnded) {
    endMath(allMathCorrect());
  }
});

selectMathTime(10);
selectMathFeedback("instant");
renderScore();
applyLanguage();
pickWord();
