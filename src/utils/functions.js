export function getSzigrisztValue(result) {
  if (result >= 0 && result < 15)
    return ["Lectura muy difícil", "Científico/Filosófico"];
  if (result >= 15 && result < 35)
    return ["Lectura difícil", "Pedagógico/Especializado"];
  if (result >= 35 && result < 50)
    return ["Lectura bastante difícil", "Literatura/Divulgación"];
  if (result >= 50 && result < 65) return ["Lectura normal", "Informativo"];
  if (result >= 65 && result < 70)
    return ["Lectura bastante fácil", "Novela/Revista"];
  if (result >= 70 && result < 85) return ["Lectura fácil", "Quioscos"];
  if (result >= 85 && result <= 100)
    return ["Lectura muy fácil", "Cuentos/Relatos"];
  return ["-", "-"];
}

export function getFernandezValue(result) {
  if (result >= 0 && result < 30)
    return ["Lectura muy difícil", "Grado de universidad"];
  if (result >= 30 && result < 50) return ["Lectura difícil", "Universitario"];
  if (result >= 50 && result < 60)
    return ["Lectura algo difícil", "Bachillerato"];
  if (result >= 60 && result < 70) return ["Lectura normal", "Grado 8 a 9"];
  if (result >= 70 && result < 80) return ["Lectura algo fácil", "Grado 7"];
  if (result >= 80 && result < 90) return ["Lectura fácil", "Grado 6"];
  if (result >= 90 && result <= 100) return ["Lectura muy fácil", "Grado 5"];
  return ["-", "-"];
}

export function getMuValue(result) {
  if (result >= 0 && result < 30) return ["Lectura muy difícil", "-"];
  if (result >= 30 && result < 50) return ["Lectura difícil", "-"];
  if (result >= 50 && result < 60) return ["Lectua un poco difícil", "-"];
  if (result >= 60 && result < 70) return ["Lectura adecuada", "-"];
  if (result >= 70 && result < 80) return ["Lectura un poco fácil", "-"];
  if (result >= 80 && result < 90) return ["Lectura fácil", "-"];
  if (result >= 90 && result < 100) return ["Lectura muy fácil", "-"];
  return ["-"];
}

export function getFleschValue(result) {
  if (result >= 0 && result < 10) return ["Professional", "-"];
  if (result >= 10 && result < 30) return ["College graduate", "-"];
  if (result >= 30 && result < 50) return ["College", "-"];
  if (result >= 50 && result < 60) return ["10th & 11th grade", "-"];
  if (result >= 60 && result < 70) return ["8th & 9th grade", "-"];
  if (result >= 70 && result < 80) return ["7th grade", "-"];
  if (result >= 80 && result < 90) return ["6th grade", "-"];
  if (result >= 90 && result <= 100) return ["5th grade", "-"];
  return ["-", "-"];
}

export function getSmogValue(result) {
  if (result >= 1 && result < 7) return ["5th grade", "-"];
  if (result >= 7 && result < 13) return ["6th grade", "-"];
  if (result >= 13 && result < 21) return ["7th grade", "-"];
  if (result >= 21 && result < 31) return ["8th grade", "-"];
  if (result >= 31 && result < 43) return ["9th grade", "-"];
  if (result >= 43 && result < 57) return ["10th grade", "-"];
  if (result >= 57 && result < 73) return ["11th grade", "-"];
  if (result >= 73 && result < 91) return ["12th grade", "-"];
  if (result >= 91 && result < 111) return ["13th grade", "-"];
  if (result >= 111 && result < 133) return ["14th grade", "-"];
  if (result >= 133 && result < 157) return ["15th grade", "-"];
  if (result >= 157 && result < 183) return ["16th grade", "-"];
  if (result >= 183 && result < 211) return ["17th grade", "-"];
  if (result >= 211 && result <= 240) return ["18th grade", "-"];
  return ["-", "-"];
}

export function getFogValue(result) {
  const value = parseInt(result);
  switch (value) {
    case 17:
      return ["College graduate", "-"];
    case 16:
      return ["College senior", , "-"];
    case 15:
      return ["College junior", , "-"];
    case 14:
      return ["College sophomore", "-"];
    case 13:
      return ["College freshman", "-"];
    case 12:
      return ["High School Senior", "-"];
    case 11:
      return ["High School junior", "-"];
    case 10:
      return ["High School Sophomore", "-"];
    case 9:
      return ["High School Freshman", "-"];
    case 8:
      return ["Eighth Grade", "-"];
    case 7:
      return ["Seventh Grade", "-"];
    case 6:
      return ["Sixth Grade", "-"];
    default:
      return ["-", "-"];
  }
}

export async function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}

export function getParagraph(index) {
  const currentTicket = JSON.parse(localStorage.getItem("current-ticket"));

  return currentTicket?.paragraphInfo?.[index]?.content;
}
