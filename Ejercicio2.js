var persona = {
    nombre: "Ana",
    edad: 30,
    esEstudiante: false
  };
  
  var numeros = [1, 2, 3, 4, 5];
  
  console.log("Nombre:", persona.nombre);
  console.log("Edad:", persona.edad);
  
  persona.edad += 1;  
  console.log("Nueva Edad:", persona.edad);
  
  console.log("Primer número:", numeros[0]);
  console.log("Longitud del array:", numeros.length);
  
  console.log("Todos los números:");
  for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
  }
  