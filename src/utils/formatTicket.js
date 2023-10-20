export const getEstimatedTime = (seconds) => {
    if (seconds >= 60.0) {
        const min = Math.round(seconds/60.0);
        const sec = seconds - min * 60;
        return `${min} min con ${sec} s`
    }
    return `${seconds} segundos`;
}

export function formatDate(date) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("es-ES", options);
  }
  
  export function formatTime(date) {
    var utcTime = date.toISOString();
    
    var gmtCentralTime = new Date(utcTime);
    gmtCentralTime.setHours(gmtCentralTime.getHours() - 6);
    
    var options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return gmtCentralTime.toLocaleTimeString("es-ES", options);
  }