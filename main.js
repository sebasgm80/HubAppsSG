import './style.css'
import { getInfo, initControler, initTemplate } from "./utils";
// Funcion para comoponetizar header, main, foooter
// Dentro initController.js en utils
initTemplate();
// Funcion para las rutas
// Dentro de routes.js en utils
initControler();

/** Llamamos a la funcion getInfo que se trae los datos de la API y los settea en el
 * que tiene los datos de pokemon
 */
getInfo();
