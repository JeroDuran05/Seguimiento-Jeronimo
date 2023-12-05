let numeroDeDia = 3;
let nombreDelDia;

switch (numeroDeDia) {
  case 1:
    nombreDelDia = "Lunes";
    break;
  case 2:
    nombreDelDia = "Martes";
    break;
  case 3:
    nombreDelDia = "Miércoles";
    break;
  case 4:
    nombreDelDia = "Jueves";
    break;
  case 5:
    nombreDelDia = "Viernes";
    break;
  case 6:
    nombreDelDia = "Sábado";
    break;
  case 7:
    nombreDelDia = "Domingo";
    break;
  default:
    nombreDelDia = "Número inválido de día";
}

console.log(`El número ${numeroDeDia} corresponde a ${nombreDelDia}.`);
