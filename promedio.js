const lista1 = [100, 200, 300, 500];

const calcularPromedio = (lista) => {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return (valorAcumulado = valorAcumulado + nuevoElemento);
  });
  const promedio = sumaLista / lista.length;
  return promedio;
};

// calcularPromedio(lista1);
