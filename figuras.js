const PI = Math.PI;
let ladoCuadrado = document.getElementById("inputCuadrado").value;

const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado * 4;

const areaCuadrado = (ladoCuadrado) => ladoCuadrado * ladoCuadrado;

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura) / 2;

const diametroCirculo = (radio) => radio * 2;

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

const areaCirculo = (radio) => PI * (radio * radio);

const calcularPerimetroCuadrado = () => {
  const input = document.getElementById("inputCuadrado").value;
  const perimetro = perimetroCuadrado(input);
  alert(perimetro);
};
const calcularAreaCuadrado = () => {
  const input = document.getElementById("inputCuadrado").value;
  const area = areaCuadrado(input);
  alert(area);
};

document.getElementById("perimetroCuadrado").onclick =
  calcularPerimetroCuadrado;
document.getElementById("areaCuadrado").onclick = calcularAreaCuadrado;

//Solución del reto:

// const calcularAlturaIsosceles = (lado1, lado2, lado3) => {
//   //validar que dos lados sean iguales
//   if (lado1 === lado2 && lado1 === lado3) {
//     alert("Es un triángolo Equilatero");
//   } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//     if (lado1 === lado2) {
//       var a = lado1;
//       var b = lado3;
//     } else if (lado1 === lado3) {
//       var a = lado1;
//       var b = lado2;
//     } else {
//       var a = lado2;
//       var b = lado1;
//     }
//     var altura = Math.sqrt(a * a - (b * b) / 4);
//   } else {
//     alert("No es un tríangulo isósceles");
//   }

//   return altura;
// };

// calcularAlturaIsosceles(4, 4, 7);
