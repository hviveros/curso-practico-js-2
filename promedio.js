// const lista1 = [
//     100, 200, 300, 500
// ];

function calcularMediaAritmetica(lista){

    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    //metodo reduce() - recibe una lista/funcion como argumento
    //suma/multiplica/concatena o procesa todos los elementos a un solo valor 
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista; 

}