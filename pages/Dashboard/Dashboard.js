import { getData } from "../../global/state/globalState";
import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure class="card1" id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dsurhcayl/image/upload/v1707941968/poke_bgden3.jpg"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure class="card2" id="navigatePiedra">
          <img
            src="https://res.cloudinary.com/dsurhcayl/image/upload/v1707941968/juego_a1wgbz.jpg"
            alt=" go to piedra papel tijera"
          />
          <h2>PIEDRA PAPEL TIJERA</h2>
        </figure>
      </li>
      <li>
        <figure class="card3" id="navigateCajon">
          <img
            src="https://res.cloudinary.com/dsurhcayl/image/upload/v1707941968/app_snuay5.jpg"
            alt="go to calculadora"
          />
          <h2>CALCULA CAJONES</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  /** le damos el evento al boton de pokemon que es la unica pagina de contenido por
   * ahora esta creada en el proyecto
   */
  const navigatePiedra = document.getElementById("navigatePiedra");
  navigatePiedra.addEventListener("click", () => {
    initControler("Piedra");
  });

  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });

 };


export const printTemplateDashboard = () => {
  /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
  document.querySelector("main").innerHTML = template();

  /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
  document.querySelector("nav").style.display = "flex";
  document.querySelector("body").style.overflow = "auto";
  document.querySelector("body").style.background = "linear-gradient(to bottom, #ffffff, #e9e2e2, #b7b4b4)";

  /** metemos los escuchadores de la pagina */
  addEventListeners();

  /** y por ultimo traemos la info que hace la llamada asincrona a la api de pokemon y lo setea en el estado
   */
  getInfo();
};
