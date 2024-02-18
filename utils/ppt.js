let puntuacionUsuario = 0;
let puntuacionMaquina = 0;

export const jugar = (eleccionUsuario) => {
  

  const opciones = ['piedra', 'papel', 'tijera'];
  const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

  const resultado = determinarGanador(eleccionUsuario, eleccionComputadora);

  document.getElementById('resultado').innerHTML = `Tu elección: ${eleccionUsuario}<br>Tu contrincante eligió: ${eleccionComputadora}<br>Resultado: ${resultado}`;

  actualizarPuntuacion(resultado);
};



const determinarGanador = (usuario, computadora) => {
  if (usuario === computadora) {
    return 'HAS EMPATADO';
  }

  if (
    (usuario === 'piedra' && computadora === 'tijera') ||
    (usuario === 'papel' && computadora === 'piedra') ||
    (usuario === 'tijera' && computadora === 'papel')
  ) {
    puntuacionUsuario++;
    return '¡HAS GANADO!';
  } else {
    puntuacionMaquina++;
    return '¡HAS PERDIDO!';
  }
};


const actualizarPuntuacion = (resultado) => {
  document.getElementById('usuario-puntuacion').innerHTML = `Usuario: ${puntuacionUsuario}`;
  document.getElementById('maquina-puntuacion').innerHTML = `Máquina: ${puntuacionMaquina}`;
};
