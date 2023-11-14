export const getEstimatedTime = (seconds, language = "es") => {
    if (seconds >= 60.0) {
        const min = Math.round(seconds/60.0);
        const sec = seconds - min * 60;
        return `${min} min, ${sec} s`
    }
    return `${seconds} ${language == "es" ? "segundos" : "seconds"}`;
}

export function formatDate(date, language = "es") {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(language == "es" ? "es-ES" : "en-US", options);
  }
  
  export function formatTime(date, language = "es") {
    var utcTime = date.toISOString();
    
    var gmtCentralTime = new Date(utcTime);
    gmtCentralTime.setHours(gmtCentralTime.getHours() - 6);
    
    var options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return gmtCentralTime.toLocaleTimeString(language == "es" ? "es-ES" : "en-US", options);
  }