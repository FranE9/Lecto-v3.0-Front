export const getHeaders = (languageHeaders = {}) => [
  { label: "Parrafo", key: "Parrafo" },
  { label: "Letras", key: "letters" },
  { label: "Palabras", key: "words" },
  { label: "Silabas", key: "syllables" },
  { label: "Frases", key: "phrases" },
  ...languageHeaders,
];

export const SPANISH_HEADERS = [
  { label: "Szigriszt-Pazos/INFLESZ", key: "szigrisztPazos_INFLESZ" },
  { label: "Fernandez-Huerta", key: "fernandezHuerta" },
  { label: "Legibilidad Mu", key: "legibilidadMu" },
];

export const ENGLISH_HEADERS = [
  { label: "Flesch Reading Easy", key: "fleshReadingEasy" },
  { label: "Fog Reading", key: "fogReading" },
  { label: "Smog Reading", key: "smogReading" },
];

export const DEFAULT_STYLE_BTN = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center";


