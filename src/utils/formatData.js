
export const formatTicketData = (data) => {
    const newTicket = {
        id: data?._id,
        paragraph: data?.spaResults?.paragraph || data?.engResults?.paragraph,
        column2: data?.spaResults?.szigriszt_pazos || data?.engResults?.flesch_reading_easy,
        column3: data?.spaResults?.fernandez_huerta || data?.engResults?.fog_reading,
        column4: data?.spaResults?.readability || data?.engResults?.smog_reading,
        language: data?.language
    };

    return newTicket;
}

export const formatTextData = (data, language) => {
    const newTicket = {
        id: data?.id,
        paragraph: data?.Parrafo,
        column2: language === "spa" ? data?.szigrisztPazos_INFLESZ : data?.fleshReadingEasy,
        column3: language === "spa" ? data?.fernandezHuerta : data?.fogReading,
        column4: language === "spa" ? data?.legibilidadMu : data?.smogReading,
        language,
    };

    return newTicket;
}

export const saveTicket = (ticket) => {
    localStorage.setItem("current-ticket", JSON.stringify(ticket));
};

export const getCurrentTicket = (ticketId) => {
    const currentTicket = JSON.parse(localStorage.getItem("current-ticket"));
    return currentTicket?.id === ticketId ? currentTicket : null;
}