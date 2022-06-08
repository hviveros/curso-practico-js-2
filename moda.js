// const lista1 = [
//     1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1
// ];

function calcularModa(lista){
    //se creara un objeto por cada elemento que se repita

    const listaCount = {};

    //metodo map() - recorre un array y realiza la accion que le determinemos
    lista.map(
        function(elemento) {
            if (listaCount[elemento]) {
                // listaCount[elemento] = listaCount[elemento] + 1;  
                // realiza lo mismo que arriba          
                listaCount[elemento] += 1;            
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    //volver a convertir el objeto en un array con Object.entries()
    //metodo sort() - ordena un array de acuerdo a la funcion que se le aplica
    const listaArray = Object.entries(listaCount).sort(
        //sort() recibe 2 valores como argumento
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1]; 

    return moda;
}