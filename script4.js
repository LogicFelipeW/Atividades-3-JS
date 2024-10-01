let lucro = 0
let maiorlucro = 1
let custo = 1000

for(let i = 0; maiorlucro > lucro; i++){
    lucro = ((1800 + 50*i) * (150 -10*i))  -1000

    if(lucro > maiorlucro){
        maiorlucro = lucro
    }
    alert(`O maior lucro é: ${maiorlucro}`)
    alert(`O valor ideal para o ingresso é : ${150-10*i}`)
}