// Codigo del Cuadrado
console.group('Cuadrados');
// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');
function perimetroCuadrado(lado) {
   return lado * 4;
}
// console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + ' cm');
function areaCuadrado(lado){
   return lado * lado;
} 
// console.log('El area del cuadrado es: ' + areaCuadrado + ' cm2');
console.groupEnd();

// Codigo del Triangulo
console.group('Triangulos');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log('Los lados del triangulos miden: ' + ladoTriangulo1 + ' cm, ' + ladoTriangulo2 + ' cm, ' + baseTriangulo + ' cm, y la altura del triangulo mide ' + alturaTriangulo + ' cm');
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log('El perimetro del triangulo es: ' + perimetroTriangulo + ' cm');
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log('El area del triangulo es: ' + areaTriangulo + ' cm2');
console.groupEnd();

// Codigo del Circulo
console.group('Circulos');
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;
// console.log('El radio del circulo es: ' + radioCirculo + ' cm');
function diametroCirculo(radio){
    return radio * 2;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
// console.log('El perimetro del circulo es: ' + perimetroCirculo + ' cm');
function areaCirculo (radio) {
    return (radio * radio) * pi;
}
// console.log('El area del circulo es: ' + areaCirculo + ' cm2');
console.groupEnd();