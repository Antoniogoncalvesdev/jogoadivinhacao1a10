const numeroSecreto = parseInt(Math.random() * 11)

for(i = 1; i <= 3; i++){

    alert(`Chance ${i} de 3`)
    var escolha = parseInt(prompt("Escolha um número: "))
    if(escolha  === numeroSecreto){
        alert("Acertou")
        break
        }
        else if(i === 3){
            alert("Game Over")
        }
        else if(escolha > numeroSecreto){
            alert("Maior que o numero secreto. Tente novamente!")
        }
        else if(escolha < numeroSecreto){
            alert("Menor que o numero secreto. Tente novamente!")
        }
}