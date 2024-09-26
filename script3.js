let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let cartas = parseFloat(prompt('Quantas cartas voce quer virar?'))

for (let i = 1; i <= cartas; i++) {


    let num = nums[Math.floor(Math.random() * 10)]
    let naipe = Math.floor(Math.random() * 4)
    
    if(naipe == 0){
        naipe = "copas"
    }else if (naipe == 1){
        naipe = "paus"
    }else if (naipe == 2){
        naipe = "ouro"
    }else{
        naipe = "espadas"
    }

    
    console.log(i + ' - ' + num + ' de ' + naipe)
}
