let fecha = document.getElementById("fecha");
let hora = document.getElementById("hora");

// console.log(fecha, hora);

const obtenerFecha = () => {
  let time = new Date();

  // console.log(time);
  // console.log(time.getMonth());
  // console.log(time.getDay());
  // console.log(time.getDate());
  // console.log(time.getFullYear());
  // console.log(time.getHours());
  // console.log(time.getMinutes());
  // console.log(time.getSeconds());

  // realizamos los arreglos para relacionar los dias con el GetDay y los meses con GetMonth
  let diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // fecha objetivo

  fecha.innerHTML = `${diasSemana[time.getDay()]} ${time.getDate()} de ${
    meses[time.getMonth()]
  } del ${time.getFullYear()}`;

  let segundos = time.getSeconds();
  let minutos = time.getMinutes();
  let horas = time.getHours();

  // dar formato a la hora

  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (horas < 10) {
    horas = "0" + horas;
  }

  // hora objetivo

  hora.innerHTML = `${horas}:${minutos}:${segundos}`;
};

setInterval(obtenerFecha, 1000);

// cambiar el color

const cambiarColor = (color) => {
  switch (color) {
    case "azul" :
        fecha.className = "azul";
        hora.className= "azul";
      break;
    case "rosa":
        fecha.className = 'rosa';
        hora.className= 'rosa';

      break;
    case "verde":
        fecha.className = "verde";
        hora.className= "verde";
      break;

    default:
        fecha.className = "verde";
        hora.className= "verde";
      break;
  }
};
