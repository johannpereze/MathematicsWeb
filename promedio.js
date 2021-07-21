const lista1 = [100, 200, 300, 500];

const calcularPromedio = (lista) => {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return (valorAcumulado = valorAcumulado + nuevoElemento);
  });
  const promedio = sumaLista / lista.length;
  return promedio;
};

// calcularPromedio(lista1);

//video de shacha

const productos = [
  { id: "ge5yt54", nombre: "camiseta", precio: 500 },
  { id: "gf435g5", nombre: "zapatillas", precio: 2000 },
  { id: "54yh545", nombre: "pantalón", precio: 1500 },
];

const productosBaratos = productos.filter(productos => productos.precio < 1000);


console.log(productosBaratos);