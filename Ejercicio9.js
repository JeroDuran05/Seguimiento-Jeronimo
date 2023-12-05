class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  let persona1 = new Persona('Juan', 25);
  let persona2 = new Persona('María', 30);
  
  persona1.saludar(); 
  persona2.saludar();
  