const lista1 = [4, 2, 5, 1, 3, 31, 54, 65, 158, 458, 787, 5, 65, 4, 9, 854];

const esPar = (numero) => {
  return numero % 2 === 0 ? true : false;
};

const mitadDeNumeroEnEntero = (numero) => Math.floor(numero / 2);

const calcularPromedio = (valores) => {
  const sumaValores = valores.reduce((valorAcumulado = 0, nuevoElemento) => {
    return (valorAcumulado = valorAcumulado + nuevoElemento);
  });
  return sumaValores / valores.length;
};

const mediana = (lista) => {
  lista = lista.sort((a, b) => a - b);
  if (esPar(lista.length)) {
    return calcularPromedio([lista[mitadDeNumeroEnEntero(lista.length) - 1], lista[mitadDeNumeroEnEntero(lista.length)]]);
  } else {
    return lista[mitadDeNumeroEnEntero(lista.length)];
  }
};

mediana(lista1);
