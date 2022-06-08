// Helpers / Utils - funciones que no son parte de la logica principal
//pero son necesarias para los calculos
function esPar(numero){
    // if(numero % 2 === 0){
    //     return true;
    // } else {
    //     return false;
    // }
    //forma resumida
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista; 
}

//Medina General
const salarios = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosSorted = salarios.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB
    }
);

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const mediana1 = lista[mitad -1];
        const mediana2 = lista[mitad];

        const mediana = calcularMediaAritmetica([mediana1, mediana2]);
        return mediana;
    } else {
        const mediana = lista[mitad];
        return mediana;
    }
}

const medianaGeneral = medianaSalarios(salariosSorted)

//Mediana Top 10%
const spliceStart = (salariosSorted.length * 90) / 100;
const spliceCount = salariosSorted.length - spliceStart;

//metodo splice() - separa una parte del array y crea uno nuevo
const salariosTop10 = salariosSorted.splice(spliceStart, spliceCount);


const medianaTop10 = medianaSalarios(salariosTop10);

//prueba del codigo
console.log(
  medianaGeneral,
  medianaTop10  
);