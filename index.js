// Inverter String: Crie uma função que receba uma string e retorne a string invertida. 
// Por exemplo, "javascript" se torna "tpircsavaj"

function reverse() {

    let palavra = document.getElementById('inputtexto').value

    palavra = palavra.split('').reverse().join('')

    document.getElementById('resultado').value = palavra
}


