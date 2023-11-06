
// Uso adecuado de let y scope para actualizar una variable

// https://www.w3schools.com/react/react_es6_variables.asp

let puedesPasar = true;
edad = 17;

if (edad < 18) {
    let puedesPasar = false;
}

console.log(puedesPasar) // false

// PREGUNTA: ¿Por qué no se actualiza correctamente la variable 'puedesPasar'? Porque se está intentando declarar dos veces, dentro de la función debería ponerse sin el let.