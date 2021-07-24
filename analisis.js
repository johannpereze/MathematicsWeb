const salariosCol = colombia.map((position) => position.salary); //position es igual a colombia[0] en la primera iteración

//  const orderMinToMax = salariosCol.map((salarios)=>{
//      salarios ? salarios =
//  })

//Ordenarlos de menor a mayor

const salariosColOrdenados = salariosCol.sort((a, b) => a - b);

const esPar = (array) => array.length % 2 === 0;

const mitadDelArray = (array) => Math.floor(array.length / 2);

const promedio = (array) => {
  const suma = array.reduce((a, b) => a + b);
  return suma / array.length;
};

const medianaSalarios = (array) => {
  if (esPar(array)) {
    return promedio([
      array[mitadDelArray(array) - 1],
      array[mitadDelArray(array)],
    ]);
  } else {
    return array[mitadDelArray(array)];
  }
};

// const top10Salarios = (array) => {
//   for (let i = array.length - 10; i < array.length; i++) {
//       if

//   }
//   } //si el index es mayor a lenght-10 lo metemos al nuevo array

// const top10 = (array, firstOfLast10PercentIndex) => {
//   const top10 = [];
//   for (let i = firstOfLast10PercentIndex; i < array.length; i++) {
//     top10.push(array[i]);
//   }
//   return top10;
// };

// const top10Salarios = (array) => {
//   const firstOfLast10PercentIndex = Math.floor(array.length * 0.9);
//   return top10(array, firstOfLast10PercentIndex);
// };

// console.log(medianaSalarios(top10Salarios(salariosColOrdenados)));

const top10Salarios = (array) => {
  const firstOfLast10PercentIndex = Math.floor(array.length * 0.9);
  return array.splice(firstOfLast10PercentIndex);
};

console.log(medianaSalarios(top10Salarios(salariosColOrdenados)));
