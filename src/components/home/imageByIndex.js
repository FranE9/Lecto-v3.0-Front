import pazosImg from "../../assets/images/Pazos.jpg";
import infleszImg from "../../assets/images/INFLESZ.jpg";
import fernandezHuertaImg from "../../assets/images/Fernandez_huerta.jpg";
import readabilityImg from "../../assets/images/Legibilidad_mu.jpg";
import fleschImg from "../../assets/images/Flesch.jpg";
import fogImg from "../../assets/images/FOG.jpg";
import smogImg from "../../assets/images/SMOG.jpg"

export const spaImages = [pazosImg, infleszImg, fernandezHuertaImg, readabilityImg];
export const engImages = [fleschImg, fogImg, smogImg];

const imageByIndex = (index, language = "es") => {
    const images = language === "es" ? spaImages : engImages;
    return images[index % images.length]
}

export default imageByIndex