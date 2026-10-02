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
const articleFocusStorageKey = "articleGameFocusWords";
const germanAppsStorageKey = "deutschUndMatheGermanWords";
const rebusWordsFile = "data/rebus-words.txt";
const articleWordsFile = "data/article-words.txt";
const animalContentStorageKey = "deutschUndMatheAnimalExplorer";
const appVersion = "2026.10.02.3";
const appVersionFile = "data/app-version.json";
const appVersionReloadKey = "deutschUndMatheVersionReloaded";

const defaultAnimals = [
  {
    id: "bat",
    icon: "🦇",
    image: "assets/fledermaus-3d.png",
    name: { en: "Bat (Fledermaus)", de: "Fledermaus" },
    alt: {
      en: "3D-style bat with its wings spread",
      de: "3D-Darstellung einer Fledermaus mit ausgebreiteten Flügeln"
    },
    intro: {
      en: "Bats are nocturnal mammals. Tap a glowing point to explore their body parts.",
      de: "Fledermäuse sind nachtaktive Säugetiere. Tippe auf einen leuchtenden Punkt und entdecke ihre Körperteile."
    },
    facts: [
      {
        id: "mammal",
        category: "body-wings",
        icon: "🍼",
        sceneIcon: "🦇",
        animation: "mammal",
        title: { en: "A flying mammal", de: "Ein fliegendes Säugetier" },
        text: {
          en: "Bats are mammals, not birds. They have fur and their babies drink their mother's milk. They are the only mammals capable of true, powered flight.",
          de: "Fledermäuse sind Säugetiere und keine Vögel. Sie haben Fell und ihre Jungen trinken Muttermilch. Sie sind die einzigen Säugetiere, die aktiv fliegen können."
        }
      },
      {
        id: "size",
        category: "body-wings",
        icon: "📏",
        sceneIcon: "3–14 cm",
        animation: "size",
        title: { en: "Small bodies", de: "Kleine Körper" },
        text: {
          en: "According to the worksheet, a bat's body can be about 3 to 14 centimetres long. Different bat species can therefore look very different in size.",
          de: "Laut Arbeitsblatt kann der Körper einer Fledermaus etwa 3 bis 14 Zentimeter lang sein. Die verschiedenen Arten können deshalb sehr unterschiedlich groß aussehen."
        }
      },
      {
        id: "weight",
        category: "body-wings",
        icon: "⚖️",
        sceneIcon: "2–200 g",
        animation: "weight",
        title: { en: "Light as a feather", de: "Leichtgewichte" },
        text: {
          en: "The worksheet gives a weight range of about 2 to 200 grams. Even a comparatively large bat can be surprisingly light.",
          de: "Das Arbeitsblatt nennt ein Gewicht von ungefähr 2 bis 200 Gramm. Selbst eine vergleichsweise große Fledermaus kann erstaunlich leicht sein."
        }
      },
      {
        id: "flight-membrane",
        category: "body-wings",
        icon: "🪽",
        sceneIcon: "〰️",
        animation: "flight",
        title: { en: "Wings made of skin", de: "Flügel aus Flughaut" },
        text: {
          en: "Bat wings do not have feathers. A thin, elastic flight membrane stretches between the fingers, body and legs and makes controlled flight possible.",
          de: "Fledermausflügel haben keine Federn. Eine dünne, elastische Flughaut spannt sich zwischen Fingern, Körper und Beinen und ermöglicht einen kontrollierten Flug."
        }
      },
      {
        id: "finger-support",
        category: "body-wings",
        icon: "🦴",
        sceneIcon: "✋",
        animation: "flight",
        title: { en: "Extra-long fingers", de: "Besonders lange Finger" },
        text: {
          en: "A bat's wing is a modified hand. Its long finger bones spread and support the flight membrane like the ribs of an umbrella.",
          de: "Der Flügel einer Fledermaus ist eine umgebildete Hand. Die langen Fingerknochen spannen und stützen die Flughaut wie die Streben eines Regenschirms."
        }
      },
      {
        id: "nocturnal",
        category: "senses-life",
        icon: "🌙",
        sceneIcon: "🌙",
        animation: "night",
        title: { en: "Awake at night", de: "In der Nacht wach" },
        text: {
          en: "Bats are nocturnal. They usually rest during the day and fly out in the evening or at night to search for food.",
          de: "Fledermäuse sind nachtaktiv. Tagsüber ruhen sie meistens, am Abend oder in der Nacht fliegen sie aus und suchen Nahrung."
        }
      },
      {
        id: "upside-down-sleep",
        category: "senses-life",
        icon: "💤",
        sceneIcon: "Zzz",
        animation: "sleep",
        title: { en: "Sleeping upside down", de: "Kopfüber schlafen" },
        text: {
          en: "Bats rest upside down in dark, quiet places such as caves, attics and old walls. Curved claws hold them securely while their body uses very little strength.",
          de: "Fledermäuse ruhen kopfüber an dunklen, ruhigen Orten wie Höhlen, Dachböden und alten Gemäuern. Gebogene Krallen halten sie sicher fest, ohne dass der Körper viel Kraft braucht."
        }
      },
      {
        id: "hearing",
        category: "senses-life",
        icon: "👂",
        sceneIcon: "♫",
        animation: "hearing",
        title: { en: "Super hearing", de: "Supergehör" },
        text: {
          en: "Hearing is a bat's most important sense. Its large outer ears collect even very quiet sounds and the faint echoes of ultrasonic calls.",
          de: "Der Hörsinn ist der wichtigste Sinn der Fledermaus. Ihre großen Ohrmuscheln fangen selbst sehr leise Geräusche und die schwachen Echos der Ultraschalllaute auf."
        }
      },
      {
        id: "echolocation",
        category: "senses-life",
        icon: "📡",
        sceneIcon: "🦟",
        animation: "echolocation",
        title: { en: "Seeing with sound", de: "Mit Tönen sehen" },
        text: {
          en: "A bat sends out ultrasonic calls. The sound bounces off insects and obstacles and returns as an echo, creating an acoustic picture of the surroundings. People hear these calls only faintly or not at all.",
          de: "Eine Fledermaus sendet Ultraschalllaute aus. Der Schall wird von Insekten und Hindernissen zurückgeworfen und kehrt als Echo zurück. So entsteht ein akustisches Bild der Umgebung. Menschen hören diese Laute nur sehr leise oder gar nicht."
        }
      },
      {
        id: "hibernation",
        category: "senses-life",
        icon: "❄️",
        sceneIcon: "❄️",
        animation: "hibernate",
        title: { en: "Saving energy in winter", de: "Energie sparen im Winter" },
        text: {
          en: "During hibernation, a bat's body temperature drops greatly to save energy. Fat reserves help it survive the winter and warm up again.",
          de: "Im Winterschlaf sinkt die Körpertemperatur der Fledermaus stark, damit sie Energie spart. Fettvorräte helfen ihr, den Winter zu überstehen und sich wieder aufzuwärmen."
        }
      },
      {
        id: "insect-food",
        category: "species-young",
        icon: "🦟",
        sceneIcon: "🦟",
        animation: "food",
        title: { en: "Insect hunters", de: "Insektenjäger" },
        text: {
          en: "The bat species living in our region mainly eat insects. Echolocation helps them find moths, mosquitoes and other small prey in darkness.",
          de: "Die bei uns lebenden Fledermausarten fressen hauptsächlich Insekten. Mit der Echoortung finden sie Motten, Mücken und andere kleine Beutetiere in der Dunkelheit."
        }
      },
      {
        id: "fruit-nectar",
        category: "species-young",
        icon: "🍌",
        sceneIcon: "🌺",
        animation: "food",
        title: { en: "Fruit and nectar", de: "Früchte und Nektar" },
        text: {
          en: "Some tropical bats are vegetarian. Depending on the species, they feed on fruit or drink sweet nectar from flowers.",
          de: "Einige tropische Fledermäuse ernähren sich vegetarisch. Je nach Art fressen sie Früchte oder trinken süßen Nektar aus Blüten."
        }
      },
      {
        id: "vampire-bats",
        category: "species-young",
        icon: "🧛",
        sceneIcon: "3",
        animation: "number",
        title: { en: "Only three vampire species", de: "Nur drei Vampirarten" },
        text: {
          en: "Only three bat species in the world feed on the blood of other animals. Most bats eat insects, fruit, nectar or other food instead.",
          de: "Nur drei Fledermausarten auf der Welt ernähren sich vom Blut anderer Tiere. Die meisten Fledermäuse fressen stattdessen Insekten, Früchte, Nektar oder andere Nahrung."
        }
      },
      {
        id: "one-baby",
        category: "species-young",
        icon: "👶",
        sceneIcon: "1",
        animation: "baby",
        title: { en: "Usually one baby", de: "Meistens nur ein Junges" },
        text: {
          en: "Bats reproduce slowly. A mother bat usually has only one young in a year and feeds it with milk like other mammals.",
          de: "Fledermäuse vermehren sich langsam. Eine Fledermausmutter bekommt meistens nur ein Junges im Jahr und säugt es wie andere Säugetiere mit Milch."
        }
      },
      {
        id: "pregnancy",
        category: "species-young",
        icon: "📅",
        sceneIcon: "40–70",
        animation: "number",
        title: { en: "40 to 70 days", de: "40 bis 70 Tage" },
        text: {
          en: "Depending on the species and living conditions, pregnancy can last about 40 to 70 days, according to the worksheet.",
          de: "Je nach Art und Lebensumständen kann die Trächtigkeit laut Arbeitsblatt ungefähr 40 bis 70 Tage dauern."
        }
      }
    ],
    tests: [
      {
        id: "body-wings",
        icon: "🪽",
        title: { en: "Body & wings", de: "Körper & Flügel" },
        subtitle: { en: "Anatomy, size and flight", de: "Körperbau, Größe und Flug" },
        questions: [
          {
            question: { en: "Which animal group do bats belong to?", de: "Zu welcher Tiergruppe gehören Fledermäuse?" },
            options: [
              { text: { en: "Mammals", de: "Säugetiere" }, correct: true },
              { text: { en: "Birds", de: "Vögel" } },
              { text: { en: "Reptiles", de: "Reptilien" } }
            ],
            explanation: { en: "Bats are the only mammals capable of true flight.", de: "Fledermäuse sind die einzigen Säugetiere, die aktiv fliegen können." }
          },
          {
            question: { en: "How large can a bat be, according to the worksheet?", de: "Wie groß kann eine Fledermaus laut Arbeitsblatt werden?" },
            options: [
              { text: { en: "About 3–14 cm", de: "Etwa 3–14 cm" }, correct: true },
              { text: { en: "About 30–50 cm", de: "Etwa 30–50 cm" } },
              { text: { en: "About 1 metre", de: "Etwa 1 Meter" } }
            ],
            explanation: { en: "The worksheet gives a body-size range of roughly 3 to 14 cm.", de: "Das Arbeitsblatt nennt eine Körpergröße von ungefähr 3 bis 14 cm." }
          },
          {
            question: { en: "How much can a bat weigh, according to the worksheet?", de: "Wie schwer kann eine Fledermaus laut Arbeitsblatt sein?" },
            options: [
              { text: { en: "About 2–200 g", de: "Etwa 2–200 g" }, correct: true },
              { text: { en: "About 1–3 kg", de: "Etwa 1–3 kg" } },
              { text: { en: "More than 10 kg", de: "Mehr als 10 kg" } }
            ],
            explanation: { en: "Different species vary greatly; the worksheet states about 2 to 200 g.", de: "Die Arten unterscheiden sich stark; das Arbeitsblatt nennt ungefähr 2 bis 200 g." }
          },
          {
            question: { en: "What are a bat's wings made of?", de: "Woraus bestehen die Flügel einer Fledermaus?" },
            options: [
              { text: { en: "A flight membrane", de: "Aus einer Flughaut" }, correct: true },
              { text: { en: "Feathers", de: "Aus Federn" } },
              { text: { en: "Scales", de: "Aus Schuppen" } }
            ],
            explanation: { en: "A thin flight membrane stretches over the arms, hands, fingers and legs.", de: "Eine dünne Flughaut spannt sich über Arme, Hände, Finger und Beine." }
          },
          {
            question: { en: "What supports and spreads the flight membrane?", de: "Was spannt und stützt die Flughaut?" },
            options: [
              { text: { en: "Long finger bones", de: "Lange Fingerknochen" }, correct: true },
              { text: { en: "Feathers", de: "Federn" } },
              { text: { en: "Horns", de: "Hörner" } }
            ],
            explanation: { en: "The wing is a modified hand with very long fingers.", de: "Der Flügel ist eine umgebildete Hand mit sehr langen Fingern." }
          }
        ]
      },
      {
        id: "senses-life",
        icon: "👂",
        title: { en: "Senses & daily life", de: "Sinne & Lebensweise" },
        subtitle: { en: "Hearing, night and winter", de: "Hören, Nacht und Winter" },
        questions: [
          {
            question: { en: "When are bats active?", de: "Wann sind Fledermäuse aktiv?" },
            options: [
              { text: { en: "At night", de: "In der Nacht" }, correct: true },
              { text: { en: "Only at midday", de: "Nur zu Mittag" } },
              { text: { en: "Only in bright sunshine", de: "Nur bei hellem Sonnenschein" } }
            ],
            explanation: { en: "Bats are nocturnal and usually rest during the day.", de: "Fledermäuse sind nachtaktiv und ruhen normalerweise am Tag." }
          },
          {
            question: { en: "Where and how do bats sleep?", de: "Wo und wie schlafen Fledermäuse?" },
            options: [
              { text: { en: "Upside down in dark, quiet places", de: "Kopfüber an dunklen, ruhigen Orten" }, correct: true },
              { text: { en: "Standing in open fields", de: "Stehend auf offenen Feldern" } },
              { text: { en: "Floating on water", de: "Auf dem Wasser treibend" } }
            ],
            explanation: { en: "They rest upside down in caves, attics and old walls.", de: "Sie ruhen kopfüber in Höhlen, auf Dachböden und in alten Gemäuern." }
          },
          {
            question: { en: "What is a bat's most important sense?", de: "Was ist der wichtigste Sinn der Fledermaus?" },
            options: [
              { text: { en: "Hearing", de: "Der Hörsinn" }, correct: true },
              { text: { en: "Taste", de: "Der Geschmackssinn" } },
              { text: { en: "Touch alone", de: "Nur der Tastsinn" } }
            ],
            explanation: { en: "Their excellent hearing lets them detect very quiet echoes.", de: "Mit ihrem ausgezeichneten Gehör können sie sehr leise Echos wahrnehmen." }
          },
          {
            question: { en: "How does echolocation help a bat?", de: "Wie hilft die Echoortung einer Fledermaus?" },
            options: [
              { text: { en: "Echoes reveal prey and obstacles", de: "Echos zeigen Beute und Hindernisse" }, correct: true },
              { text: { en: "It warms the wings", de: "Sie wärmt die Flügel" } },
              { text: { en: "It changes the fur colour", de: "Sie verändert die Fellfarbe" } }
            ],
            explanation: { en: "Ultrasonic calls bounce back and form an acoustic picture of the surroundings.", de: "Ultraschalllaute werden zurückgeworfen und ergeben ein akustisches Bild der Umgebung." }
          },
          {
            question: { en: "What happens to body temperature during hibernation?", de: "Was passiert im Winterschlaf mit der Körpertemperatur?" },
            options: [
              { text: { en: "It drops greatly", de: "Sie sinkt stark" }, correct: true },
              { text: { en: "It rises greatly", de: "Sie steigt stark" } },
              { text: { en: "It always stays exactly the same", de: "Sie bleibt immer genau gleich" } }
            ],
            explanation: { en: "Lowering body temperature saves energy; stored fat helps the bat warm up again.", de: "Die niedrigere Körpertemperatur spart Energie; Fettvorräte helfen später beim Aufwärmen." }
          }
        ]
      },
      {
        id: "species-young",
        icon: "🦇",
        title: { en: "Species & young", de: "Arten & Nachwuchs" },
        subtitle: { en: "Food, families and bat facts", de: "Nahrung, Familien und Fledermauswissen" },
        questions: [
          {
            question: { en: "What do the bat species living here mainly eat?", de: "Was fressen die bei uns lebenden Fledermausarten hauptsächlich?" },
            options: [
              { text: { en: "Insects", de: "Insekten" }, correct: true },
              { text: { en: "Grain", de: "Körner" } },
              { text: { en: "Grass", de: "Gras" } }
            ],
            explanation: { en: "The worksheet says the species living in our region are insect eaters.", de: "Laut Arbeitsblatt sind die bei uns lebenden Arten Insektenfresser." }
          },
          {
            question: { en: "What can vegetarian tropical bats eat?", de: "Was können vegetarische Fledermäuse in den Tropen fressen?" },
            options: [
              { text: { en: "Fruit and nectar", de: "Früchte und Nektar" }, correct: true },
              { text: { en: "Only stones", de: "Nur Steine" } },
              { text: { en: "Only leaves", de: "Nur Blätter" } }
            ],
            explanation: { en: "Some tropical species feed on fruit or nectar.", de: "Einige tropische Arten ernähren sich von Früchten oder Nektar." }
          },
          {
            question: { en: "How many bat species feed on the blood of other animals?", de: "Wie viele Fledermausarten leben vom Blut anderer Tiere?" },
            options: [
              { text: { en: "Only three species", de: "Nur drei Arten" }, correct: true },
              { text: { en: "All species", de: "Alle Arten" } },
              { text: { en: "About 900 species", de: "Etwa 900 Arten" } }
            ],
            explanation: { en: "Only three vampire-bat species feed on blood.", de: "Nur drei Vampirfledermausarten ernähren sich von Blut." }
          },
          {
            question: { en: "How many young does a mother bat usually have in one year?", de: "Wie viele Junge bekommt eine Fledermausmutter meistens im Jahr?" },
            options: [
              { text: { en: "One", de: "Eines" }, correct: true },
              { text: { en: "Ten", de: "Zehn" } },
              { text: { en: "Twenty", de: "Zwanzig" } }
            ],
            explanation: { en: "Bat reproduction is slow; a mother usually has only one baby per year.", de: "Fledermäuse vermehren sich langsam; ein Muttertier bekommt meistens nur ein Baby im Jahr." }
          },
          {
            question: { en: "How long can pregnancy last?", de: "Wie lange kann die Trächtigkeit dauern?" },
            options: [
              { text: { en: "About 40–70 days", de: "Etwa 40–70 Tage" }, correct: true },
              { text: { en: "Exactly two days", de: "Genau zwei Tage" } },
              { text: { en: "About three years", de: "Etwa drei Jahre" } }
            ],
            explanation: { en: "Depending on living conditions, the worksheet gives a range of about 40 to 70 days.", de: "Je nach Lebensumständen nennt das Arbeitsblatt ungefähr 40 bis 70 Tage." }
          }
        ]
      }
    ],
    parts: [
      {
        id: "fur-body",
        icon: "🧥",
        title: { en: "Furry body", de: "Behaarter Körper" },
        text: {
          en: "The bat is a nocturnal mammal. Depending on the species, it can be about 3 to 14 cm long and weigh roughly 2 to 200 g. Many species build fat reserves for hibernation.",
          de: "Die Fledermaus ist ein nachtaktives Säugetier. Je nach Art kann sie etwa 3 bis 14 cm groß und ungefähr 2 bis 200 g schwer sein. Viele Arten legen Fettvorräte für den Winterschlaf an."
        },
        points: [{ x: 50, y: 57 }]
      },
      {
        id: "legs-claws",
        icon: "🦶",
        title: { en: "Legs with claws", de: "Beine mit Krallen" },
        text: {
          en: "When resting, bats hang upside down. Their curved claws let them hold on securely while using very little strength.",
          de: "Beim Nächtigen hängt die Fledermaus kopfüber. Mit ihren gebogenen Krallen kann sie sich sicher festhalten und braucht dabei nur wenig Kraft."
        },
        points: [{ x: 38, y: 79 }, { x: 62, y: 79 }]
      },
      {
        id: "thumb-claw",
        icon: "☝️",
        title: { en: "Thumb claw", de: "Daumenkralle" },
        text: {
          en: "A small thumb with a claw sits at the front edge of each wing. It helps the bat grip and climb.",
          de: "Am vorderen Rand jedes Flügels sitzt ein kleiner Daumen mit einer Kralle. Die Daumenkralle hilft der Fledermaus beim Festhalten und Klettern."
        },
        points: [{ x: 20, y: 13 }, { x: 80, y: 13 }]
      },
      {
        id: "finger-bones",
        icon: "🦴",
        title: { en: "Finger bones", de: "Fingerknochen" },
        text: {
          en: "The long finger bones spread and support the wing. A flight membrane stretches between the fingers.",
          de: "Die langen Fingerknochen spannen und stützen den Flügel. Zwischen den Fingern befindet sich eine Flughaut."
        },
        points: [{ x: 28, y: 32 }, { x: 72, y: 32 }]
      },
      {
        id: "wing-membrane",
        icon: "🪽",
        title: { en: "Flight membrane", de: "Flughaut" },
        text: {
          en: "A bat's wings are made of a thin flight membrane rather than feathers. It stretches between the fingers, body and legs and makes controlled flight possible.",
          de: "Die Flügel der Fledermaus bestehen nicht aus Federn, sondern aus einer dünnen Flughaut. Sie spannt sich zwischen Fingern, Körper und Beinen und ermöglicht das Fliegen."
        },
        points: [{ x: 18, y: 48 }, { x: 82, y: 48 }]
      },
      {
        id: "wrist",
        icon: "✋",
        title: { en: "Wrist", de: "Handgelenk" },
        text: {
          en: "The wrist connects the forearm with the long fingers. Moving this joint helps shape and steer the wing during flight.",
          de: "Das Handgelenk verbindet den Unterarm mit den langen Fingern. Durch seine Bewegung kann die Fledermaus den Flügel beim Fliegen formen und steuern."
        },
        points: [{ x: 34, y: 36 }, { x: 66, y: 36 }]
      },
      {
        id: "ear-flap",
        icon: "🔉",
        title: { en: "Ear flap", de: "Ohrdeckel" },
        text: {
          en: "The small ear flap inside the ear helps sort incoming sounds. This is important when the bat listens for returning echoes.",
          de: "Der Ohrdeckel ist eine kleine Falte im Ohr. Er hilft dabei, eintreffende Geräusche zu ordnen – besonders beim Hören der zurückkehrenden Echos."
        },
        points: [{ x: 47, y: 25 }]
      },
      {
        id: "outer-ear",
        icon: "👂",
        title: { en: "Outer ear", de: "Ohrmuschel" },
        text: {
          en: "Hearing is the bat's most important sense. The large outer ears collect quiet sounds and the echoes of its ultrasonic calls.",
          de: "Der Hörsinn ist der wichtigste Sinn der Fledermaus. Die großen Ohrmuscheln fangen leise Geräusche und die Echos ihrer Ultraschalllaute auf."
        },
        points: [{ x: 43, y: 18 }, { x: 57, y: 18 }]
      },
      {
        id: "snout-teeth",
        icon: "🦷",
        title: { en: "Snout with teeth", de: "Schnauze mit Zähnen" },
        text: {
          en: "Many bats hunt insects. They emit ultrasonic calls and use the returning echo to form a picture of obstacles and prey; people can barely hear these calls or not hear them at all.",
          de: "Viele Fledermäuse jagen Insekten. Sie senden Ultraschalllaute aus und machen sich aus dem Echo ein Bild von Hindernissen und Beute. Menschen hören diese Laute nur als sehr leises „Chirpen“ oder gar nicht."
        },
        points: [{ x: 50, y: 38 }]
      },
      {
        id: "tail",
        icon: "➰",
        title: { en: "Tail", de: "Schwanz" },
        text: {
          en: "The tail lies inside the membrane between the legs. Together they help the bat steer, brake and sometimes catch insects in flight.",
          de: "Der Schwanz liegt in der Haut zwischen den Beinen. Zusammen helfen sie der Fledermaus beim Steuern und Bremsen und manchmal auch beim Fangen von Insekten."
        },
        points: [{ x: 50, y: 84 }]
      }
    ]
  }
];

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
    optional: "Optional",
    optionalSub: "Discover amazing animals",
    optionalGames: "Optional games",
    animalExplorers: "Animal explorers",
    animalExplorer: "Animal explorer",
    batSub: "Discover the parts of a bat",
    animalInstruction: "Tap a glowing point on the bat to learn what that body part does.",
    selectedBodyPart: "Selected body part",
    chooseBodyPart: "Choose a body part",
    chooseBodyPartText: "Tap one of the glowing points on the bat.",
    readAloud: "🔊 Read aloud",
    animalActivity: "Animal activity",
    exploreAnimal: "Explore",
    usefulInformation: "Useful information",
    batKnowledge: "Bat knowledge",
    factsIntro: "Explore the facts first, then test what you remember.",
    factCategories: "Fact categories",
    interestingFacts: "Interesting bat facts",
    factProgress: (current, total) => `Fact ${current} of ${total}`,
    replayAnimation: "↻ Replay animation",
    animatedFact: "Animated bat fact",
    animalTests: "Tests",
    knowledgeCheck: "Knowledge check",
    chooseTest: "Choose a bat test",
    testsIntro: "Each short test has five questions and gives immediate feedback.",
    testQuestions: (count) => `${count} questions`,
    allTests: "← All tests",
    questionProgress: (current, total) => `Question ${current} of ${total}`,
    testPoints: (points) => `${points} ${points === 1 ? "point" : "points"}`,
    correctAnswer: "Correct!",
    wrongAnswer: "Not quite.",
    nextQuestion: "Next question",
    seeResults: "See result",
    testComplete: "Test complete!",
    testResultScore: (score, total) => `${score} of ${total} correct`,
    testPerfect: "Excellent — you know bats very well!",
    testGood: "Great work — almost everything was correct!",
    testPractice: "Good start — explore the bat and try again!",
    tryAgain: "Try again",
    administration: "Administration",
    adminSub: "Edit learning content",
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
    normalMode: "Normal mode",
    focusMode: "Focus mode",
    focusTitle: "Choose focus words",
    focusSelected: (count) => `${count} ${count === 1 ? "word" : "words"} selected`,
    focusSelectAll: "Select all",
    focusClear: "Clear",
    focusLibrary: "Word library",
    focusSearchLabel: "Search the library",
    focusSearchPlaceholder: "Type a German word",
    focusNoResults: "No matching words.",
    focusSelectedTitle: "Selected words",
    focusSelectedEmpty: "No words selected yet.",
    focusRemove: (word) => `Remove ${word}`,
    focusNoWords: "Choose at least one focus word above.",
    focusStart: "Start focus game",
    focusEdit: "Edit focus words",
    carMode: "Car mode",
    carModeNote: "Car mode currently works only on laptop, not on mobile.",
    startListening: "Start listening",
    stopListening: "Stop",
    listening: "Listening...",
    heardAnswer: (answer) => `I heard: ${answer}`,
    carPrompt: "Tap start. I will say the word and listen for der, die, or das.",
    carUnsupported: "Speech recognition is not available in this browser.",
    carNeedsMic: "Please allow microphone access, then tap Start listening again.",
    carNoAnswer: "I did not hear the article and word. Try again.",
    carWrong: (article, word) => `The correct answer is ${article} ${word}.`,
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
    animalAdminTitle: "Animal explorer text",
    animalAdminCopy: "Edit the name and description shown when each body part is selected.",
    chooseAnimal: "Choose animal",
    germanName: "German name",
    germanDescription: "German description",
    englishName: "English name",
    englishDescription: "English description",
    saveAnimalText: "Save animal text",
    resetAnimalText: "Reset animal text",
    animalAdminReady: "Changes are saved on this device.",
    animalAdminSaved: "Saved. The animal game now uses this text.",
    animalAdminReset: "The original animal text has been restored.",
    mathPractice: "Math practice",
    mathApps: "Math apps",
    numberSprint: "Number Sprint",
    numberSprintSub: "Plus and minus to 100",
    multiplication: "Multiplication",
    multiplicationSub: "Practice multiplication tests",
    multiplicationSetup: "Multiplication setup",
    numberSize: "Number size",
    chooseMultiplicationSize: "Choose multiplication number size",
    oneByOne: "1 digit × 1 digit",
    oneByTwo: "1 digit × 2 digits",
    twoByTwo: "2 digits × 2 digits",
    startTest: "Start test",
    multiplicationProgress: "Multiplication progress",
    multiplicationTest: "Multiplication test",
    newTest: "↻ New test",
    testScore: (correct, total) => `${correct} of ${total} correct`,
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
    optional: "Optional",
    optionalSub: "Erstaunliche Tiere entdecken",
    optionalGames: "Optionale Spiele",
    animalExplorers: "Tier-Entdecker",
    animalExplorer: "Tier-Entdecker",
    batSub: "Körperteile einer Fledermaus entdecken",
    animalInstruction: "Tippe auf einen leuchtenden Punkt der Fledermaus und erfahre mehr über dieses Körperteil.",
    selectedBodyPart: "Ausgewähltes Körperteil",
    chooseBodyPart: "Wähle ein Körperteil",
    chooseBodyPartText: "Tippe auf einen leuchtenden Punkt der Fledermaus.",
    readAloud: "🔊 Vorlesen",
    animalActivity: "Tier-Aktivität",
    exploreAnimal: "Entdecken",
    usefulInformation: "Nützliche Informationen",
    batKnowledge: "Fledermauswissen",
    factsIntro: "Entdecke zuerst die spannenden Fakten und teste danach dein Wissen.",
    factCategories: "Themenbereiche",
    interestingFacts: "Spannende Fledermausfakten",
    factProgress: (current, total) => `Fakt ${current} von ${total}`,
    replayAnimation: "↻ Animation wiederholen",
    animatedFact: "Animierter Fledermausfakt",
    animalTests: "Tests",
    knowledgeCheck: "Wissenstest",
    chooseTest: "Wähle einen Fledermaus-Test",
    testsIntro: "Jeder kurze Test hat fünf Fragen und zeigt sofort eine Erklärung.",
    testQuestions: (count) => `${count} Fragen`,
    allTests: "← Alle Tests",
    questionProgress: (current, total) => `Frage ${current} von ${total}`,
    testPoints: (points) => `${points} ${points === 1 ? "Punkt" : "Punkte"}`,
    correctAnswer: "Richtig!",
    wrongAnswer: "Noch nicht ganz.",
    nextQuestion: "Nächste Frage",
    seeResults: "Ergebnis ansehen",
    testComplete: "Test geschafft!",
    testResultScore: (score, total) => `${score} von ${total} richtig`,
    testPerfect: "Ausgezeichnet – du kennst Fledermäuse sehr gut!",
    testGood: "Super gemacht – fast alles war richtig!",
    testPractice: "Guter Anfang – entdecke die Fledermaus und versuche es noch einmal!",
    tryAgain: "Noch einmal",
    administration: "Verwaltung",
    adminSub: "Lerninhalte bearbeiten",
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
    normalMode: "Normalmodus",
    focusMode: "Fokusmodus",
    focusTitle: "Fokuswörter auswählen",
    focusSelected: (count) => `${count} ${count === 1 ? "Wort" : "Wörter"} ausgewählt`,
    focusSelectAll: "Alle auswählen",
    focusClear: "Löschen",
    focusLibrary: "Wortbibliothek",
    focusSearchLabel: "Bibliothek durchsuchen",
    focusSearchPlaceholder: "Deutsches Wort eingeben",
    focusNoResults: "Keine passenden Wörter gefunden.",
    focusSelectedTitle: "Ausgewählte Wörter",
    focusSelectedEmpty: "Noch keine Wörter ausgewählt.",
    focusRemove: (word) => `${word} entfernen`,
    focusNoWords: "Wähle oben mindestens ein Fokuswort aus.",
    focusStart: "Fokusspiel starten",
    focusEdit: "Fokuswörter bearbeiten",
    carMode: "Automodus",
    carModeNote: "Der Automodus funktioniert im Moment nur auf dem Laptop, nicht auf dem Handy oder Tablet.",
    startListening: "Zuhören starten",
    stopListening: "Stopp",
    listening: "Ich höre zu...",
    heardAnswer: (answer) => `Ich habe gehört: ${answer}`,
    carPrompt: "Tippe auf Start. Ich sage das Wort und höre auf der, die oder das.",
    carUnsupported: "Spracherkennung ist in diesem Browser nicht verfügbar.",
    carNeedsMic: "Bitte erlaube den Zugriff auf das Mikrofon und tippe dann noch einmal auf Start.",
    carNoAnswer: "Ich habe Artikel und Wort nicht gehört. Versuch es noch einmal.",
    carWrong: (article, word) => `Richtig ist ${article} ${word}.`,
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
    animalAdminTitle: "Texte für Tier-Entdecker",
    animalAdminCopy: "Bearbeite Name und Beschreibung, die bei jedem Körperteil angezeigt werden.",
    chooseAnimal: "Tier auswählen",
    germanName: "Deutscher Name",
    germanDescription: "Deutsche Beschreibung",
    englishName: "Englischer Name",
    englishDescription: "Englische Beschreibung",
    saveAnimalText: "Tiertexte speichern",
    resetAnimalText: "Tiertexte zurücksetzen",
    animalAdminReady: "Änderungen werden auf diesem Gerät gespeichert.",
    animalAdminSaved: "Gespeichert. Das Tierspiel benutzt jetzt diese Texte.",
    animalAdminReset: "Die ursprünglichen Tiertexte wurden wiederhergestellt.",
    mathPractice: "Matheübung",
    mathApps: "Mathe-Apps",
    numberSprint: "Zahlensprint",
    numberSprintSub: "Plus und Minus bis 100",
    multiplication: "Multiplikation",
    multiplicationSub: "Multiplikationsaufgaben üben",
    multiplicationSetup: "Multiplikations-Einstellungen",
    numberSize: "Zahlengröße",
    chooseMultiplicationSize: "Zahlengröße für die Multiplikation auswählen",
    oneByOne: "1-stellig × 1-stellig",
    oneByTwo: "1-stellig × 2-stellig",
    twoByTwo: "2-stellig × 2-stellig",
    startTest: "Test starten",
    multiplicationProgress: "Multiplikations-Fortschritt",
    multiplicationTest: "Multiplikationstest",
    newTest: "↻ Neuer Test",
    testScore: (correct, total) => `${correct} von ${total} richtig`,
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
  versionBadge: document.querySelector("#version-badge"),
  homeScreen: document.querySelector("#home-screen"),
  germanScreen: document.querySelector("#german-screen"),
  mathScreen: document.querySelector("#math-screen"),
  optionalScreen: document.querySelector("#optional-screen"),
  adminScreen: document.querySelector("#admin-screen"),
  openGerman: document.querySelector("#open-german"),
  openMath: document.querySelector("#open-math"),
  openOptional: document.querySelector("#open-optional"),
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
  multiplicationApp: document.querySelector("#multiplication-app"),
  openNumberSprint: document.querySelector("#open-number-sprint"),
  openMultiplication: document.querySelector("#open-multiplication"),
  mathMenuButtons: document.querySelectorAll(".math-menu-button"),
  germanHome: document.querySelector("#german-home"),
  mathHome: document.querySelector("#math-home"),
  optionalHome: document.querySelector("#optional-home"),
  adminHome: document.querySelector("#admin-home"),
  optionalHub: document.querySelector("#optional-hub"),
  openBat: document.querySelector("#open-bat"),
  animalApp: document.querySelector("#animal-app"),
  animalKind: document.querySelector("#animal-kind"),
  animalName: document.querySelector("#animal-name"),
  animalIntro: document.querySelector("#animal-intro"),
  animalExploreMode: document.querySelector("#animal-explore-mode"),
  animalFactsMode: document.querySelector("#animal-facts-mode"),
  animalTestsMode: document.querySelector("#animal-tests-mode"),
  animalExploreView: document.querySelector("#animal-explore-view"),
  animalFactsView: document.querySelector("#animal-facts-view"),
  animalFactsTitle: document.querySelector("#animal-facts-title"),
  animalFactsIntro: document.querySelector("#animal-facts-intro"),
  animalFactCategories: document.querySelector("#animal-fact-categories"),
  animalFactList: document.querySelector("#animal-fact-list"),
  animalFactDetail: document.querySelector("#animal-fact-detail"),
  animalFactAnimation: document.querySelector("#animal-fact-animation"),
  animalFactBat: document.querySelector("#animal-fact-bat"),
  animalFactTarget: document.querySelector("#animal-fact-target"),
  animalSceneSymbol: document.querySelector("#animal-scene-symbol"),
  animalFactIcon: document.querySelector("#animal-fact-icon"),
  animalFactProgress: document.querySelector("#animal-fact-progress"),
  animalFactTitle: document.querySelector("#animal-fact-title"),
  animalFactText: document.querySelector("#animal-fact-text"),
  animalFactSpeak: document.querySelector("#animal-fact-speak"),
  animalFactReplay: document.querySelector("#animal-fact-replay"),
  animalTestsView: document.querySelector("#animal-tests-view"),
  animalTestsTitle: document.querySelector("#animal-tests-title"),
  animalTestsIntro: document.querySelector("#animal-tests-intro"),
  animalTestHub: document.querySelector("#animal-test-hub"),
  animalTestRunner: document.querySelector("#animal-test-runner"),
  animalTestResults: document.querySelector("#animal-test-results"),
  animalTestBack: document.querySelector("#animal-test-back"),
  animalTestProgressLabel: document.querySelector("#animal-test-progress-label"),
  animalTestScore: document.querySelector("#animal-test-score"),
  animalTestIcon: document.querySelector("#animal-test-icon"),
  animalTestName: document.querySelector("#animal-test-name"),
  animalTestQuestion: document.querySelector("#animal-test-question"),
  animalTestOptions: document.querySelector("#animal-test-options"),
  animalTestFeedback: document.querySelector("#animal-test-feedback"),
  animalTestNext: document.querySelector("#animal-test-next"),
  animalTestResultIcon: document.querySelector("#animal-test-result-icon"),
  animalTestResultTitle: document.querySelector("#animal-test-result-title"),
  animalTestResultScore: document.querySelector("#animal-test-result-score"),
  animalTestRetry: document.querySelector("#animal-test-retry"),
  animalTestsMenu: document.querySelector("#animal-tests-menu"),
  animalStage: document.querySelector("#animal-stage"),
  animalImage: document.querySelector("#animal-image"),
  animalHotspots: document.querySelector("#animal-hotspots"),
  animalInfoIcon: document.querySelector("#animal-info-icon"),
  animalInfoLabel: document.querySelector("#animal-info-label"),
  animalPartTitle: document.querySelector("#animal-part-title"),
  animalPartText: document.querySelector("#animal-part-text"),
  animalSpeak: document.querySelector("#animal-speak"),
  optionalMenu: document.querySelector("#optional-menu"),
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
  articleNormalMode: document.querySelector("#article-normal-mode"),
  articleFocusMode: document.querySelector("#article-focus-mode"),
  articleCarMode: document.querySelector("#article-car-mode"),
  articleFocusPanel: document.querySelector("#article-focus-panel"),
  articleFocusTitle: document.querySelector("#article-focus-title"),
  articleFocusSummary: document.querySelector("#article-focus-summary"),
  articleFocusLibrary: document.querySelector(".article-focus-library"),
  articleFocusSearchLabel: document.querySelector(".article-focus-search-label"),
  articleFocusSearch: document.querySelector("#article-focus-search"),
  articleFocusNoResults: document.querySelector("#article-focus-no-results"),
  articleFocusList: document.querySelector("#article-focus-list"),
  articleFocusSelectedPanel: document.querySelector(".article-focus-selected-panel"),
  articleFocusSelectedTitle: document.querySelector("#article-focus-selected-title"),
  articleFocusSelectedEmpty: document.querySelector("#article-focus-selected-empty"),
  articleFocusSelectedList: document.querySelector("#article-focus-selected-list"),
  articleFocusAll: document.querySelector("#article-focus-all"),
  articleFocusClear: document.querySelector("#article-focus-clear"),
  articleFocusStartNote: document.querySelector("#article-focus-start-note"),
  articleFocusStart: document.querySelector("#article-focus-start"),
  articleFocusEdit: document.querySelector("#article-focus-edit"),
  articleCard: document.querySelector("#article-card"),
  articleOptions: document.querySelector("#article-options"),
  articleCarPanel: document.querySelector("#article-car-panel"),
  articleListen: document.querySelector("#article-listen"),
  articleCarNote: document.querySelector("#article-car-note"),
  articleHeard: document.querySelector("#article-heard"),
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
  animalAdminTitle: document.querySelector("#animal-admin-title"),
  animalAdminCopy: document.querySelector("#animal-admin-copy"),
  animalAdminSelect: document.querySelector("#animal-admin-select"),
  animalAdminParts: document.querySelector("#animal-admin-parts"),
  saveAnimalText: document.querySelector("#save-animal-text"),
  resetAnimalText: document.querySelector("#reset-animal-text"),
  animalAdminNote: document.querySelector("#animal-admin-note"),
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
  multiplicationOptions: document.querySelector("#multiplication-options"),
  startMultiplication: document.querySelector("#start-multiplication"),
  multiplicationProgress: document.querySelector(".multiplication-progress"),
  multiplicationWorksheet: document.querySelector("#multiplication-worksheet"),
  multiplicationCorrect: document.querySelector("#multiplication-correct"),
  multiplicationLeft: document.querySelector("#multiplication-left"),
  newMultiplication: document.querySelector("#new-multiplication"),
  finishMultiplication: document.querySelector("#finish-multiplication"),
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
let articleMode = "normal";
let articleFocusKeys = loadArticleFocusKeys();
let articleFocusQuery = "";
let articleFocusPlaying = false;
let articleRecognition = null;
let articleIsListening = false;
let articleCarSessionActive = false;
let articleRecognitionHadResult = false;
let articleRecognitionStartedAt = 0;
let articleRecognitionSilenceTimer = 0;
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
let multiplicationMode = "1x1";
let multiplicationProblems = [];
let multiplicationStarted = false;
let multiplicationEnded = false;
let contestPlayerCount = 2;
let contestSeconds = 30;
let contestProblems = [];
let contestScores = [];
let contestIndex = 0;
let contestTimer = null;
let contestDeadline = 0;
let contestAnswered = false;
let currentLanguage = translations[localStorage.getItem("practiceLanguage")] ? localStorage.getItem("practiceLanguage") : "en";
let animals = loadAnimalContent();
let currentAnimalId = animals[0]?.id || "bat";
let currentAnimalPartId = null;
let animalActivityMode = "explore";
let currentAnimalFactCategoryId = animals[0]?.tests?.[0]?.id || "body-wings";
let currentAnimalFactId = null;
let currentAnimalTestId = null;
let animalTestQuestionIndex = 0;
let animalTestScoreValue = 0;
let animalTestAnswered = false;
let animalTestSelectedOptionIndex = -1;

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
  setText("#open-optional strong", "optional");
  setText("#open-optional small", "optionalSub");
  setText("#open-admin strong", "administration");
  setText("#open-admin small", "adminSub");

  [elements.germanHome, elements.mathHome, elements.optionalHome, elements.adminHome].forEach((button) => {
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
  elements.articleNormalMode.textContent = t("normalMode");
  elements.articleFocusMode.textContent = t("focusMode");
  elements.articleCarMode.textContent = t("carMode");
  elements.articleFocusPanel.setAttribute("aria-label", t("focusTitle"));
  elements.articleFocusTitle.textContent = t("focusTitle");
  elements.articleFocusAll.textContent = t("focusSelectAll");
  elements.articleFocusClear.textContent = t("focusClear");
  elements.articleFocusLibrary.setAttribute("aria-label", t("focusLibrary"));
  elements.articleFocusSearchLabel.textContent = t("focusSearchLabel");
  elements.articleFocusSearch.placeholder = t("focusSearchPlaceholder");
  elements.articleFocusNoResults.textContent = t("focusNoResults");
  elements.articleFocusSelectedPanel.setAttribute("aria-label", t("focusSelectedTitle"));
  elements.articleFocusSelectedTitle.textContent = t("focusSelectedTitle");
  elements.articleFocusSelectedEmpty.textContent = t("focusSelectedEmpty");
  elements.articleFocusStartNote.textContent = t("focusNoWords");
  elements.articleFocusStart.textContent = t("focusStart");
  elements.articleFocusEdit.textContent = t("focusEdit");
  renderArticleFocusWords();
  elements.articleListen.textContent = articleCarSessionActive
    ? (articleIsListening ? t("listening") : t("stopListening"))
    : t("startListening");
  elements.articleCarNote.textContent = t("carModeNote");
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

  setText("#optional-screen .eyebrow", "optional");
  if (elements.animalApp.classList.contains("hidden")) {
    setText("#optional-title", "animalExplorers");
  } else {
    document.querySelector("#optional-title").textContent = localizedAnimalText(getCurrentAnimal()?.name);
  }
  elements.optionalHub.setAttribute("aria-label", t("optionalGames"));
  const batAnimal = animals.find((animal) => animal.id === "bat") || animals[0];
  document.querySelector("#open-bat strong").textContent = localizedAnimalText(batAnimal?.name);
  setText("#open-bat small", "batSub");
  elements.animalKind.textContent = t("animalExplorer");
  elements.animalInfoLabel.textContent = t("selectedBodyPart");
  elements.animalSpeak.textContent = t("readAloud");
  document.querySelector(".animal-mode-switch").setAttribute("aria-label", t("animalActivity"));
  elements.animalExploreMode.textContent = t("exploreAnimal");
  elements.animalFactsMode.textContent = t("usefulInformation");
  elements.animalTestsMode.textContent = t("animalTests");
  setText(".animal-facts-heading .eyebrow", "batKnowledge");
  elements.animalFactsTitle.textContent = t("usefulInformation");
  elements.animalFactsIntro.textContent = t("factsIntro");
  elements.animalFactCategories.setAttribute("aria-label", t("factCategories"));
  elements.animalFactList.setAttribute("aria-label", t("interestingFacts"));
  elements.animalFactAnimation.setAttribute("aria-label", t("animatedFact"));
  elements.animalFactSpeak.textContent = t("readAloud");
  elements.animalFactReplay.textContent = t("replayAnimation");
  setText(".animal-tests-heading .eyebrow", "knowledgeCheck");
  elements.animalTestsTitle.textContent = t("chooseTest");
  elements.animalTestsIntro.textContent = t("testsIntro");
  elements.animalTestBack.textContent = t("allTests");
  elements.animalTestRetry.textContent = t("tryAgain");
  elements.animalTestsMenu.textContent = t("allTests").replace(/^←\s*/, "");
  elements.optionalMenu.textContent = t("optionalGames");
  renderAnimalExplorer();
  renderAnimalFacts();
  renderAnimalTestHub();
  setAnimalActivityMode(animalActivityMode);

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
  elements.animalAdminTitle.textContent = t("animalAdminTitle");
  elements.animalAdminCopy.textContent = t("animalAdminCopy");
  elements.animalAdminSelect.setAttribute("aria-label", t("chooseAnimal"));
  elements.saveAnimalText.textContent = t("saveAnimalText");
  elements.resetAnimalText.textContent = t("resetAnimalText");
  setAdminNote(elements.adminNote.dataset.state || "ready");
  setAnimalAdminNote(elements.animalAdminNote.dataset.state || "ready");
  renderAnimalAdmin();

  setText("#math-screen .eyebrow", "mathPractice");
  setText("#math-title", "mathApps");
  setText("#open-number-sprint strong", "numberSprint");
  setText("#open-number-sprint small", "numberSprintSub");
  setText("#open-multiplication strong", "multiplication");
  setText("#open-multiplication small", "multiplicationSub");
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
  document.querySelector(".multiplication-setup").setAttribute("aria-label", t("multiplicationSetup"));
  setText(".multiplication-setup .score-label", "numberSize");
  elements.multiplicationOptions.setAttribute("aria-label", t("chooseMultiplicationSize"));
  elements.multiplicationOptions.querySelector('[data-multiplication-mode="1x1"]').textContent = t("oneByOne");
  elements.multiplicationOptions.querySelector('[data-multiplication-mode="1x2"]').textContent = t("oneByTwo");
  elements.multiplicationOptions.querySelector('[data-multiplication-mode="2x2"]').textContent = t("twoByTwo");
  elements.startMultiplication.textContent = t("startTest");
  elements.multiplicationProgress.setAttribute("aria-label", t("multiplicationProgress"));
  setText(".multiplication-progress div:nth-child(1) .score-label", "correct");
  setText(".multiplication-progress div:nth-child(2) .score-label", "left");
  elements.multiplicationWorksheet.setAttribute("aria-label", t("multiplicationTest"));
  elements.newMultiplication.textContent = t("newTest");
  elements.finishMultiplication.textContent = t("finish");
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
  } else if (!elements.multiplicationApp.classList.contains("hidden")) {
    document.querySelector("#math-title").textContent = t("multiplication");
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
  if (screenName !== "german") {
    stopArticleCarSession();
  }
  elements.homeScreen.classList.toggle("hidden", screenName !== "home");
  elements.germanScreen.classList.toggle("hidden", screenName !== "german");
  elements.mathScreen.classList.toggle("hidden", screenName !== "math");
  elements.optionalScreen.classList.toggle("hidden", screenName !== "optional");
  elements.adminScreen.classList.toggle("hidden", screenName !== "admin");

  if (screenName === "german") {
    showGermanMenu();
  }

  if (screenName === "math") {
    showMathMenu();
  }

  if (screenName === "optional") {
    showOptionalMenu();
  }

  if (screenName === "admin") {
    openAdmin();
  }
}

function showGermanMenu() {
  stopArticleCarSession();
  elements.germanHub.classList.remove("hidden");
  elements.rebusApp.classList.add("hidden");
  elements.articleApp.classList.add("hidden");
  elements.handwritingApp.classList.add("hidden");
  elements.input.blur();
  document.querySelector("#app-title").textContent = t("germanApps");
}

function showGermanApp(appName) {
  if (appName !== "articles") {
    stopArticleCarSession();
  }
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
  resetMultiplicationTest();
  stopContestTimer();
  elements.mathHub.classList.remove("hidden");
  elements.numberSprintApp.classList.add("hidden");
  elements.multiplicationApp.classList.add("hidden");
  elements.timerDisplay.classList.add("hidden");
  document.querySelector("#math-title").textContent = t("mathApps");
}

function showMathApp(appName) {
  elements.mathHub.classList.add("hidden");
  elements.numberSprintApp.classList.toggle("hidden", appName !== "number-sprint");
  elements.multiplicationApp.classList.toggle("hidden", appName !== "multiplication");
  elements.timerDisplay.classList.toggle("hidden", appName !== "number-sprint");
  document.querySelector("#math-title").textContent = appName === "number-sprint"
    ? t("numberSprint")
    : t("multiplication");

  if (appName === "number-sprint") {
    ensureMathWorksheet();
  } else if (appName === "multiplication") {
    ensureMultiplicationTest();
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

function updateVersionBadge(status = "") {
  if (!elements.versionBadge) {
    return;
  }

  elements.versionBadge.textContent = status ? `Version ${appVersion} · ${status}` : `Version ${appVersion}`;
}

function compareVersions(left, right) {
  const leftParts = String(left).split(".").map((part) => Number(part) || 0);
  const rightParts = String(right).split(".").map((part) => Number(part) || 0);
  const length = Math.max(leftParts.length, rightParts.length);
  for (let index = 0; index < length; index += 1) {
    const difference = (leftParts[index] || 0) - (rightParts[index] || 0);
    if (difference !== 0) {
      return difference;
    }
  }
  return 0;
}

async function checkForLatestVersion() {
  updateVersionBadge();
  try {
    const response = await fetch(`${appVersionFile}?updated=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) {
      return;
    }

    const latest = await response.json();
    const latestVersion = String(latest.version || "").trim();
    if (!latestVersion || compareVersions(latestVersion, appVersion) <= 0) {
      localStorage.removeItem(appVersionReloadKey);
      updateVersionBadge("latest");
      return;
    }

    const reloadMarker = `${appVersion}->${latestVersion}`;
    if (localStorage.getItem(appVersionReloadKey) === reloadMarker) {
      updateVersionBadge(`new ${latestVersion}`);
      return;
    }

    localStorage.setItem(appVersionReloadKey, reloadMarker);
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("v", latestVersion);
    window.location.replace(nextUrl.toString());
  } catch {
    updateVersionBadge();
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

function articleFocusKey(item) {
  return `${cleanArticle(item.article)}|${normalize(item.word)}`;
}

function loadArticleFocusKeys() {
  try {
    const saved = JSON.parse(localStorage.getItem(articleFocusStorageKey) || "[]");
    return new Set(Array.isArray(saved) ? saved.filter((item) => typeof item === "string") : []);
  } catch {
    return new Set();
  }
}

function saveArticleFocusKeys() {
  localStorage.setItem(articleFocusStorageKey, JSON.stringify([...articleFocusKeys]));
}

function uniqueArticleWords(items) {
  return [...new Map(items.map((item) => [articleFocusKey(item), item])).values()];
}

function renderArticleFocusWords() {
  const available = uniqueArticleWords(articlePracticeWords.filter((item) => cleanArticle(item.article)));
  const availableKeys = new Set(available.map(articleFocusKey));
  articleFocusKeys = new Set([...articleFocusKeys].filter((key) => availableKeys.has(key)));
  elements.articleFocusList.replaceChildren();
  elements.articleFocusSelectedList.replaceChildren();

  const query = normalize(articleFocusQuery);
  const matches = available.filter((item) => (
    !query || normalize(`${item.article} ${item.word}`).includes(query)
  ));

  matches.forEach((item) => {
    const key = articleFocusKey(item);
    const label = document.createElement("label");
    label.className = "article-focus-word";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = articleFocusKeys.has(key);
    checkbox.dataset.focusKey = key;

    const emoji = document.createElement("span");
    emoji.className = "article-focus-emoji";
    emoji.textContent = item.emoji || "📘";

    const word = document.createElement("span");
    word.textContent = `${item.article} ${item.word}`;
    label.append(checkbox, emoji, word);
    elements.articleFocusList.append(label);
  });

  available.filter((item) => articleFocusKeys.has(articleFocusKey(item))).forEach((item) => {
    const key = articleFocusKey(item);
    const row = document.createElement("div");
    row.className = "article-focus-selected-word";

    const emoji = document.createElement("span");
    emoji.className = "article-focus-emoji";
    emoji.textContent = item.emoji || "📘";

    const word = document.createElement("span");
    word.textContent = `${item.article} ${item.word}`;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.dataset.removeFocusKey = key;
    remove.setAttribute("aria-label", t("focusRemove", `${item.article} ${item.word}`));
    remove.textContent = "×";
    row.append(emoji, word, remove);
    elements.articleFocusSelectedList.append(row);
  });

  elements.articleFocusSummary.textContent = t("focusSelected", articleFocusKeys.size);
  elements.articleFocusNoResults.classList.toggle("hidden", matches.length > 0);
  elements.articleFocusSelectedEmpty.classList.toggle("hidden", articleFocusKeys.size > 0);
}

function setAllArticleFocusWords(selected) {
  articleFocusKeys = selected
    ? new Set(uniqueArticleWords(articlePracticeWords.filter((item) => cleanArticle(item.article))).map(articleFocusKey))
    : new Set();
  saveArticleFocusKeys();
  renderArticleFocusWords();
  if (articleMode === "focus" && articleFocusPlaying) {
    pickArticleWord();
  }
}

function articleWords() {
  const available = articlePracticeWords.filter((item) => cleanArticle(item.article));
  return articleMode === "focus"
    ? uniqueArticleWords(available.filter((item) => articleFocusKeys.has(articleFocusKey(item))))
    : available;
}

function renderArticleScore() {
  elements.articleCorrect.textContent = articleCorrect;
  elements.articleStreak.textContent = articleStreak;
  elements.articleRound.textContent = articleRound;
}

function getSpeechRecognitionConstructor() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function primeArticleRecognition() {
  const Recognition = getSpeechRecognitionConstructor();
  if (!Recognition) {
    return;
  }

  try {
    const warmup = new Recognition();
    warmup.lang = "de-DE";
    warmup.continuous = false;
    warmup.interimResults = false;
    warmup.onresult = () => {};
    warmup.onerror = () => {};
    warmup.onend = () => {};
    warmup.start();
    window.setTimeout(() => {
      try {
        warmup.abort();
      } catch {
        // Warm-up recognition may already be stopped by the browser.
      }
    }, 220);
  } catch {
    // Some mobile browsers expose the API but still refuse warm-up starts.
  }
}

async function requestArticleMicrophone() {
  if (!navigator.mediaDevices?.getUserMedia) {
    return true;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach((track) => track.stop());
    return true;
  } catch {
    return false;
  }
}

function updateArticleListenButton() {
  elements.articleListen.classList.toggle("listening", articleCarSessionActive);
  elements.articleListen.textContent = articleCarSessionActive
    ? (articleIsListening ? t("listening") : t("stopListening"))
    : t("startListening");
}

function stopArticleRecognition() {
  window.clearTimeout(articleRecognitionSilenceTimer);
  articleRecognitionSilenceTimer = 0;
  if (articleRecognition) {
    articleRecognition.onresult = null;
    articleRecognition.onerror = null;
    articleRecognition.onend = null;
    try {
      articleRecognition.stop();
    } catch {
      // Recognition may already be stopped by the browser.
    }
    articleRecognition = null;
  }
  articleIsListening = false;
  updateArticleListenButton();
}

function startArticleSilenceTimer() {
  window.clearTimeout(articleRecognitionSilenceTimer);
  articleRecognitionSilenceTimer = window.setTimeout(() => {
    if (!articleIsListening || articleRecognitionHadResult) {
      return;
    }
    handleCarArticleAnswer({ article: "", complete: false }, "");
  }, 8500);
}

function stopArticleCarSession() {
  articleCarSessionActive = false;
  stopArticleRecognition();
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function setArticleMode(mode) {
  articleMode = ["normal", "focus", "car"].includes(mode) ? mode : "normal";
  stopArticleCarSession();
  elements.articleNormalMode.classList.toggle("selected", articleMode === "normal");
  elements.articleFocusMode.classList.toggle("selected", articleMode === "focus");
  elements.articleCarMode.classList.toggle("selected", articleMode === "car");
  elements.articleOptions.classList.toggle("hidden", articleMode === "car");
  elements.articleCarPanel.classList.toggle("hidden", articleMode !== "car");
  elements.articleHeard.textContent = "";
  if (articleMode === "focus") {
    showArticleFocusSetup();
    return;
  }
  articleFocusPlaying = false;
  elements.articleFocusPanel.classList.add("hidden");
  elements.articleCard.classList.remove("hidden");
  elements.articleFocusEdit.classList.add("hidden");
  elements.articleSkip.classList.remove("hidden");
  pickArticleWord();
}

function showArticleFocusSetup() {
  articleFocusPlaying = false;
  stopArticleCarSession();
  elements.articleFocusPanel.classList.remove("hidden");
  elements.articleCard.classList.add("hidden");
  elements.articleFocusEdit.classList.add("hidden");
  elements.articleSkip.classList.add("hidden");
  elements.articleFocusStartNote.classList.add("hidden");
  renderArticleFocusWords();
  window.requestAnimationFrame(() => elements.articleFocusSearch.focus());
}

function startArticleFocusGame() {
  if (!articleWords().length) {
    elements.articleFocusStartNote.classList.remove("hidden");
    elements.articleFocusSearch.focus();
    return;
  }
  articleFocusPlaying = true;
  elements.articleFocusStartNote.classList.add("hidden");
  elements.articleFocusPanel.classList.add("hidden");
  elements.articleCard.classList.remove("hidden");
  elements.articleFocusEdit.classList.remove("hidden");
  elements.articleSkip.classList.remove("hidden");
  pickArticleWord();
}

function normalizedArticleSpeech(value) {
  const normalized = normalize(value)
    .replace(/\bdeer\b/g, "der")
    .replace(/\bdear\b/g, "der")
    .replace(/\bdir\b/g, "der")
    .replace(/\bdee\b/g, "die")
    .replace(/\bthe\b/g, "die")
    .replace(/\bdass\b/g, "das")
    .replace(/\bdoes\b/g, "das");
  return normalized.replace(/[^\p{L}\s-]/gu, " ").replace(/\s+/g, " ").trim();
}

function articleAnswerFromSpeech(value, wordItem) {
  const normalized = normalizedArticleSpeech(value);
  const match = normalized.match(/\b(der|die|das)\b/);
  const spokenArticle = match ? match[1] : "";
  const spokenWord = normalizedArticleSpeech(wordItem?.word || "");
  const hasWord = Boolean(spokenWord && normalized.includes(spokenWord));
  return {
    article: spokenArticle,
    complete: Boolean(spokenArticle && hasWord)
  };
}

function advanceCarArticleRound() {
  nextArticleRound();
  if (articleMode === "car" && articleCarSessionActive && articleCurrentWord) {
    window.setTimeout(startCarArticleRound, 500);
  }
}

function restartCarArticleListening(delay = 550) {
  if (articleMode === "car" && articleCarSessionActive && articleCurrentWord) {
    window.setTimeout(beginCarArticleListening, delay);
  }
}

function handleCarMicrophoneBlocked() {
  stopArticleCarSession();
  elements.articleHint.dataset.state = "try";
  elements.articleHint.className = "hint try";
  elements.articleHint.textContent = t("carNeedsMic");
}

function handleCarArticleAnswer(answer, rawAnswer = "") {
  stopArticleRecognition();
  if (!articleCurrentWord) {
    return;
  }

  if (rawAnswer) {
    elements.articleHeard.textContent = t("heardAnswer", rawAnswer);
  }

  if (!answer.complete) {
    setArticleHint("try", articleCurrentWord);
    elements.articleHint.textContent = t("carNoAnswer");
    speak(t("carNoAnswer"), {
      onend: () => restartCarArticleListening()
    });
    return;
  }

  if (answer.article === articleCurrentWord.article) {
    articleCorrect += 1;
    articleStreak += 1;
    localStorage.setItem("articleGameCorrect", String(articleCorrect));
    elements.articleWord.classList.remove("article-der", "article-die", "article-das");
    elements.articleWord.classList.add(`article-${articleCurrentWord.article}`);
    setArticleHint("success", articleCurrentWord);
    renderArticleScore();
    showReward(
      "🏆",
      t("articleSuccess", articleCurrentWord.article, articleCurrentWord.word),
      950,
      null,
      `article-${articleCurrentWord.article}`
    );
    speak(t("articleSuccess", articleCurrentWord.article, articleCurrentWord.word), {
      onend: () => window.setTimeout(advanceCarArticleRound, 300)
    });
    return;
  }

  articleStreak = 0;
  elements.articleWord.classList.remove("article-der", "article-die", "article-das");
  elements.articleWord.classList.add(`article-${articleCurrentWord.article}`);
  elements.articleHint.dataset.state = "try";
  elements.articleHint.className = "hint try";
  elements.articleHint.textContent = t("carWrong", articleCurrentWord.article, articleCurrentWord.word);
  renderArticleScore();
  speak(t("carWrong", articleCurrentWord.article, articleCurrentWord.word), {
    onend: () => window.setTimeout(advanceCarArticleRound, 700)
  });
}

async function beginCarArticleListening() {
  if (articleMode !== "car" || !articleCurrentWord) {
    return;
  }

  const Recognition = getSpeechRecognitionConstructor();
  if (!Recognition) {
    setArticleHint("try", articleCurrentWord);
    elements.articleHint.textContent = t("carUnsupported");
    return;
  }

  const hasMicrophone = await requestArticleMicrophone();
  if (!hasMicrophone) {
    handleCarMicrophoneBlocked();
    return;
  }

  stopArticleRecognition();
  elements.articleHeard.textContent = "";
  articleRecognitionHadResult = false;
  articleRecognitionStartedAt = 0;
  articleRecognition = new Recognition();
  articleRecognition.lang = "de-DE";
  articleRecognition.continuous = false;
  articleRecognition.interimResults = false;
  articleRecognition.maxAlternatives = 4;
  articleRecognition.onresult = (event) => {
    window.clearTimeout(articleRecognitionSilenceTimer);
    articleRecognitionSilenceTimer = 0;
    articleRecognitionHadResult = true;
    const alternatives = Array.from(event.results?.[0] || []);
    const rawAnswer = alternatives.map((item) => item.transcript || "").find(Boolean) || "";
    const answer = alternatives
      .map((item) => articleAnswerFromSpeech(item.transcript || "", articleCurrentWord))
      .find((result) => result.complete)
      || articleAnswerFromSpeech(rawAnswer, articleCurrentWord);
    handleCarArticleAnswer(answer, rawAnswer.trim());
  };
  articleRecognition.onerror = (event) => {
    const heardFor = Date.now() - articleRecognitionStartedAt;
    if (event.error === "not-allowed" || event.error === "service-not-allowed" || event.error === "audio-capture") {
      handleCarMicrophoneBlocked();
      return;
    }
    if ((event.error === "no-speech" || event.error === "aborted") && articleCarSessionActive && heardFor < 1500) {
      stopArticleRecognition();
      restartCarArticleListening(450);
      return;
    }
    handleCarArticleAnswer({ article: "", complete: false }, "");
  };
  articleRecognition.onend = () => {
    if (articleIsListening) {
      if (!articleRecognitionHadResult) {
        const heardFor = Date.now() - articleRecognitionStartedAt;
        if (articleCarSessionActive && heardFor < 1500) {
          stopArticleRecognition();
          restartCarArticleListening(450);
          return;
        }
        handleCarArticleAnswer({ article: "", complete: false }, "");
        return;
      }
      articleIsListening = false;
      updateArticleListenButton();
    }
  };

  if (articleMode !== "car" || !articleCarSessionActive || !articleRecognition) {
    return;
  }
  try {
    articleIsListening = true;
    articleRecognitionStartedAt = Date.now();
    updateArticleListenButton();
    articleRecognition.start();
    startArticleSilenceTimer();
    setArticleHint("default");
  } catch {
    articleIsListening = false;
    updateArticleListenButton();
    handleCarArticleAnswer({ article: "", complete: false }, "");
  }
}

function startCarArticleRound() {
  if (articleMode !== "car" || !articleCurrentWord) {
    return;
  }

  primeArticleRecognition();
  articleCarSessionActive = true;
  updateArticleListenButton();
  speak(articleCurrentWord.word, {
    onend: () => beginCarArticleListening()
  });
}

function toggleCarArticleSession() {
  if (articleCarSessionActive) {
    stopArticleCarSession();
    setArticleHint("default");
    return;
  }
  startCarArticleRound();
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
    elements.articleHint.textContent = articleMode === "focus" ? t("focusNoWords") : t("articleNoWords");
    return;
  }
  elements.articleHint.textContent = articleMode === "car" ? t("carPrompt") : t("articlePrompt");
}

function pickArticleWord() {
  const candidates = articleWords();
  stopArticleRecognition();
  renderArticleScore();
  elements.articleOptions.querySelectorAll("button").forEach((button) => {
    button.disabled = !candidates.length;
    button.classList.remove("selected", "correct", "wrong");
  });
  elements.articleListen.disabled = !candidates.length;
  elements.articleHeard.textContent = "";

  if (!candidates.length) {
    stopArticleCarSession();
    articleCurrentWord = null;
    elements.articleEmoji.textContent = "📘";
    elements.articleWord.textContent = "DER/DIE/DAS";
    setArticleHint("empty");
    return;
  }

  let nextIndex = Math.floor(Math.random() * candidates.length);
  if (candidates.length > 1 && articleCurrentWord) {
    while (articleFocusKey(candidates[nextIndex]) === articleFocusKey(articleCurrentWord)) {
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

function speak(text, options = {}) {
  if (!("speechSynthesis" in window)) {
    options.onend?.();
    return;
  }

  if (!germanVoice) {
    refreshGermanVoice();
  }

  const requestedLanguage = options.lang || "de-DE";
  const requestedVoice = /^de([-_]|$)/i.test(requestedLanguage)
    ? germanVoice
    : window.speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith(requestedLanguage.slice(0, 2).toLowerCase()));
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = requestedVoice?.lang || requestedLanguage;
  if (requestedVoice) {
    utterance.voice = requestedVoice;
  }
  utterance.rate = 0.82;
  if (typeof options.onend === "function") {
    utterance.onend = options.onend;
    utterance.onerror = options.onend;
  }
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function cloneDefaultAnimals() {
  return JSON.parse(JSON.stringify(defaultAnimals));
}

function localizedAnimalText(value, language = currentLanguage) {
  return value?.[language] || value?.de || value?.en || "";
}

function loadAnimalContent() {
  let savedAnimals = [];
  try {
    const parsed = JSON.parse(localStorage.getItem(animalContentStorageKey) || "[]");
    savedAnimals = Array.isArray(parsed) ? parsed : [];
  } catch {
    savedAnimals = [];
  }

  return cloneDefaultAnimals().map((defaultAnimal) => {
    const savedAnimal = savedAnimals.find((item) => item?.id === defaultAnimal.id);
    if (!savedAnimal) {
      return defaultAnimal;
    }
    return {
      ...defaultAnimal,
      parts: defaultAnimal.parts.map((defaultPart) => {
        const savedPart = savedAnimal.parts?.find((item) => item?.id === defaultPart.id);
        if (!savedPart) {
          return defaultPart;
        }
        return {
          ...defaultPart,
          title: {
            en: String(savedPart.title?.en || defaultPart.title.en),
            de: String(savedPart.title?.de || defaultPart.title.de)
          },
          text: {
            en: String(savedPart.text?.en || defaultPart.text.en),
            de: String(savedPart.text?.de || defaultPart.text.de)
          }
        };
      })
    };
  });
}

function saveAnimalContent() {
  localStorage.setItem(animalContentStorageKey, JSON.stringify(animals));
}

function getCurrentAnimal() {
  return animals.find((animal) => animal.id === currentAnimalId) || animals[0] || null;
}

function getCurrentAnimalPart() {
  return getCurrentAnimal()?.parts.find((part) => part.id === currentAnimalPartId) || null;
}

function renderAnimalExplorer() {
  const animal = getCurrentAnimal();
  if (!animal) {
    return;
  }

  elements.animalName.textContent = localizedAnimalText(animal.name);
  elements.animalIntro.textContent = localizedAnimalText(animal.intro);
  elements.animalImage.src = animal.image;
  elements.animalImage.alt = localizedAnimalText(animal.alt);
  elements.animalStage.setAttribute("aria-label", localizedAnimalText(animal.name));
  elements.animalHotspots.replaceChildren();

  animal.parts.forEach((part) => {
    part.points.forEach((point, pointIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "animal-hotspot";
      button.dataset.animalPart = part.id;
      button.style.setProperty("--hotspot-x", `${point.x}%`);
      button.style.setProperty("--hotspot-y", `${point.y}%`);
      button.textContent = "+";
      button.setAttribute("aria-label", localizedAnimalText(part.title));
      button.setAttribute("title", localizedAnimalText(part.title));
      button.classList.toggle("selected", part.id === currentAnimalPartId);
      button.setAttribute("aria-pressed", String(part.id === currentAnimalPartId));
      if (pointIndex > 0) {
        button.classList.add("alternate");
      }
      elements.animalHotspots.append(button);
    });
  });

  const selectedPart = getCurrentAnimalPart();
  elements.animalInfoLabel.textContent = t("selectedBodyPart");
  if (!selectedPart) {
    elements.animalInfoIcon.textContent = "👆";
    elements.animalPartTitle.textContent = t("chooseBodyPart");
    elements.animalPartText.textContent = t("chooseBodyPartText");
    elements.animalSpeak.disabled = true;
    return;
  }

  elements.animalInfoIcon.textContent = selectedPart.icon;
  elements.animalPartTitle.textContent = localizedAnimalText(selectedPart.title);
  elements.animalPartText.textContent = localizedAnimalText(selectedPart.text);
  elements.animalSpeak.disabled = false;
}

function selectAnimalPart(partId) {
  const animal = getCurrentAnimal();
  if (!animal?.parts.some((part) => part.id === partId)) {
    return;
  }
  currentAnimalPartId = partId;
  renderAnimalExplorer();
  elements.animalPartTitle.focus({ preventScroll: true });
}

function getCurrentAnimalFact() {
  return getCurrentAnimal()?.facts?.find((fact) => fact.id === currentAnimalFactId) || null;
}

function replayAnimalFactAnimation() {
  elements.animalFactAnimation.classList.remove("is-replaying");
  void elements.animalFactAnimation.offsetWidth;
  elements.animalFactAnimation.classList.add("is-replaying");
}

function renderAnimalFacts() {
  const animal = getCurrentAnimal();
  const categories = animal?.tests || [];
  if (!animal || !categories.length) {
    return;
  }

  if (!categories.some((category) => category.id === currentAnimalFactCategoryId)) {
    currentAnimalFactCategoryId = categories[0].id;
  }

  elements.animalFactCategories.replaceChildren();
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.animalFactCategory = category.id;
    button.classList.toggle("selected", category.id === currentAnimalFactCategoryId);
    button.setAttribute("aria-pressed", String(category.id === currentAnimalFactCategoryId));
    button.textContent = `${category.icon} ${localizedAnimalText(category.title)}`;
    elements.animalFactCategories.append(button);
  });

  const categoryFacts = animal.facts?.filter((fact) => fact.category === currentAnimalFactCategoryId) || [];
  if (!categoryFacts.some((fact) => fact.id === currentAnimalFactId)) {
    currentAnimalFactId = categoryFacts[0]?.id || null;
  }

  elements.animalFactList.replaceChildren();
  categoryFacts.forEach((fact, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "animal-fact-choice";
    button.dataset.animalFact = fact.id;
    button.classList.toggle("selected", fact.id === currentAnimalFactId);
    button.setAttribute("aria-pressed", String(fact.id === currentAnimalFactId));

    const icon = document.createElement("span");
    icon.className = "animal-fact-choice-icon";
    icon.textContent = fact.icon;
    icon.setAttribute("aria-hidden", "true");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    title.textContent = localizedAnimalText(fact.title);
    const number = document.createElement("small");
    number.textContent = t("factProgress", index + 1, categoryFacts.length);
    copy.append(title, number);
    button.append(icon, copy);
    elements.animalFactList.append(button);
  });

  const fact = getCurrentAnimalFact();
  if (!fact) {
    return;
  }
  const factIndex = categoryFacts.findIndex((item) => item.id === fact.id);
  elements.animalFactAnimation.dataset.animation = fact.animation || "mammal";
  elements.animalFactBat.src = animal.image;
  elements.animalFactBat.alt = localizedAnimalText(animal.alt);
  elements.animalFactTarget.textContent = fact.animation === "echolocation" ? "🦟" : fact.sceneIcon;
  elements.animalSceneSymbol.textContent = fact.sceneIcon;
  elements.animalFactIcon.textContent = fact.icon;
  elements.animalFactProgress.textContent = t("factProgress", factIndex + 1, categoryFacts.length);
  elements.animalFactTitle.textContent = localizedAnimalText(fact.title);
  elements.animalFactText.textContent = localizedAnimalText(fact.text);
  replayAnimalFactAnimation();
}

function setAnimalFactCategory(categoryId) {
  if (!getCurrentAnimal()?.tests?.some((test) => test.id === categoryId)) {
    return;
  }
  currentAnimalFactCategoryId = categoryId;
  currentAnimalFactId = null;
  renderAnimalFacts();
}

function selectAnimalFact(factId) {
  if (!getCurrentAnimal()?.facts?.some((fact) => fact.id === factId)) {
    return;
  }
  currentAnimalFactId = factId;
  renderAnimalFacts();
  elements.animalFactTitle.focus({ preventScroll: true });
}

function showOptionalMenu() {
  currentAnimalPartId = null;
  currentAnimalFactId = null;
  currentAnimalTestId = null;
  animalActivityMode = "explore";
  elements.optionalHub.classList.remove("hidden");
  elements.animalApp.classList.add("hidden");
  document.querySelector("#optional-title").textContent = t("animalExplorers");
}

function showAnimalApp(animalId) {
  currentAnimalId = animals.some((animal) => animal.id === animalId) ? animalId : animals[0]?.id;
  currentAnimalPartId = null;
  currentAnimalFactCategoryId = getCurrentAnimal()?.tests?.[0]?.id || "body-wings";
  currentAnimalFactId = null;
  currentAnimalTestId = null;
  animalActivityMode = "explore";
  elements.optionalHub.classList.add("hidden");
  elements.animalApp.classList.remove("hidden");
  document.querySelector("#optional-title").textContent = localizedAnimalText(getCurrentAnimal()?.name);
  renderAnimalExplorer();
  setAnimalActivityMode("explore");
}

function getCurrentAnimalTest() {
  return getCurrentAnimal()?.tests?.find((test) => test.id === currentAnimalTestId) || null;
}

function setAnimalActivityMode(mode) {
  animalActivityMode = ["explore", "facts", "tests"].includes(mode) ? mode : "explore";
  elements.animalExploreMode.classList.toggle("selected", animalActivityMode === "explore");
  elements.animalFactsMode.classList.toggle("selected", animalActivityMode === "facts");
  elements.animalTestsMode.classList.toggle("selected", animalActivityMode === "tests");
  elements.animalExploreMode.setAttribute("aria-pressed", String(animalActivityMode === "explore"));
  elements.animalFactsMode.setAttribute("aria-pressed", String(animalActivityMode === "facts"));
  elements.animalTestsMode.setAttribute("aria-pressed", String(animalActivityMode === "tests"));
  elements.animalExploreView.classList.toggle("hidden", animalActivityMode !== "explore");
  elements.animalFactsView.classList.toggle("hidden", animalActivityMode !== "facts");
  elements.animalTestsView.classList.toggle("hidden", animalActivityMode !== "tests");
  if (animalActivityMode === "facts") {
    renderAnimalFacts();
  }
  if (animalActivityMode === "tests") {
    if (currentAnimalTestId) {
      const test = getCurrentAnimalTest();
      if (test && animalTestQuestionIndex >= test.questions.length) {
        renderAnimalTestResults();
      } else {
        renderAnimalTestQuestion();
      }
    } else {
      showAnimalTestMenu();
    }
  }
}

function renderAnimalTestHub() {
  const tests = getCurrentAnimal()?.tests || [];
  elements.animalTestHub.replaceChildren();
  tests.forEach((test, index) => {
    const card = document.createElement("article");
    card.className = "animal-test-choice";
    const number = document.createElement("span");
    number.className = "animal-test-number";
    number.textContent = `${index + 1}`;
    const icon = document.createElement("span");
    icon.className = "animal-test-choice-icon";
    icon.textContent = test.icon;
    icon.setAttribute("aria-hidden", "true");
    const title = document.createElement("h4");
    title.textContent = localizedAnimalText(test.title);
    const subtitle = document.createElement("p");
    subtitle.textContent = localizedAnimalText(test.subtitle);
    const count = document.createElement("span");
    count.className = "animal-test-count";
    count.textContent = t("testQuestions", test.questions.length);
    const start = document.createElement("button");
    start.type = "button";
    start.dataset.animalTest = test.id;
    start.textContent = t("startTest");
    card.append(number, icon, title, subtitle, count, start);
    elements.animalTestHub.append(card);
  });
}

function showAnimalTestMenu() {
  currentAnimalTestId = null;
  animalTestQuestionIndex = 0;
  animalTestScoreValue = 0;
  animalTestAnswered = false;
  animalTestSelectedOptionIndex = -1;
  renderAnimalTestHub();
  elements.animalTestHub.classList.remove("hidden");
  elements.animalTestRunner.classList.add("hidden");
  elements.animalTestResults.classList.add("hidden");
}

function startAnimalTest(testId) {
  const test = getCurrentAnimal()?.tests?.find((item) => item.id === testId);
  if (!test) {
    return;
  }
  currentAnimalTestId = test.id;
  animalTestQuestionIndex = 0;
  animalTestScoreValue = 0;
  animalTestAnswered = false;
  animalTestSelectedOptionIndex = -1;
  renderAnimalTestQuestion();
}

function renderAnimalTestQuestion() {
  const test = getCurrentAnimalTest();
  const question = test?.questions[animalTestQuestionIndex];
  if (!test || !question) {
    showAnimalTestMenu();
    return;
  }

  elements.animalTestHub.classList.add("hidden");
  elements.animalTestRunner.classList.remove("hidden");
  elements.animalTestResults.classList.add("hidden");
  elements.animalTestProgressLabel.textContent = t("questionProgress", animalTestQuestionIndex + 1, test.questions.length);
  elements.animalTestScore.textContent = t("testPoints", animalTestScoreValue);
  elements.animalTestIcon.textContent = test.icon;
  elements.animalTestName.textContent = localizedAnimalText(test.title);
  elements.animalTestQuestion.textContent = localizedAnimalText(question.question);
  elements.animalTestOptions.replaceChildren();

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.animalTestOption = `${optionIndex}`;
    button.textContent = localizedAnimalText(option.text);
    if (animalTestAnswered) {
      button.disabled = true;
      button.classList.toggle("correct", Boolean(option.correct));
      button.classList.toggle("wrong", optionIndex === animalTestSelectedOptionIndex && !option.correct);
    }
    elements.animalTestOptions.append(button);
  });

  if (animalTestAnswered) {
    const selectedOption = question.options[animalTestSelectedOptionIndex];
    const prefix = selectedOption?.correct ? t("correctAnswer") : t("wrongAnswer");
    elements.animalTestFeedback.className = `animal-test-feedback ${selectedOption?.correct ? "success" : "try"}`;
    elements.animalTestFeedback.textContent = `${prefix} ${localizedAnimalText(question.explanation)}`;
    elements.animalTestNext.textContent = animalTestQuestionIndex === test.questions.length - 1
      ? t("seeResults")
      : t("nextQuestion");
    elements.animalTestNext.classList.remove("hidden");
  } else {
    elements.animalTestFeedback.className = "animal-test-feedback";
    elements.animalTestFeedback.textContent = "";
    elements.animalTestNext.classList.add("hidden");
  }
}

function answerAnimalTest(optionIndex) {
  if (animalTestAnswered) {
    return;
  }
  const test = getCurrentAnimalTest();
  const question = test?.questions[animalTestQuestionIndex];
  const option = question?.options[optionIndex];
  if (!option) {
    return;
  }
  animalTestAnswered = true;
  animalTestSelectedOptionIndex = optionIndex;
  if (option.correct) {
    animalTestScoreValue += 1;
  }
  renderAnimalTestQuestion();
  elements.animalTestFeedback.focus({ preventScroll: true });
}

function advanceAnimalTest() {
  const test = getCurrentAnimalTest();
  if (!test || !animalTestAnswered) {
    return;
  }
  animalTestQuestionIndex += 1;
  animalTestAnswered = false;
  animalTestSelectedOptionIndex = -1;
  if (animalTestQuestionIndex >= test.questions.length) {
    renderAnimalTestResults();
    return;
  }
  renderAnimalTestQuestion();
  elements.animalTestQuestion.focus({ preventScroll: true });
}

function renderAnimalTestResults() {
  const test = getCurrentAnimalTest();
  if (!test) {
    showAnimalTestMenu();
    return;
  }
  const total = test.questions.length;
  const resultMessage = animalTestScoreValue === total
    ? t("testPerfect")
    : animalTestScoreValue >= Math.ceil(total * 0.6)
      ? t("testGood")
      : t("testPractice");
  elements.animalTestHub.classList.add("hidden");
  elements.animalTestRunner.classList.add("hidden");
  elements.animalTestResults.classList.remove("hidden");
  elements.animalTestResultIcon.textContent = animalTestScoreValue === total ? "🏆" : animalTestScoreValue >= 3 ? "🌟" : "🦇";
  elements.animalTestResultTitle.textContent = t("testComplete");
  elements.animalTestResultScore.textContent = `${t("testResultScore", animalTestScoreValue, total)}. ${resultMessage}`;
  elements.animalTestResultTitle.focus({ preventScroll: true });
}

function setAnimalAdminNote(state) {
  elements.animalAdminNote.dataset.state = state;
  const key = state === "saved"
    ? "animalAdminSaved"
    : state === "reset"
      ? "animalAdminReset"
      : "animalAdminReady";
  elements.animalAdminNote.textContent = t(key);
}

function makeAnimalAdminField(labelText, field, language, value, multiline = false) {
  const label = document.createElement("label");
  label.className = "animal-admin-field";
  const caption = document.createElement("span");
  caption.textContent = labelText;
  const input = document.createElement(multiline ? "textarea" : "input");
  if (!multiline) {
    input.type = "text";
  } else {
    input.rows = 3;
  }
  input.value = value;
  input.dataset.animalField = field;
  input.dataset.animalLanguage = language;
  label.append(caption, input);
  return label;
}

function renderAnimalAdmin() {
  const previousAnimalId = elements.animalAdminSelect.value || currentAnimalId || animals[0]?.id;
  elements.animalAdminSelect.replaceChildren();
  animals.forEach((animal) => {
    const option = document.createElement("option");
    option.value = animal.id;
    option.textContent = localizedAnimalText(animal.name);
    elements.animalAdminSelect.append(option);
  });
  elements.animalAdminSelect.value = animals.some((animal) => animal.id === previousAnimalId)
    ? previousAnimalId
    : animals[0]?.id;

  const animal = animals.find((item) => item.id === elements.animalAdminSelect.value);
  elements.animalAdminParts.replaceChildren();
  animal?.parts.forEach((part, index) => {
    const editor = document.createElement("details");
    editor.className = "animal-admin-part";
    editor.dataset.animalPartEditor = part.id;
    editor.open = index === 0;
    const summary = document.createElement("summary");
    summary.textContent = `${part.icon} ${localizedAnimalText(part.title)}`;
    const fields = document.createElement("div");
    fields.className = "animal-admin-fields";
    fields.append(
      makeAnimalAdminField(t("germanName"), "title", "de", part.title.de),
      makeAnimalAdminField(t("germanDescription"), "text", "de", part.text.de, true),
      makeAnimalAdminField(t("englishName"), "title", "en", part.title.en),
      makeAnimalAdminField(t("englishDescription"), "text", "en", part.text.en, true)
    );
    editor.append(summary, fields);
    elements.animalAdminParts.append(editor);
  });
}

function saveAnimalAdminText() {
  const animal = animals.find((item) => item.id === elements.animalAdminSelect.value);
  if (!animal) {
    return;
  }
  elements.animalAdminParts.querySelectorAll("[data-animal-part-editor]").forEach((editor) => {
    const part = animal.parts.find((item) => item.id === editor.dataset.animalPartEditor);
    if (!part) {
      return;
    }
    editor.querySelectorAll("[data-animal-field]").forEach((input) => {
      const field = input.dataset.animalField;
      const language = input.dataset.animalLanguage;
      const value = input.value.trim();
      if (value && part[field]?.[language] !== undefined) {
        part[field][language] = value;
      }
    });
  });
  saveAnimalContent();
  renderAnimalAdmin();
  renderAnimalExplorer();
  setAnimalAdminNote("saved");
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
  renderAnimalAdmin();
  setAdminNote("ready");
  setAnimalAdminNote("ready");
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

function multiplicationRange(digits) {
  return digits === 1 ? [1, 9] : [10, 99];
}

function createMultiplicationProblems() {
  const [leftDigits, rightDigits] = multiplicationMode.split("x").map(Number);
  const [leftMin, leftMax] = multiplicationRange(leftDigits);
  const [rightMin, rightMax] = multiplicationRange(rightDigits);
  const problems = [];
  const used = new Set();

  while (problems.length < 24) {
    const left = randomInt(leftMin, leftMax);
    const right = randomInt(rightMin, rightMax);
    const key = `${left}x${right}`;
    if (used.has(key)) {
      continue;
    }
    used.add(key);
    problems.push({ left, right, answer: left * right });
  }

  return problems;
}

function ensureMultiplicationTest() {
  if (!multiplicationProblems.length) {
    resetMultiplicationTest();
  }
}

function resetMultiplicationTest() {
  multiplicationProblems = createMultiplicationProblems();
  multiplicationStarted = false;
  multiplicationEnded = false;
  renderMultiplicationTest();
  updateMultiplicationProgress();
}

function renderMultiplicationTest() {
  elements.multiplicationWorksheet.replaceChildren();
  elements.multiplicationWorksheet.classList.toggle("answers-revealed", multiplicationEnded);

  multiplicationProblems.forEach((problem, index) => {
    const row = document.createElement("label");
    row.className = "problem";

    const equation = document.createElement("span");
    equation.textContent = `${problem.left} × ${problem.right} =`;

    const input = document.createElement("input");
    input.type = "tel";
    input.inputMode = "numeric";
    input.pattern = "[0-9]*";
    input.autocomplete = "off";
    input.disabled = !multiplicationStarted || multiplicationEnded;
    input.setAttribute("aria-label", `${problem.left} × ${problem.right}`);
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(0, 4);
      markMultiplicationProblem(row, problem, input.value);
      updateMultiplicationProgress();
      if (Number(input.value) === problem.answer) {
        focusNextMultiplicationInput(index);
      }
    });

    const result = document.createElement("span");
    result.className = "answer-result";
    result.setAttribute("aria-live", "polite");
    row.append(equation, input, result);
    elements.multiplicationWorksheet.append(row);
  });
}

function getMultiplicationInputs() {
  return [...elements.multiplicationWorksheet.querySelectorAll("input")];
}

function markMultiplicationProblem(row, problem, value, revealAnswer = false) {
  const result = row.querySelector(".answer-result");
  row.classList.remove("correct", "wrong");
  result.textContent = "";
  if (!value) {
    if (revealAnswer) {
      result.textContent = `= ${problem.answer}`;
    }
    return;
  }

  const isCorrect = Number(value) === problem.answer;
  row.classList.add(isCorrect ? "correct" : "wrong");
  if (revealAnswer) {
    result.textContent = isCorrect ? "✓" : `= ${problem.answer}`;
  }
}

function focusNextMultiplicationInput(currentIndex) {
  const next = getMultiplicationInputs().find((input, index) => index > currentIndex && !input.value && !input.disabled);
  if (next) {
    next.focus();
  }
}

function countCorrectMultiplication() {
  return getMultiplicationInputs().filter((input, index) => (
    input.value !== "" && Number(input.value) === multiplicationProblems[index].answer
  )).length;
}

function updateMultiplicationProgress() {
  const correct = countCorrectMultiplication();
  elements.multiplicationCorrect.textContent = String(correct);
  elements.multiplicationLeft.textContent = String(Math.max(multiplicationProblems.length - correct, 0));
}

function selectMultiplicationMode(mode) {
  multiplicationMode = mode;
  [...elements.multiplicationOptions.querySelectorAll("button")].forEach((button) => {
    button.classList.toggle("selected", button.dataset.multiplicationMode === mode);
  });
  resetMultiplicationTest();
}

function startMultiplicationTest() {
  if (multiplicationEnded || !multiplicationProblems.length) {
    resetMultiplicationTest();
  }
  multiplicationStarted = true;
  multiplicationEnded = false;
  renderMultiplicationTest();
  getMultiplicationInputs()[0]?.focus();
}

function finishMultiplicationTest() {
  if (!multiplicationStarted || multiplicationEnded) {
    return;
  }
  multiplicationEnded = true;
  getMultiplicationInputs().forEach((input) => {
    input.disabled = true;
  });
  elements.multiplicationWorksheet.classList.add("answers-revealed");
  [...elements.multiplicationWorksheet.querySelectorAll(".problem")].forEach((row, index) => {
    const input = row.querySelector("input");
    markMultiplicationProblem(row, multiplicationProblems[index], input.value, true);
  });
  const correct = countCorrectMultiplication();
  updateMultiplicationProgress();
  showReward(
    correct === multiplicationProblems.length ? "🎉" : "👍",
    correct === multiplicationProblems.length ? t("allDone") : t("testScore", correct, multiplicationProblems.length),
    2400
  );
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
elements.openMultiplication.addEventListener("click", () => showMathApp("multiplication"));
elements.mathMenuButtons.forEach((button) => {
  button.addEventListener("click", showMathMenu);
});
elements.openOptional.addEventListener("click", () => showScreen("optional"));
elements.openBat.addEventListener("click", () => showAnimalApp("bat"));
elements.optionalMenu.addEventListener("click", showOptionalMenu);
elements.animalHotspots.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-animal-part]");
  if (button) {
    selectAnimalPart(button.dataset.animalPart);
  }
});
elements.animalSpeak.addEventListener("click", () => {
  const part = getCurrentAnimalPart();
  if (!part) {
    return;
  }
  speak(`${localizedAnimalText(part.title)}. ${localizedAnimalText(part.text)}`, {
    lang: currentLanguage === "de" ? "de-DE" : "en-US"
  });
});
elements.animalExploreMode.addEventListener("click", () => setAnimalActivityMode("explore"));
elements.animalFactsMode.addEventListener("click", () => setAnimalActivityMode("facts"));
elements.animalTestsMode.addEventListener("click", () => setAnimalActivityMode("tests"));
elements.animalFactCategories.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-animal-fact-category]");
  if (button) {
    setAnimalFactCategory(button.dataset.animalFactCategory);
  }
});
elements.animalFactList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-animal-fact]");
  if (button) {
    selectAnimalFact(button.dataset.animalFact);
  }
});
elements.animalFactSpeak.addEventListener("click", () => {
  const fact = getCurrentAnimalFact();
  if (!fact) {
    return;
  }
  speak(`${localizedAnimalText(fact.title)}. ${localizedAnimalText(fact.text)}`, {
    lang: currentLanguage === "de" ? "de-DE" : "en-US"
  });
});
elements.animalFactReplay.addEventListener("click", replayAnimalFactAnimation);
elements.animalTestHub.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-animal-test]");
  if (button) {
    startAnimalTest(button.dataset.animalTest);
  }
});
elements.animalTestOptions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-animal-test-option]");
  if (button) {
    answerAnimalTest(Number(button.dataset.animalTestOption));
  }
});
elements.animalTestNext.addEventListener("click", advanceAnimalTest);
elements.animalTestBack.addEventListener("click", showAnimalTestMenu);
elements.animalTestsMenu.addEventListener("click", showAnimalTestMenu);
elements.animalTestRetry.addEventListener("click", () => {
  if (currentAnimalTestId) {
    startAnimalTest(currentAnimalTestId);
  }
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
elements.optionalHome.addEventListener("click", () => showScreen("home"));
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
elements.articleNormalMode.addEventListener("click", () => setArticleMode("normal"));
elements.articleFocusMode.addEventListener("click", () => setArticleMode("focus"));
elements.articleCarMode.addEventListener("click", () => setArticleMode("car"));
elements.articleFocusSearch.addEventListener("input", () => {
  articleFocusQuery = elements.articleFocusSearch.value;
  renderArticleFocusWords();
});
elements.articleFocusList.addEventListener("change", (event) => {
  const checkbox = event.target.closest('input[type="checkbox"][data-focus-key]');
  if (!checkbox) {
    return;
  }
  if (checkbox.checked) {
    articleFocusKeys.add(checkbox.dataset.focusKey);
    articleFocusQuery = "";
    elements.articleFocusSearch.value = "";
  } else {
    articleFocusKeys.delete(checkbox.dataset.focusKey);
  }
  saveArticleFocusKeys();
  renderArticleFocusWords();
  elements.articleFocusSearch.focus();
  if (articleMode === "focus" && articleFocusPlaying) {
    pickArticleWord();
  }
});
elements.articleFocusSelectedList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-remove-focus-key]");
  if (!button) {
    return;
  }
  articleFocusKeys.delete(button.dataset.removeFocusKey);
  saveArticleFocusKeys();
  renderArticleFocusWords();
  elements.articleFocusSearch.focus();
  if (articleMode === "focus" && articleFocusPlaying) {
    pickArticleWord();
  }
});
elements.articleFocusAll.addEventListener("click", () => setAllArticleFocusWords(true));
elements.articleFocusClear.addEventListener("click", () => setAllArticleFocusWords(false));
elements.articleFocusStart.addEventListener("click", startArticleFocusGame);
elements.articleFocusEdit.addEventListener("click", showArticleFocusSetup);
elements.articleOptions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-article]");
  if (!button) {
    return;
  }
  if (articleMode === "car") {
    return;
  }
  chooseArticle(button.dataset.article);
});
elements.articleListen.addEventListener("click", toggleCarArticleSession);
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
  renderArticleFocusWords();
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
  renderArticleFocusWords();
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

elements.animalAdminSelect.addEventListener("change", renderAnimalAdmin);
elements.saveAnimalText.addEventListener("click", saveAnimalAdminText);
elements.resetAnimalText.addEventListener("click", () => {
  localStorage.removeItem(animalContentStorageKey);
  animals = cloneDefaultAnimals();
  currentAnimalId = animals[0]?.id || "bat";
  currentAnimalPartId = null;
  renderAnimalAdmin();
  renderAnimalExplorer();
  setAnimalAdminNote("reset");
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
elements.multiplicationOptions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-multiplication-mode]");
  if (button) {
    selectMultiplicationMode(button.dataset.multiplicationMode);
  }
});
elements.startMultiplication.addEventListener("click", startMultiplicationTest);
elements.newMultiplication.addEventListener("click", resetMultiplicationTest);
elements.finishMultiplication.addEventListener("click", finishMultiplicationTest);
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
void checkForLatestVersion();
pickWord();
void loadBundledWordFiles().then((loaded) => {
  if (!loaded) {
    return;
  }
  pickWord();
  renderArticleFocusWords();
  if (!elements.articleApp.classList.contains("hidden")) {
    pickArticleWord();
  }
});
