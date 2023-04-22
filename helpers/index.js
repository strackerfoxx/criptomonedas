export function comaTres(numero) {
    // Convertir el número en una cadena de texto
    let numeroString = numero.toString();
    
    // Usar una expresión regular para buscar coincidencias de 3 dígitos seguidos
    let expresionRegular = /(\d)(?=(\d{3})+(?!\d))/g;
    
    // Usar la función replace() con la expresión regular y una función de reemplazo
    numeroString = numeroString.replace(expresionRegular, (match, grupo1) => {
      return grupo1 + ",";
    });
    
    // Devolver el número con las comas agregadas
    return numeroString;
}