// const precioOriginal = 120;
// const descuento = 18;

const precioConDescuento = () => {
  precioOriginal = parseInt(document.getElementById("precio").value);
  descuento = parseInt(document.getElementById("descuento").value);
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioFinal = (precioOriginal * porcentajePrecioConDescuento) / 100;
  document.getElementById("resultado").innerHTML = precioFinal;
  console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioFinal,
  });
};

// precioConDescuento(10000, 15);

document.getElementById("calcular").onclick = precioConDescuento;
