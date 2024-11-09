numeros = [2,3,4,5,6,7,8,9,10]

nroDivisores = (item) => { 
    // Define uma função arrow que recebe um número (item).
    let ndiv = 0
    for(let divisor=1; divisor<=item; divisor++){
        if((item%divisor)==0){ 
            // Verifica se item é divisível por divisor
            ndiv++
            // Incrementa o contador se item for divisível.
        } 
    // Loop que vai de 1 até o item.   
    }
    return ndiv
    // Retorna o número total de divisores de item.
}

numeros
    .filter((nro) => nroDivisores(nro)==2)  // Função callback que verifica se o número é primo.
    // Filtra os números que têm exatamente dois divisores (ou seja, números primos).
    .map((item) => {return{x:item, par:(item%2)==0}})
    // Cria um novo array de objetos com os números e uma propriedade que indica se são pares.]
    // Cada objeto tem duas propriedades: x (o número) e par (booleano indicando se é par).
    .forEach((obj) => console.log(obj.x + ' É par? ' + obj.par))
    // Itera sobre cada objeto no array e imprime se o número é par.

    // 2 É par? true
    // 3 É par? false
    // 5 É par? false
    // 7 É par? false

