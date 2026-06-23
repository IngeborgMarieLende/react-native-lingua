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
