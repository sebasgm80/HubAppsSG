import { getData } from "../../global/state/globalState";
import {  initControler, jugar } from "../../utils";
import "./Piedra.css";






const template = () => `
<div id="juego">
  <div class="container">
    <h1>Piedra, Papel, Tijera</h1>
    <div id="puntuacion">
      <div class="puntuacion" id="usuario-puntuacion">Usuario: 0</div>
      <div class="puntuacion" id="maquina-puntuacion">Máquina: 0</div>
    </div>
    <div id="game">
      <img class="options" id="piedra" onclick="jugar('piedra')"
        src="https://res.cloudinary.com/dsurhcayl/image/upload/v1708192382/_d5e701a3-7cae-4973-b71f-9b1217430436_q8o5g3.jpg" />
      <img class="options" id="papel" onclick="jugar('papel')"
        src="https://res.cloudinary.com/dsurhcayl/image/upload/v1708192382/_320c8309-d357-48a1-a4e5-a054a550fe0b_k1rk8p.jpg" />
      <img class="options" id="tijera" onclick="jugar('tijera')"
        src="https://res.cloudinary.com/dsurhcayl/image/upload/v1708193561/_68eedbd8-874f-4995-9cc3-2c4076682929_ifjh2f.jpg"
        alt="tijera" />
    </div>
    <div id="resultado"></div>
  </div>
</div>
`;

const addEventListeners = () => {
  const options = document.querySelectorAll('.options');

  options.forEach((option) => {
    option.addEventListener('click', () => {
      jugar(option.id);
    });
  });
};

export const PrintPiedraPage = () => {
    /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
    document.querySelector("main").innerHTML = template();
  
    /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
    document.querySelector("nav").style.display = "flex";

  
    /** metemos los escuchadores de la pagina */
    addEventListeners();
  
    /** y por ultimo traemos la info que hace la llamada asincrona a la api de pokemon y lo setea en el estado
     */
    jugar();
  };



  