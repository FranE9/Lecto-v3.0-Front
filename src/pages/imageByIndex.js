import spaTitle from "../assets/images/Titulo_spa.jpg";
import pazosImg from "../assets/images/Pazos.jpg";
import infleszImg from "../assets/images/INFLESZ.jpg";
import fernandezHuertaImg from "../assets/images/Fernandez_huerta.jpg";
import readabilityImg from "../assets/images/Legibilidad_mu.jpg";

export const images = [pazosImg, infleszImg, fernandezHuertaImg, readabilityImg]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex