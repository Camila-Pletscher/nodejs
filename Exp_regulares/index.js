// const re = /^[a-z]./

// console.log(re.test("holA "));

//contraseña simple numeros y letras
//contraseña media numeros, letras y al menos una mayuscula
//contraseña alta numeros, letras, al menos una mayuscula y caracter especial

const password = "eL que quieran"

const re1 = /^(?=.*[a-z])(?=.*\d)/;
const re2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
const re3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])/;

console.log(re1.test(password)) 
console.log(re2.test(password))
console.log(re3.test(password))
