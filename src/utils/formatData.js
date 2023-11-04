
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
}

export const formatTextData = (data, language) => {
    const { Parrafo, ...ticket } = data || {};
    const isSpa = language === 'spa';
    const newTicket = {
        ...ticket,
        paragraphs: Parrafo,
        column2: isSpa ? data?.szigrisztPazos_INFLESZ : data?.fleshReadingEasy,
        column3: isSpa ? data?.fernandezHuerta : data?.fogReading,
        column4: isSpa ? data?.legibilidadMu : data?.smogReading,
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