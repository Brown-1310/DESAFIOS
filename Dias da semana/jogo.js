var resposta = prompt ("Que dia é hoje:")

//Cria arrays com os dias da semana 
var diasUteis = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
var fimSemana = ["Sábado", "Domingo"]

//Verifica se 'resposta' está contido nas arrays
if (fimSemana.includes(resposta)) {

    alert("Bom final de semana")

} else if (diasUteis.includes(resposta)){
    alert("Boa Semana")


} else {

    alert("Se burro mah")

}
// Retorna para a página anterior no final da execução
history.go(-1)




