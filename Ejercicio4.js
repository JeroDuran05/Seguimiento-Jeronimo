let password = "P@ssw0rd";

let longitudValida = password.length >= 8;
let contieneMayusculas = /[A-Z]/.test(password);
let contieneMinusculas = /[a-z]/.test(password);
let contieneDigitos = /\d/.test(password);
let contieneCaracterEspecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

let esContraseñaFuerte =
  longitudValida &&
  contieneMayusculas &&
  contieneMinusculas &&
  contieneDigitos &&
  contieneCaracterEspecial;

console.log(`Contraseña: ${password}`);
console.log(`¿Es una contraseña fuerte? ${esContraseñaFuerte}`);
