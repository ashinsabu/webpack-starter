import generateJoke from "./generateJoke";
import './styles/main.scss'
import saffron from './assets/saffron.png'

const saffronImg = document.getElementById('saffronImg')
saffronImg.src = saffron
console.log(generateJoke());
