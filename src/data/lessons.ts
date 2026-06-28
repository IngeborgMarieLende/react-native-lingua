import type { Lesson } from "@/types/learning";

// ─────────────────────────────────────────────────────────────────────────────
// Spanish — Unit 1: Basic Greetings
// ─────────────────────────────────────────────────────────────────────────────

export const ES_UNIT1_LESSON1: Lesson = {
  id: "es-u1-l1",
  title: "Hello & Goodbye",
  type: "vocabulary",
  description: "Learn the most common Spanish greetings and farewells.",
  goal: {
    type: "learn-vocabulary",
    description: "Learn 5 greeting words",
    targetCount: 5,
  },
  vocabulary: [
    {
      id: "es-hola",
      word: "Hola",
      translation: "Hello",
      pronunciation: "OH-lah",
      exampleSentence: "Hola, ¿cómo estás?",
      exampleTranslation: "Hello, how are you?",
    },
    {
      id: "es-adios",
      word: "Adiós",
      translation: "Goodbye",
      pronunciation: "ah-DYOHS",
      exampleSentence: "Adiós, hasta mañana.",
      exampleTranslation: "Goodbye, see you tomorrow.",
    },
    {
      id: "es-buenos-dias",
      word: "Buenos días",
      translation: "Good morning",
      pronunciation: "BWEH-nos DEE-as",
      exampleSentence: "Buenos días, señor.",
      exampleTranslation: "Good morning, sir.",
    },
    {
      id: "es-buenas-noches",
      word: "Buenas noches",
      translation: "Good night",
      pronunciation: "BWEH-nas NOH-ches",
      exampleSentence: "Buenas noches, hasta mañana.",
      exampleTranslation: "Good night, see you tomorrow.",
    },
    {
      id: "es-gracias",
      word: "Gracias",
      translation: "Thank you",
      pronunciation: "GRAH-syahs",
      exampleSentence: "Muchas gracias por tu ayuda.",
      exampleTranslation: "Thank you very much for your help.",
    },
  ],
  phrases: [],
  activities: [
    {
      id: "es-u1-l1-a1",
      type: "multiple-choice",
      question: "What does 'Hola' mean?",
      options: ["Goodbye", "Hello", "Thank you", "Good night"],
      correctAnswer: "Hello",
    },
    {
      id: "es-u1-l1-a2",
      type: "multiple-choice",
      question: "How do you say 'Good morning' in Spanish?",
      options: ["Adiós", "Buenas noches", "Buenos días", "Gracias"],
      correctAnswer: "Buenos días",
    },
    {
      id: "es-u1-l1-a3",
      type: "translate",
      question: "Translate: 'Thank you'",
      correctAnswer: "Gracias",
      hint: "Think about what you say when someone helps you.",
    },
  ],
  aiTeacherPrompt: {
    systemPrompt:
      "You are a friendly Spanish teacher for beginners. Keep responses short, encouraging, and clear. Use simple English and introduce Spanish words naturally. This lesson is about basic greetings.",
    introMessage:
      "¡Hola! I'm your Spanish teacher. Today we're learning how to greet people in Spanish. Ready? Let's start!",
    lessonContext:
      "The student is learning basic Spanish greetings: Hola, Adiós, Buenos días, Buenas noches, Gracias.",
    targetLanguage: "Spanish",
    nativeLanguage: "English",
  },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const ES_UNIT1_LESSON2: Lesson = {
  id: "es-u1-l2",
  title: "Introductions",
  type: "phrases",
  description: "Introduce yourself and ask others their names.",
  goal: {
    type: "practice-phrases",
    description: "Practice 4 introduction phrases",
    targetCount: 4,
  },
  vocabulary: [
    {
      id: "es-nombre",
      word: "Nombre",
      translation: "Name",
      pronunciation: "NOHM-breh",
      exampleSentence: "¿Cuál es tu nombre?",
      exampleTranslation: "What is your name?",
    },
    {
      id: "es-soy",
      word: "Soy",
      translation: "I am",
      pronunciation: "SOY",
      exampleSentence: "Soy María.",
      exampleTranslation: "I am María.",
    },
  ],
  phrases: [
    {
      id: "es-como-te-llamas",
      text: "¿Cómo te llamas?",
      translation: "What is your name?",
      pronunciation: "KOH-moh teh YAH-mas",
      context: "Used when meeting someone new",
    },
    {
      id: "es-me-llamo",
      text: "Me llamo [nombre].",
      translation: "My name is [name].",
      pronunciation: "meh YAH-moh",
      context: "How you introduce your own name",
    },
    {
      id: "es-mucho-gusto",
      text: "Mucho gusto.",
      translation: "Nice to meet you.",
      pronunciation: "MOO-choh GOOS-toh",
      context: "Said when meeting someone for the first time",
    },
    {
      id: "es-de-donde-eres",
      text: "¿De dónde eres?",
      translation: "Where are you from?",
      pronunciation: "deh DOHN-deh EH-res",
      context: "Used to ask someone's origin",
    },
  ],
  activities: [
    {
      id: "es-u1-l2-a1",
      type: "multiple-choice",
      question: "How do you ask 'What is your name?' in Spanish?",
      options: [
        "¿Cómo estás?",
        "¿Cómo te llamas?",
        "¿De dónde eres?",
        "¿Qué tal?",
      ],
      correctAnswer: "¿Cómo te llamas?",
    },
    {
      id: "es-u1-l2-a2",
      type: "fill-in-blank",
      question: "Me ___ Carlos.",
      options: ["soy", "llamo", "eres", "tiene"],
      correctAnswer: "llamo",
    },
    {
      id: "es-u1-l2-a3",
      type: "translate",
      question: "Translate: 'Nice to meet you.'",
      correctAnswer: "Mucho gusto.",
    },
  ],
  aiTeacherPrompt: {
    systemPrompt:
      "You are a friendly Spanish teacher for beginners. Help the student practice introducing themselves in Spanish. Use simple, encouraging language.",
    introMessage:
      "¡Hola de nuevo! Today we'll learn how to introduce ourselves. This is super useful for real conversations!",
    lessonContext:
      "The student is learning Spanish introductions: ¿Cómo te llamas?, Me llamo..., Mucho gusto, ¿De dónde eres?",
    targetLanguage: "Spanish",
    nativeLanguage: "English",
  },
  xpReward: 10,
  estimatedMinutes: 6,
};

// ─────────────────────────────────────────────────────────────────────────────
// Spanish — Unit 2: Numbers & Colors
// ─────────────────────────────────────────────────────────────────────────────

export const ES_UNIT2_LESSON1: Lesson = {
  id: "es-u2-l1",
  title: "Numbers 1–10",
  type: "vocabulary",
  description: "Count from one to ten in Spanish.",
  goal: {
    type: "learn-vocabulary",
    description: "Learn numbers 1 through 10",
    targetCount: 10,
  },
  vocabulary: [
    {
      id: "es-uno",
      word: "Uno",
      translation: "One",
      pronunciation: "OO-noh",
      exampleSentence: "Tengo un perro.",
      exampleTranslation: "I have one dog.",
    },
    {
      id: "es-dos",
      word: "Dos",
      translation: "Two",
      pronunciation: "DOHS",
      exampleSentence: "Dos cafés, por favor.",
      exampleTranslation: "Two coffees, please.",
    },
    {
      id: "es-tres",
      word: "Tres",
      translation: "Three",
      pronunciation: "TREHS",
      exampleSentence: "Son las tres.",
      exampleTranslation: "It is three o'clock.",
    },
    {
      id: "es-cuatro",
      word: "Cuatro",
      translation: "Four",
      pronunciation: "KWAH-troh",
      exampleSentence: "Hay cuatro personas aquí.",
      exampleTranslation: "There are four people here.",
    },
    {
      id: "es-cinco",
      word: "Cinco",
      translation: "Five",
      pronunciation: "SEEN-koh",
      exampleSentence: "Cinco minutos más.",
      exampleTranslation: "Five more minutes.",
    },
  ],
  phrases: [],
  activities: [
    {
      id: "es-u2-l1-a1",
      type: "multiple-choice",
      question: "What does 'tres' mean?",
      options: ["One", "Two", "Three", "Four"],
      correctAnswer: "Three",
    },
    {
      id: "es-u2-l1-a2",
      type: "translate",
      question: "Translate: 'Five'",
      correctAnswer: "Cinco",
    },
    {
      id: "es-u2-l1-a3",
      type: "fill-in-blank",
      question: "___ cafés, por favor. (Two)",
      options: ["Uno", "Dos", "Tres", "Cuatro"],
      correctAnswer: "Dos",
    },
  ],
  aiTeacherPrompt: {
    systemPrompt:
      "You are a friendly Spanish teacher. Help the student learn numbers 1-10 in Spanish through fun examples.",
    introMessage:
      "¡Hola! Time to learn numbers in Spanish. We'll start with uno, dos, tres… ready to count?",
    lessonContext: "The student is learning Spanish numbers 1-5: uno, dos, tres, cuatro, cinco.",
    targetLanguage: "Spanish",
    nativeLanguage: "English",
  },
  xpReward: 10,
  estimatedMinutes: 5,
};

// ─────────────────────────────────────────────────────────────────────────────
// French — Unit 1: Basic Greetings
// ─────────────────────────────────────────────────────────────────────────────

export const FR_UNIT1_LESSON1: Lesson = {
  id: "fr-u1-l1",
  title: "Bonjour & Au revoir",
  type: "vocabulary",
  description: "Master the essential French greetings.",
  goal: {
    type: "learn-vocabulary",
    description: "Learn 5 greeting words",
    targetCount: 5,
  },
  vocabulary: [
    {
      id: "fr-bonjour",
      word: "Bonjour",
      translation: "Hello / Good day",
      pronunciation: "bohn-ZHOOR",
      exampleSentence: "Bonjour, comment ça va?",
      exampleTranslation: "Hello, how are you?",
    },
    {
      id: "fr-au-revoir",
      word: "Au revoir",
      translation: "Goodbye",
      pronunciation: "oh ruh-VWAR",
      exampleSentence: "Au revoir, à bientôt!",
      exampleTranslation: "Goodbye, see you soon!",
    },
    {
      id: "fr-merci",
      word: "Merci",
      translation: "Thank you",
      pronunciation: "mehr-SEE",
      exampleSentence: "Merci beaucoup!",
      exampleTranslation: "Thank you very much!",
    },
    {
      id: "fr-bonsoir",
      word: "Bonsoir",
      translation: "Good evening",
      pronunciation: "bohn-SWAR",
      exampleSentence: "Bonsoir, madame.",
      exampleTranslation: "Good evening, ma'am.",
    },
    {
      id: "fr-sil-vous-plait",
      word: "S'il vous plaît",
      translation: "Please",
      pronunciation: "seel voo PLEH",
      exampleSentence: "Un café, s'il vous plaît.",
      exampleTranslation: "A coffee, please.",
    },
  ],
  phrases: [],
  activities: [
    {
      id: "fr-u1-l1-a1",
      type: "multiple-choice",
      question: "What does 'Bonjour' mean?",
      options: ["Goodbye", "Thank you", "Hello", "Please"],
      correctAnswer: "Hello",
    },
    {
      id: "fr-u1-l1-a2",
      type: "translate",
      question: "Translate: 'Thank you'",
      correctAnswer: "Merci",
    },
    {
      id: "fr-u1-l1-a3",
      type: "multiple-choice",
      question: "How do you say 'Good evening' in French?",
      options: ["Bonjour", "Merci", "Au revoir", "Bonsoir"],
      correctAnswer: "Bonsoir",
    },
  ],
  aiTeacherPrompt: {
    systemPrompt:
      "You are a friendly French teacher for beginners. Keep explanations short and encouraging. This lesson is about basic French greetings.",
    introMessage:
      "Bonjour! I'm your French teacher. Today we learn how to greet people in French. C'est parti! (Let's go!)",
    lessonContext:
      "The student is learning French greetings: Bonjour, Au revoir, Merci, Bonsoir, S'il vous plaît.",
    targetLanguage: "French",
    nativeLanguage: "English",
  },
  xpReward: 10,
  estimatedMinutes: 5,
};

// ─────────────────────────────────────────────────────────────────────────────
// Spanish — Unit 1 (continued): Daily Life, Café, Travel, Shopping, Family
// ─────────────────────────────────────────────────────────────────────────────

export const ES_UNIT1_LESSON3: Lesson = {
  id: "es-u1-l3",
  title: "Daily Life",
  type: "vocabulary",
  description: "Learn essential words for everyday routines and places.",
  goal: { type: "learn-vocabulary", description: "Learn 5 daily life words", targetCount: 5 },
  vocabulary: [
    { id: "es-casa", word: "Casa", translation: "House", pronunciation: "KAH-sah", exampleSentence: "Mi casa es grande.", exampleTranslation: "My house is big." },
    { id: "es-trabajo", word: "Trabajo", translation: "Work", pronunciation: "trah-BAH-hoh", exampleSentence: "Voy al trabajo.", exampleTranslation: "I go to work." },
    { id: "es-escuela", word: "Escuela", translation: "School", pronunciation: "es-KWEH-lah", exampleSentence: "La escuela está cerca.", exampleTranslation: "The school is nearby." },
    { id: "es-comer", word: "Comer", translation: "To eat", pronunciation: "koh-MEHR", exampleSentence: "Me gusta comer pizza.", exampleTranslation: "I like to eat pizza." },
    { id: "es-dormir", word: "Dormir", translation: "To sleep", pronunciation: "dor-MEER", exampleSentence: "Necesito dormir.", exampleTranslation: "I need to sleep." },
  ],
  phrases: [],
  activities: [
    { id: "es-u1-l3-a1", type: "multiple-choice", question: "What does 'Casa' mean?", options: ["Work", "School", "House", "Street"], correctAnswer: "House" },
    { id: "es-u1-l3-a2", type: "translate", question: "Translate: 'To eat'", correctAnswer: "Comer" },
    { id: "es-u1-l3-a3", type: "multiple-choice", question: "How do you say 'School' in Spanish?", options: ["Casa", "Trabajo", "Escuela", "Calle"], correctAnswer: "Escuela" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly Spanish teacher helping with daily life vocabulary.", introMessage: "¡Hola! Today we learn words for everyday life.", lessonContext: "Daily life vocab: casa, trabajo, escuela, comer, dormir.", targetLanguage: "Spanish", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const ES_UNIT1_LESSON4: Lesson = {
  id: "es-u1-l4",
  title: "At the Café",
  type: "vocabulary",
  description: "Order drinks and food at a Spanish café.",
  goal: { type: "learn-vocabulary", description: "Learn 5 café words", targetCount: 5 },
  vocabulary: [
    { id: "es-cafe-word", word: "Café", translation: "Coffee", pronunciation: "kah-FEH", exampleSentence: "Quiero un café, por favor.", exampleTranslation: "I want a coffee, please." },
    { id: "es-mesa", word: "Mesa", translation: "Table", pronunciation: "MEH-sah", exampleSentence: "Una mesa para dos.", exampleTranslation: "A table for two." },
    { id: "es-menu", word: "Menú", translation: "Menu", pronunciation: "meh-NOO", exampleSentence: "¿Me da el menú?", exampleTranslation: "Can I have the menu?" },
    { id: "es-cuenta", word: "Cuenta", translation: "Bill / Check", pronunciation: "KWEHN-tah", exampleSentence: "La cuenta, por favor.", exampleTranslation: "The bill, please." },
    { id: "es-agua", word: "Agua", translation: "Water", pronunciation: "AH-gwah", exampleSentence: "Una botella de agua.", exampleTranslation: "A bottle of water." },
  ],
  phrases: [
    { id: "es-quiero-pedir", text: "Quisiera pedir...", translation: "I would like to order...", pronunciation: "kee-SYEH-rah peh-DEER", context: "Politely ordering at a restaurant" },
  ],
  activities: [
    { id: "es-u1-l4-a1", type: "multiple-choice", question: "How do you ask for the bill in Spanish?", options: ["El menú", "La cuenta", "El agua", "La mesa"], correctAnswer: "La cuenta" },
    { id: "es-u1-l4-a2", type: "translate", question: "Translate: 'Table'", correctAnswer: "Mesa" },
    { id: "es-u1-l4-a3", type: "fill-in-blank", question: "Un ___ por favor. (Coffee)", options: ["agua", "mesa", "café", "cuenta"], correctAnswer: "café" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly Spanish teacher teaching café vocabulary.", introMessage: "¡Hola! Let's learn how to order at a Spanish café!", lessonContext: "Café vocabulary: café, mesa, menú, cuenta, agua.", targetLanguage: "Spanish", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 6,
};

export const ES_UNIT1_LESSON5: Lesson = {
  id: "es-u1-l5",
  title: "Travel & Directions",
  type: "vocabulary",
  description: "Navigate and ask for directions in Spanish.",
  goal: { type: "learn-vocabulary", description: "Learn 5 direction words", targetCount: 5 },
  vocabulary: [
    { id: "es-izquierda", word: "Izquierda", translation: "Left", pronunciation: "eez-KYEHR-dah", exampleSentence: "Gira a la izquierda.", exampleTranslation: "Turn left." },
    { id: "es-derecha", word: "Derecha", translation: "Right", pronunciation: "deh-REH-chah", exampleSentence: "Está a la derecha.", exampleTranslation: "It is on the right." },
    { id: "es-recto", word: "Recto", translation: "Straight ahead", pronunciation: "REHK-toh", exampleSentence: "Sigue recto.", exampleTranslation: "Go straight ahead." },
    { id: "es-cerca", word: "Cerca", translation: "Near / Close", pronunciation: "SEHR-kah", exampleSentence: "El hotel está cerca.", exampleTranslation: "The hotel is near." },
    { id: "es-lejos", word: "Lejos", translation: "Far", pronunciation: "LEH-hos", exampleSentence: "¿Está lejos?", exampleTranslation: "Is it far?" },
  ],
  phrases: [],
  activities: [
    { id: "es-u1-l5-a1", type: "multiple-choice", question: "What does 'Izquierda' mean?", options: ["Right", "Left", "Straight", "Far"], correctAnswer: "Left" },
    { id: "es-u1-l5-a2", type: "translate", question: "Translate: 'Near'", correctAnswer: "Cerca" },
    { id: "es-u1-l5-a3", type: "multiple-choice", question: "How do you say 'Turn right'?", options: ["Gira a la izquierda", "Gira a la derecha", "Sigue recto", "Está lejos"], correctAnswer: "Gira a la derecha" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly Spanish teacher teaching directions.", introMessage: "¡Hola! Let's learn how to give and follow directions in Spanish!", lessonContext: "Direction words: izquierda, derecha, recto, cerca, lejos.", targetLanguage: "Spanish", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const ES_UNIT1_LESSON6: Lesson = {
  id: "es-u1-l6",
  title: "Shopping",
  type: "vocabulary",
  description: "Shop and talk about prices in Spanish.",
  goal: { type: "learn-vocabulary", description: "Learn 5 shopping words", targetCount: 5 },
  vocabulary: [
    { id: "es-dinero", word: "Dinero", translation: "Money", pronunciation: "dee-NEH-roh", exampleSentence: "No tengo dinero.", exampleTranslation: "I don't have money." },
    { id: "es-precio", word: "Precio", translation: "Price", pronunciation: "PREH-syoh", exampleSentence: "¿Cuál es el precio?", exampleTranslation: "What is the price?" },
    { id: "es-barato", word: "Barato", translation: "Cheap", pronunciation: "bah-RAH-toh", exampleSentence: "Es muy barato.", exampleTranslation: "It is very cheap." },
    { id: "es-caro", word: "Caro", translation: "Expensive", pronunciation: "KAH-roh", exampleSentence: "Eso es muy caro.", exampleTranslation: "That is very expensive." },
    { id: "es-tienda", word: "Tienda", translation: "Store / Shop", pronunciation: "TYEHN-dah", exampleSentence: "La tienda está cerrada.", exampleTranslation: "The store is closed." },
  ],
  phrases: [],
  activities: [
    { id: "es-u1-l6-a1", type: "multiple-choice", question: "What does 'Barato' mean?", options: ["Expensive", "Price", "Cheap", "Money"], correctAnswer: "Cheap" },
    { id: "es-u1-l6-a2", type: "translate", question: "Translate: 'Money'", correctAnswer: "Dinero" },
    { id: "es-u1-l6-a3", type: "fill-in-blank", question: "La ___ está cerrada. (Store)", options: ["precio", "tienda", "dinero", "barato"], correctAnswer: "tienda" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly Spanish teacher teaching shopping vocabulary.", introMessage: "¡Hola! Today we go shopping in Spanish!", lessonContext: "Shopping words: dinero, precio, barato, caro, tienda.", targetLanguage: "Spanish", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

// ─────────────────────────────────────────────────────────────────────────────
// Spanish — Unit 2 (continued): Numbers 6-10, Colors, Days, Months, Time
// ─────────────────────────────────────────────────────────────────────────────

export const ES_UNIT2_LESSON2: Lesson = {
  id: "es-u2-l2",
  title: "Numbers 6–10",
  type: "vocabulary",
  description: "Complete your Spanish numbers from six to ten.",
  goal: { type: "learn-vocabulary", description: "Learn numbers 6-10", targetCount: 5 },
  vocabulary: [
    { id: "es-seis", word: "Seis", translation: "Six", pronunciation: "SAYS", exampleSentence: "Tengo seis hermanos.", exampleTranslation: "I have six siblings." },
    { id: "es-siete", word: "Siete", translation: "Seven", pronunciation: "SYEH-teh", exampleSentence: "Son las siete.", exampleTranslation: "It is seven o'clock." },
    { id: "es-ocho", word: "Ocho", translation: "Eight", pronunciation: "OH-choh", exampleSentence: "Ocho personas.", exampleTranslation: "Eight people." },
    { id: "es-nueve", word: "Nueve", translation: "Nine", pronunciation: "NWEH-beh", exampleSentence: "Nueve días.", exampleTranslation: "Nine days." },
    { id: "es-diez", word: "Diez", translation: "Ten", pronunciation: "DYEHS", exampleSentence: "Diez minutos.", exampleTranslation: "Ten minutes." },
  ],
  phrases: [],
  activities: [
    { id: "es-u2-l2-a1", type: "multiple-choice", question: "What does 'Siete' mean?", options: ["Six", "Seven", "Eight", "Nine"], correctAnswer: "Seven" },
    { id: "es-u2-l2-a2", type: "translate", question: "Translate: 'Ten'", correctAnswer: "Diez" },
    { id: "es-u2-l2-a3", type: "multiple-choice", question: "How do you say 'Eight' in Spanish?", options: ["Seis", "Siete", "Ocho", "Nueve"], correctAnswer: "Ocho" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly Spanish teacher teaching numbers 6-10.", introMessage: "¡Hola! Let's finish our numbers — seis, siete, ocho, nueve, diez!", lessonContext: "Numbers 6-10 in Spanish.", targetLanguage: "Spanish", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const ES_UNIT2_LESSON3: Lesson = {
  id: "es-u2-l3",
  title: "Colors",
  type: "vocabulary",
  description: "Name the most common colors in Spanish.",
  goal: { type: "learn-vocabulary", description: "Learn 5 colors", targetCount: 5 },
  vocabulary: [
    { id: "es-rojo", word: "Rojo", translation: "Red", pronunciation: "ROH-hoh", exampleSentence: "La rosa es roja.", exampleTranslation: "The rose is red." },
    { id: "es-azul", word: "Azul", translation: "Blue", pronunciation: "ah-SOOL", exampleSentence: "El cielo es azul.", exampleTranslation: "The sky is blue." },
    { id: "es-verde", word: "Verde", translation: "Green", pronunciation: "BEHR-deh", exampleSentence: "La hierba es verde.", exampleTranslation: "The grass is green." },
    { id: "es-amarillo", word: "Amarillo", translation: "Yellow", pronunciation: "ah-mah-REE-yoh", exampleSentence: "El sol es amarillo.", exampleTranslation: "The sun is yellow." },
    { id: "es-blanco", word: "Blanco", translation: "White", pronunciation: "BLAHN-koh", exampleSentence: "La nieve es blanca.", exampleTranslation: "The snow is white." },
  ],
  phrases: [],
  activities: [
    { id: "es-u2-l3-a1", type: "multiple-choice", question: "What color is 'Rojo'?", options: ["Blue", "Green", "Red", "Yellow"], correctAnswer: "Red" },
    { id: "es-u2-l3-a2", type: "translate", question: "Translate: 'Blue'", correctAnswer: "Azul" },
    { id: "es-u2-l3-a3", type: "fill-in-blank", question: "El cielo es ___. (Blue)", options: ["rojo", "verde", "azul", "blanco"], correctAnswer: "azul" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly Spanish teacher teaching colors.", introMessage: "¡Hola! Let's paint the world in Spanish — it's color time!", lessonContext: "Colors in Spanish: rojo, azul, verde, amarillo, blanco.", targetLanguage: "Spanish", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const ES_UNIT2_LESSON4: Lesson = {
  id: "es-u2-l4",
  title: "Days of the Week",
  type: "vocabulary",
  description: "Learn the days of the week in Spanish.",
  goal: { type: "learn-vocabulary", description: "Learn 5 days", targetCount: 5 },
  vocabulary: [
    { id: "es-lunes", word: "Lunes", translation: "Monday", pronunciation: "LOO-nes", exampleSentence: "El lunes voy al trabajo.", exampleTranslation: "On Monday I go to work." },
    { id: "es-martes", word: "Martes", translation: "Tuesday", pronunciation: "MAR-tes", exampleSentence: "El martes tengo clase.", exampleTranslation: "On Tuesday I have class." },
    { id: "es-miercoles", word: "Miércoles", translation: "Wednesday", pronunciation: "MYEHR-koh-les", exampleSentence: "Los miércoles como fuera.", exampleTranslation: "On Wednesdays I eat out." },
    { id: "es-jueves", word: "Jueves", translation: "Thursday", pronunciation: "HWEH-bes", exampleSentence: "El jueves es el mejor día.", exampleTranslation: "Thursday is the best day." },
    { id: "es-viernes", word: "Viernes", translation: "Friday", pronunciation: "BYEHR-nes", exampleSentence: "El viernes salimos.", exampleTranslation: "On Friday we go out." },
  ],
  phrases: [],
  activities: [
    { id: "es-u2-l4-a1", type: "multiple-choice", question: "What day is 'Lunes'?", options: ["Sunday", "Monday", "Tuesday", "Wednesday"], correctAnswer: "Monday" },
    { id: "es-u2-l4-a2", type: "translate", question: "Translate: 'Friday'", correctAnswer: "Viernes" },
    { id: "es-u2-l4-a3", type: "multiple-choice", question: "What is 'Miércoles' in English?", options: ["Monday", "Tuesday", "Wednesday", "Thursday"], correctAnswer: "Wednesday" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly Spanish teacher teaching days of the week.", introMessage: "¡Hola! Let's learn the days of the week in Spanish!", lessonContext: "Days: lunes, martes, miércoles, jueves, viernes.", targetLanguage: "Spanish", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const ES_UNIT2_LESSON5: Lesson = {
  id: "es-u2-l5",
  title: "Months of the Year",
  type: "vocabulary",
  description: "Learn the months of the year in Spanish.",
  goal: { type: "learn-vocabulary", description: "Learn 5 months", targetCount: 5 },
  vocabulary: [
    { id: "es-enero", word: "Enero", translation: "January", pronunciation: "eh-NEH-roh", exampleSentence: "Enero es frío.", exampleTranslation: "January is cold." },
    { id: "es-febrero", word: "Febrero", translation: "February", pronunciation: "feh-BREH-roh", exampleSentence: "Febrero tiene 28 días.", exampleTranslation: "February has 28 days." },
    { id: "es-marzo", word: "Marzo", translation: "March", pronunciation: "MAR-soh", exampleSentence: "En marzo empieza la primavera.", exampleTranslation: "Spring starts in March." },
    { id: "es-abril", word: "Abril", translation: "April", pronunciation: "ah-BREEL", exampleSentence: "Llueve mucho en abril.", exampleTranslation: "It rains a lot in April." },
    { id: "es-mayo", word: "Mayo", translation: "May", pronunciation: "MAH-yoh", exampleSentence: "Las flores de mayo.", exampleTranslation: "The May flowers." },
  ],
  phrases: [],
  activities: [
    { id: "es-u2-l5-a1", type: "multiple-choice", question: "What month is 'Enero'?", options: ["February", "March", "January", "April"], correctAnswer: "January" },
    { id: "es-u2-l5-a2", type: "translate", question: "Translate: 'March'", correctAnswer: "Marzo" },
    { id: "es-u2-l5-a3", type: "fill-in-blank", question: "___ tiene 28 días. (February)", options: ["Enero", "Febrero", "Marzo", "Abril"], correctAnswer: "Febrero" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly Spanish teacher teaching months of the year.", introMessage: "¡Hola! Let's learn the months — enero, febrero, marzo…", lessonContext: "Months: enero, febrero, marzo, abril, mayo.", targetLanguage: "Spanish", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const ES_UNIT2_LESSON6: Lesson = {
  id: "es-u2-l6",
  title: "Telling Time",
  type: "vocabulary",
  description: "Ask and tell the time in Spanish.",
  goal: { type: "learn-vocabulary", description: "Learn time expressions", targetCount: 5 },
  vocabulary: [
    { id: "es-hora", word: "Hora", translation: "Hour / Time", pronunciation: "OH-rah", exampleSentence: "¿Qué hora es?", exampleTranslation: "What time is it?" },
    { id: "es-minuto", word: "Minuto", translation: "Minute", pronunciation: "mee-NOO-toh", exampleSentence: "Espera un minuto.", exampleTranslation: "Wait a minute." },
    { id: "es-manana", word: "Mañana", translation: "Morning / Tomorrow", pronunciation: "mah-NYAH-nah", exampleSentence: "Hasta mañana.", exampleTranslation: "Until tomorrow." },
    { id: "es-tarde", word: "Tarde", translation: "Afternoon / Evening", pronunciation: "TAR-deh", exampleSentence: "Buenas tardes.", exampleTranslation: "Good afternoon." },
    { id: "es-medianoche", word: "Medianoche", translation: "Midnight", pronunciation: "meh-dyah-NOH-cheh", exampleSentence: "A medianoche.", exampleTranslation: "At midnight." },
  ],
  phrases: [],
  activities: [
    { id: "es-u2-l6-a1", type: "multiple-choice", question: "How do you ask 'What time is it?' in Spanish?", options: ["¿Cuántos años tienes?", "¿Qué hora es?", "¿Dónde estás?", "¿Cómo te llamas?"], correctAnswer: "¿Qué hora es?" },
    { id: "es-u2-l6-a2", type: "translate", question: "Translate: 'Minute'", correctAnswer: "Minuto" },
    { id: "es-u2-l6-a3", type: "multiple-choice", question: "What does 'Tarde' mean?", options: ["Morning", "Night", "Afternoon", "Midnight"], correctAnswer: "Afternoon" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly Spanish teacher teaching how to tell time.", introMessage: "¡Hola! ¿Qué hora es? Let's learn to tell time in Spanish!", lessonContext: "Time expressions: hora, minuto, mañana, tarde, medianoche.", targetLanguage: "Spanish", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 6,
};

// ─────────────────────────────────────────────────────────────────────────────
// French — Unit 1 (continued): Daily Life, Café, Travel, Shopping
// ─────────────────────────────────────────────────────────────────────────────

export const FR_UNIT1_LESSON3: Lesson = {
  id: "fr-u1-l3",
  title: "Daily Life",
  type: "vocabulary",
  description: "Words for everyday routines and places in French.",
  goal: { type: "learn-vocabulary", description: "Learn 5 daily life words", targetCount: 5 },
  vocabulary: [
    { id: "fr-maison", word: "Maison", translation: "House", pronunciation: "meh-ZOH(N)", exampleSentence: "Ma maison est petite.", exampleTranslation: "My house is small." },
    { id: "fr-travail", word: "Travail", translation: "Work", pronunciation: "trah-VY", exampleSentence: "Je vais au travail.", exampleTranslation: "I am going to work." },
    { id: "fr-ecole", word: "École", translation: "School", pronunciation: "ay-KOL", exampleSentence: "L'école est fermée.", exampleTranslation: "The school is closed." },
    { id: "fr-manger", word: "Manger", translation: "To eat", pronunciation: "mahn-ZHAY", exampleSentence: "J'aime manger.", exampleTranslation: "I love to eat." },
    { id: "fr-dormir", word: "Dormir", translation: "To sleep", pronunciation: "dor-MEER", exampleSentence: "Je dois dormir.", exampleTranslation: "I must sleep." },
  ],
  phrases: [],
  activities: [
    { id: "fr-u1-l3-a1", type: "multiple-choice", question: "What does 'Maison' mean?", options: ["School", "Work", "House", "Street"], correctAnswer: "House" },
    { id: "fr-u1-l3-a2", type: "translate", question: "Translate: 'To eat'", correctAnswer: "Manger" },
    { id: "fr-u1-l3-a3", type: "multiple-choice", question: "How do you say 'Work' in French?", options: ["Maison", "Travail", "École", "Rue"], correctAnswer: "Travail" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly French teacher teaching daily life vocabulary.", introMessage: "Bonjour! Today we learn words for daily life in French.", lessonContext: "Daily life: maison, travail, école, manger, dormir.", targetLanguage: "French", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const FR_UNIT1_LESSON4: Lesson = {
  id: "fr-u1-l4",
  title: "At the Café",
  type: "vocabulary",
  description: "Order coffee and food at a French café.",
  goal: { type: "learn-vocabulary", description: "Learn 5 café words", targetCount: 5 },
  vocabulary: [
    { id: "fr-cafe-word", word: "Café", translation: "Coffee", pronunciation: "kah-FAY", exampleSentence: "Un café, s'il vous plaît.", exampleTranslation: "A coffee, please." },
    { id: "fr-table", word: "Table", translation: "Table", pronunciation: "TAH-bluh", exampleSentence: "Une table pour deux.", exampleTranslation: "A table for two." },
    { id: "fr-menu-word", word: "Menu", translation: "Menu", pronunciation: "muh-NOO", exampleSentence: "Le menu, s'il vous plaît.", exampleTranslation: "The menu, please." },
    { id: "fr-addition", word: "Addition", translation: "Bill / Check", pronunciation: "ah-dee-SYOH(N)", exampleSentence: "L'addition, s'il vous plaît.", exampleTranslation: "The bill, please." },
    { id: "fr-eau", word: "Eau", translation: "Water", pronunciation: "OH", exampleSentence: "Une carafe d'eau.", exampleTranslation: "A carafe of water." },
  ],
  phrases: [],
  activities: [
    { id: "fr-u1-l4-a1", type: "multiple-choice", question: "How do you ask for the bill in French?", options: ["Le menu", "L'addition", "L'eau", "La table"], correctAnswer: "L'addition" },
    { id: "fr-u1-l4-a2", type: "translate", question: "Translate: 'Water'", correctAnswer: "Eau" },
    { id: "fr-u1-l4-a3", type: "fill-in-blank", question: "Un ___, s'il vous plaît. (Coffee)", options: ["eau", "table", "café", "addition"], correctAnswer: "café" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly French teacher teaching café vocabulary.", introMessage: "Bonjour! Let's order at a Parisian café!", lessonContext: "Café words: café, table, menu, addition, eau.", targetLanguage: "French", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 6,
};

export const FR_UNIT1_LESSON5: Lesson = {
  id: "fr-u1-l5",
  title: "Travel & Directions",
  type: "vocabulary",
  description: "Ask for and give directions in French.",
  goal: { type: "learn-vocabulary", description: "Learn 5 direction words", targetCount: 5 },
  vocabulary: [
    { id: "fr-gauche", word: "Gauche", translation: "Left", pronunciation: "GOHSH", exampleSentence: "Tournez à gauche.", exampleTranslation: "Turn left." },
    { id: "fr-droite", word: "Droite", translation: "Right", pronunciation: "DRWAHT", exampleSentence: "C'est à droite.", exampleTranslation: "It is on the right." },
    { id: "fr-tout-droit", word: "Tout droit", translation: "Straight ahead", pronunciation: "too DRWAH", exampleSentence: "Allez tout droit.", exampleTranslation: "Go straight ahead." },
    { id: "fr-pres", word: "Près", translation: "Near / Close", pronunciation: "PREH", exampleSentence: "C'est tout près.", exampleTranslation: "It is very close." },
    { id: "fr-loin", word: "Loin", translation: "Far", pronunciation: "LWEH(N)", exampleSentence: "C'est loin d'ici.", exampleTranslation: "It is far from here." },
  ],
  phrases: [],
  activities: [
    { id: "fr-u1-l5-a1", type: "multiple-choice", question: "What does 'Gauche' mean?", options: ["Right", "Left", "Straight", "Far"], correctAnswer: "Left" },
    { id: "fr-u1-l5-a2", type: "translate", question: "Translate: 'Far'", correctAnswer: "Loin" },
    { id: "fr-u1-l5-a3", type: "multiple-choice", question: "How do you say 'Straight ahead' in French?", options: ["Gauche", "Droite", "Tout droit", "Près"], correctAnswer: "Tout droit" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly French teacher teaching directions.", introMessage: "Bonjour! Let's learn how to navigate in French!", lessonContext: "Directions: gauche, droite, tout droit, près, loin.", targetLanguage: "French", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const FR_UNIT1_LESSON6: Lesson = {
  id: "fr-u1-l6",
  title: "Shopping",
  type: "vocabulary",
  description: "Shop and talk about prices in French.",
  goal: { type: "learn-vocabulary", description: "Learn 5 shopping words", targetCount: 5 },
  vocabulary: [
    { id: "fr-argent", word: "Argent", translation: "Money", pronunciation: "ar-ZHAH(N)", exampleSentence: "Je n'ai pas d'argent.", exampleTranslation: "I don't have money." },
    { id: "fr-prix", word: "Prix", translation: "Price", pronunciation: "PREE", exampleSentence: "Quel est le prix?", exampleTranslation: "What is the price?" },
    { id: "fr-bon-marche", word: "Bon marché", translation: "Cheap", pronunciation: "boh(n) mar-SHAY", exampleSentence: "C'est bon marché.", exampleTranslation: "It is cheap." },
    { id: "fr-cher", word: "Cher", translation: "Expensive", pronunciation: "SHEHR", exampleSentence: "C'est très cher.", exampleTranslation: "It is very expensive." },
    { id: "fr-magasin", word: "Magasin", translation: "Store / Shop", pronunciation: "mah-gah-ZEH(N)", exampleSentence: "Le magasin est fermé.", exampleTranslation: "The store is closed." },
  ],
  phrases: [],
  activities: [
    { id: "fr-u1-l6-a1", type: "multiple-choice", question: "What does 'Cher' mean?", options: ["Cheap", "Price", "Expensive", "Money"], correctAnswer: "Expensive" },
    { id: "fr-u1-l6-a2", type: "translate", question: "Translate: 'Money'", correctAnswer: "Argent" },
    { id: "fr-u1-l6-a3", type: "fill-in-blank", question: "Le ___ est fermé. (Store)", options: ["prix", "magasin", "argent", "cher"], correctAnswer: "magasin" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly French teacher teaching shopping vocabulary.", introMessage: "Bonjour! Let's go shopping in French!", lessonContext: "Shopping: argent, prix, bon marché, cher, magasin.", targetLanguage: "French", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

// ─────────────────────────────────────────────────────────────────────────────
// French — Unit 2: Numbers & Colors
// ─────────────────────────────────────────────────────────────────────────────

export const FR_UNIT2_LESSON1: Lesson = {
  id: "fr-u2-l1",
  title: "Numbers 1–10",
  type: "vocabulary",
  description: "Count from one to ten in French.",
  goal: { type: "learn-vocabulary", description: "Learn numbers 1-5", targetCount: 5 },
  vocabulary: [
    { id: "fr-un", word: "Un", translation: "One", pronunciation: "UH(N)", exampleSentence: "J'ai un chien.", exampleTranslation: "I have one dog." },
    { id: "fr-deux", word: "Deux", translation: "Two", pronunciation: "DUH", exampleSentence: "Deux cafés.", exampleTranslation: "Two coffees." },
    { id: "fr-trois", word: "Trois", translation: "Three", pronunciation: "TRWAH", exampleSentence: "Trois enfants.", exampleTranslation: "Three children." },
    { id: "fr-quatre", word: "Quatre", translation: "Four", pronunciation: "KAH-truh", exampleSentence: "Quatre personnes.", exampleTranslation: "Four people." },
    { id: "fr-cinq", word: "Cinq", translation: "Five", pronunciation: "SEH(N)K", exampleSentence: "Cinq minutes.", exampleTranslation: "Five minutes." },
  ],
  phrases: [],
  activities: [
    { id: "fr-u2-l1-a1", type: "multiple-choice", question: "What does 'Trois' mean?", options: ["One", "Two", "Three", "Four"], correctAnswer: "Three" },
    { id: "fr-u2-l1-a2", type: "translate", question: "Translate: 'Five'", correctAnswer: "Cinq" },
    { id: "fr-u2-l1-a3", type: "multiple-choice", question: "How do you say 'Two' in French?", options: ["Un", "Deux", "Trois", "Quatre"], correctAnswer: "Deux" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly French teacher teaching numbers 1-5.", introMessage: "Bonjour! Un, deux, trois — let's count in French!", lessonContext: "Numbers 1-5: un, deux, trois, quatre, cinq.", targetLanguage: "French", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const FR_UNIT2_LESSON2: Lesson = {
  id: "fr-u2-l2",
  title: "Colors",
  type: "vocabulary",
  description: "Name the most common colors in French.",
  goal: { type: "learn-vocabulary", description: "Learn 5 colors", targetCount: 5 },
  vocabulary: [
    { id: "fr-rouge", word: "Rouge", translation: "Red", pronunciation: "ROOZH", exampleSentence: "Une rose rouge.", exampleTranslation: "A red rose." },
    { id: "fr-bleu", word: "Bleu", translation: "Blue", pronunciation: "BLUH", exampleSentence: "Le ciel est bleu.", exampleTranslation: "The sky is blue." },
    { id: "fr-vert", word: "Vert", translation: "Green", pronunciation: "VEHR", exampleSentence: "L'herbe est verte.", exampleTranslation: "The grass is green." },
    { id: "fr-jaune", word: "Jaune", translation: "Yellow", pronunciation: "ZHOHN", exampleSentence: "Le soleil est jaune.", exampleTranslation: "The sun is yellow." },
    { id: "fr-blanc", word: "Blanc", translation: "White", pronunciation: "BLAH(N)", exampleSentence: "La neige est blanche.", exampleTranslation: "The snow is white." },
  ],
  phrases: [],
  activities: [
    { id: "fr-u2-l2-a1", type: "multiple-choice", question: "What color is 'Rouge'?", options: ["Blue", "Green", "Red", "Yellow"], correctAnswer: "Red" },
    { id: "fr-u2-l2-a2", type: "translate", question: "Translate: 'Blue'", correctAnswer: "Bleu" },
    { id: "fr-u2-l2-a3", type: "fill-in-blank", question: "Le ciel est ___. (Blue)", options: ["rouge", "vert", "bleu", "blanc"], correctAnswer: "bleu" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly French teacher teaching colors.", introMessage: "Bonjour! Let's paint the world in French — it's color time!", lessonContext: "Colors in French: rouge, bleu, vert, jaune, blanc.", targetLanguage: "French", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const FR_UNIT2_LESSON3: Lesson = {
  id: "fr-u2-l3",
  title: "Numbers 6–10",
  type: "vocabulary",
  description: "Complete your French numbers from six to ten.",
  goal: { type: "learn-vocabulary", description: "Learn numbers 6-10", targetCount: 5 },
  vocabulary: [
    { id: "fr-six", word: "Six", translation: "Six", pronunciation: "SEES", exampleSentence: "Six personnes.", exampleTranslation: "Six people." },
    { id: "fr-sept", word: "Sept", translation: "Seven", pronunciation: "SET", exampleSentence: "Sept jours.", exampleTranslation: "Seven days." },
    { id: "fr-huit", word: "Huit", translation: "Eight", pronunciation: "WEET", exampleSentence: "Huit heures.", exampleTranslation: "Eight o'clock." },
    { id: "fr-neuf", word: "Neuf", translation: "Nine", pronunciation: "NUF", exampleSentence: "Neuf enfants.", exampleTranslation: "Nine children." },
    { id: "fr-dix", word: "Dix", translation: "Ten", pronunciation: "DEES", exampleSentence: "Dix minutes.", exampleTranslation: "Ten minutes." },
  ],
  phrases: [],
  activities: [
    { id: "fr-u2-l3-a1", type: "multiple-choice", question: "What does 'Sept' mean?", options: ["Six", "Seven", "Eight", "Nine"], correctAnswer: "Seven" },
    { id: "fr-u2-l3-a2", type: "translate", question: "Translate: 'Ten'", correctAnswer: "Dix" },
    { id: "fr-u2-l3-a3", type: "multiple-choice", question: "How do you say 'Eight' in French?", options: ["Six", "Sept", "Huit", "Neuf"], correctAnswer: "Huit" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly French teacher teaching numbers 6-10.", introMessage: "Bonjour! Six, sept, huit — let's finish counting in French!", lessonContext: "Numbers 6-10: six, sept, huit, neuf, dix.", targetLanguage: "French", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const FR_UNIT2_LESSON4: Lesson = {
  id: "fr-u2-l4",
  title: "Days of the Week",
  type: "vocabulary",
  description: "Learn the days of the week in French.",
  goal: { type: "learn-vocabulary", description: "Learn 5 days", targetCount: 5 },
  vocabulary: [
    { id: "fr-lundi", word: "Lundi", translation: "Monday", pronunciation: "LUH(N)-dee", exampleSentence: "Le lundi je travaille.", exampleTranslation: "On Monday I work." },
    { id: "fr-mardi", word: "Mardi", translation: "Tuesday", pronunciation: "mar-DEE", exampleSentence: "Le mardi j'ai cours.", exampleTranslation: "On Tuesday I have class." },
    { id: "fr-mercredi", word: "Mercredi", translation: "Wednesday", pronunciation: "mehr-kruh-DEE", exampleSentence: "Le mercredi je me repose.", exampleTranslation: "On Wednesday I rest." },
    { id: "fr-jeudi", word: "Jeudi", translation: "Thursday", pronunciation: "zhuh-DEE", exampleSentence: "Jeudi soir.", exampleTranslation: "Thursday evening." },
    { id: "fr-vendredi", word: "Vendredi", translation: "Friday", pronunciation: "vahn-druh-DEE", exampleSentence: "Le vendredi on sort.", exampleTranslation: "On Friday we go out." },
  ],
  phrases: [],
  activities: [
    { id: "fr-u2-l4-a1", type: "multiple-choice", question: "What day is 'Lundi'?", options: ["Sunday", "Monday", "Tuesday", "Wednesday"], correctAnswer: "Monday" },
    { id: "fr-u2-l4-a2", type: "translate", question: "Translate: 'Friday'", correctAnswer: "Vendredi" },
    { id: "fr-u2-l4-a3", type: "multiple-choice", question: "What is 'Mercredi' in English?", options: ["Monday", "Tuesday", "Wednesday", "Thursday"], correctAnswer: "Wednesday" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly French teacher teaching days of the week.", introMessage: "Bonjour! Lundi, mardi, mercredi — let's learn the days!", lessonContext: "Days: lundi, mardi, mercredi, jeudi, vendredi.", targetLanguage: "French", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const FR_UNIT2_LESSON5: Lesson = {
  id: "fr-u2-l5",
  title: "Family & Friends",
  type: "vocabulary",
  description: "Talk about family members and friends in French.",
  goal: { type: "learn-vocabulary", description: "Learn 5 family words", targetCount: 5 },
  vocabulary: [
    { id: "fr-famille", word: "Famille", translation: "Family", pronunciation: "fah-MEE-yuh", exampleSentence: "Ma famille est grande.", exampleTranslation: "My family is big." },
    { id: "fr-mere", word: "Mère", translation: "Mother", pronunciation: "MEHR", exampleSentence: "Ma mère est sympa.", exampleTranslation: "My mother is nice." },
    { id: "fr-pere", word: "Père", translation: "Father", pronunciation: "PEHR", exampleSentence: "Mon père travaille.", exampleTranslation: "My father works." },
    { id: "fr-frere", word: "Frère", translation: "Brother", pronunciation: "FREHR", exampleSentence: "J'ai un frère.", exampleTranslation: "I have a brother." },
    { id: "fr-soeur", word: "Sœur", translation: "Sister", pronunciation: "SUR", exampleSentence: "Ma sœur est gentille.", exampleTranslation: "My sister is kind." },
  ],
  phrases: [],
  activities: [
    { id: "fr-u2-l5-a1", type: "multiple-choice", question: "What does 'Mère' mean?", options: ["Father", "Mother", "Brother", "Sister"], correctAnswer: "Mother" },
    { id: "fr-u2-l5-a2", type: "translate", question: "Translate: 'Brother'", correctAnswer: "Frère" },
    { id: "fr-u2-l5-a3", type: "fill-in-blank", question: "Ma ___ est grande. (Family)", options: ["mère", "père", "famille", "frère"], correctAnswer: "famille" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly French teacher teaching family vocabulary.", introMessage: "Bonjour! Let's talk about family in French.", lessonContext: "Family: famille, mère, père, frère, sœur.", targetLanguage: "French", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 5,
};

export const FR_UNIT2_LESSON6: Lesson = {
  id: "fr-u2-l6",
  title: "Telling Time",
  type: "vocabulary",
  description: "Ask and tell the time in French.",
  goal: { type: "learn-vocabulary", description: "Learn time expressions", targetCount: 5 },
  vocabulary: [
    { id: "fr-heure", word: "Heure", translation: "Hour / O'clock", pronunciation: "UR", exampleSentence: "Quelle heure est-il?", exampleTranslation: "What time is it?" },
    { id: "fr-minute", word: "Minute", translation: "Minute", pronunciation: "mee-NOOT", exampleSentence: "Une minute, s'il vous plaît.", exampleTranslation: "One minute, please." },
    { id: "fr-matin", word: "Matin", translation: "Morning", pronunciation: "mah-TEH(N)", exampleSentence: "Le matin je bois du café.", exampleTranslation: "In the morning I drink coffee." },
    { id: "fr-soir", word: "Soir", translation: "Evening", pronunciation: "SWAR", exampleSentence: "Ce soir on sort.", exampleTranslation: "Tonight we go out." },
    { id: "fr-minuit", word: "Minuit", translation: "Midnight", pronunciation: "mee-NWEE", exampleSentence: "À minuit.", exampleTranslation: "At midnight." },
  ],
  phrases: [],
  activities: [
    { id: "fr-u2-l6-a1", type: "multiple-choice", question: "How do you ask 'What time is it?' in French?", options: ["Comment ça va?", "Quelle heure est-il?", "Où êtes-vous?", "Quel est votre nom?"], correctAnswer: "Quelle heure est-il?" },
    { id: "fr-u2-l6-a2", type: "translate", question: "Translate: 'Morning'", correctAnswer: "Matin" },
    { id: "fr-u2-l6-a3", type: "multiple-choice", question: "What does 'Soir' mean?", options: ["Morning", "Afternoon", "Evening", "Midnight"], correctAnswer: "Evening" },
  ],
  aiTeacherPrompt: { systemPrompt: "You are a friendly French teacher teaching how to tell time.", introMessage: "Bonjour! Quelle heure est-il? Let's learn to tell time in French!", lessonContext: "Time expressions: heure, minute, matin, soir, minuit.", targetLanguage: "French", nativeLanguage: "English" },
  xpReward: 10,
  estimatedMinutes: 6,
};

// ─────────────────────────────────────────────────────────────────────────────
// French — Unit 1: Introductions (existing lesson, kept below)
// ─────────────────────────────────────────────────────────────────────────────

export const FR_UNIT1_LESSON2: Lesson = {
  id: "fr-u1-l2",
  title: "Introductions",
  type: "phrases",
  description: "Learn to introduce yourself in French.",
  goal: {
    type: "practice-phrases",
    description: "Practice 4 introduction phrases",
    targetCount: 4,
  },
  vocabulary: [
    {
      id: "fr-je-mappelle",
      word: "Je m'appelle",
      translation: "My name is",
      pronunciation: "zhuh mah-PELL",
      exampleSentence: "Je m'appelle Sophie.",
      exampleTranslation: "My name is Sophie.",
    },
    {
      id: "fr-encante",
      word: "Enchanté(e)",
      translation: "Nice to meet you",
      pronunciation: "ahn-shahn-TAY",
      exampleSentence: "Enchanté, je suis Pierre.",
      exampleTranslation: "Nice to meet you, I am Pierre.",
    },
  ],
  phrases: [
    {
      id: "fr-comment-vous-appelez",
      text: "Comment vous appelez-vous?",
      translation: "What is your name? (formal)",
      pronunciation: "koh-MAHN voo zah-puh-LAY voo",
      context: "Formal way to ask someone's name",
    },
    {
      id: "fr-comment-tu-tappelles",
      text: "Comment tu t'appelles?",
      translation: "What is your name? (informal)",
      pronunciation: "koh-MAHN tü tah-PELL",
      context: "Informal way to ask a friend's name",
    },
    {
      id: "fr-je-viens-de",
      text: "Je viens de [pays].",
      translation: "I am from [country].",
      pronunciation: "zhuh vyahn duh",
      context: "How to say where you are from",
    },
    {
      id: "fr-ravi-de-vous-connaitre",
      text: "Ravi(e) de vous connaître.",
      translation: "Pleased to meet you.",
      pronunciation: "rah-VEE duh voo koh-NETT-ruh",
      context: "Polite phrase when meeting someone",
    },
  ],
  activities: [
    {
      id: "fr-u1-l2-a1",
      type: "multiple-choice",
      question: "How do you say 'My name is' in French?",
      options: ["Je viens de", "Enchanté", "Je m'appelle", "Comment tu t'appelles?"],
      correctAnswer: "Je m'appelle",
    },
    {
      id: "fr-u1-l2-a2",
      type: "translate",
      question: "Translate: 'Nice to meet you'",
      correctAnswer: "Enchanté",
    },
  ],
  aiTeacherPrompt: {
    systemPrompt:
      "You are an enthusiastic French teacher helping beginners learn introductions. Use simple, clear language and be encouraging.",
    introMessage:
      "Bonjour encore! Now let's learn how to introduce ourselves in French. This is very useful!",
    lessonContext:
      "The student is learning French introductions: Je m'appelle, Comment tu t'appelles?, Enchanté, Ravi de vous connaître.",
    targetLanguage: "French",
    nativeLanguage: "English",
  },
  xpReward: 10,
  estimatedMinutes: 6,
};
