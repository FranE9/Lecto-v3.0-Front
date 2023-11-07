export const formatTicketData = (data) => {
  const { spaResults, engResults, _id, ...ticket } = data || {};

  const newTicket = {
    ...ticket,
    id: _id,
    column2: spaResults?.szigriszt_pazos || engResults?.flesch_reading_easy,
    column3: spaResults?.fernandez_huerta || engResults?.fog_reading,
    column4: spaResults?.readability || engResults?.smog_reading,
  };

  return newTicket;
};

export const formatTextData = (data, language) => {
  const { Parrafo, ...ticket } = data || {};
  const isSpa = language === "spa";
  const newTicket = {
    ...ticket,
    paragraphs: Parrafo,
    column2: isSpa ? data?.szigrisztPazos_INFLESZ : data?.fleshReadingEasy,
    column3: isSpa ? data?.fernandezHuerta : data?.fogReading,
    column4: isSpa ? data?.legibilidadMu : data?.smogReading,
    language,
  };

  return newTicket;
};

export const saveTicket = (ticket) => {
  localStorage.setItem("current-ticket", JSON.stringify(ticket));
};

export const getCurrentTicket = (ticketId) => {
  const currentTicket = JSON.parse(localStorage.getItem("current-ticket"));
  return currentTicket?.id === ticketId ? currentTicket : null;
};

export const formatChartData = (paragraphInfo = [], lang = "spa") => {
  const isSpa = lang === "spa";
  let chartData = {
    groupOne: [],
    groupTwo: [],
    groupThree: [],
  };
  for (let index = 0; index < paragraphInfo.length; index++) {
    const currentParagraph = paragraphInfo[index];
    const paragraph = parseInt(currentParagraph.Parrafo) + 1;

    const valueOne = isSpa
      ? parseFloat(currentParagraph.szigrisztPazos_INFLESZ)
      : parseFloat(currentParagraph.fleshReadingEasy);

    const valueTwo = isSpa
      ? parseFloat(currentParagraph.fernandezHuerta)
      : parseFloat(currentParagraph.fogReading);

    const valueThree = isSpa
      ? parseFloat(currentParagraph.legibilidadMu)
      : parseFloat(currentParagraph.smogReading);

    chartData = {
      ...chartData,
      groupOne: [...chartData.groupOne, { paragraph, value: valueOne }],
      groupTwo: [...chartData.groupTwo, { paragraph, value: valueTwo }],
      groupThree: [...chartData.groupThree, { paragraph, value: valueThree }],
    };
  }

  return [
    {
      label: isSpa ? "Szigriszt-Pazos/INFLESZ" : "Flesch Reading Easy",
      data: chartData.groupOne,
    },
    {
      label: isSpa ? "Fernandez-Huerta" : "Fog Reading",
      data: chartData.groupTwo,
    },
    {
      label: isSpa ? "Legibilidad Mu" : "Smog Reading",
      data: chartData.groupThree,
    },
  ];
};

/*
{
      "Parrafo": "0",
      "fleshReadingEasy": "95.56",
      "fogReading": "17",
      "smogReading": "3.13",
      "words": 22,
      "phrases": 3,
      "syllables": 27,
      "letters": 81,
      "Three_sillabls_words": 0
    },

    {
      "Parrafo": "0",
      "szigrisztPazos_INFLESZ": "66.5",
      "fernandezHuerta": "71.13",
      "legibilidadMu": "76.98",
      "words": 21,
      "phrases": 3,
      "syllables": 45,
      "letters": 103,
      "Three_sillabls_words": 0
    },
*/
