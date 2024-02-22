const alface = document.getElementById('alface')
const tomate = document.getElementById('tomate')
const pimentao = document.getElementById('pimentao')
const cebola = document.getElementById('cebola')
const batata = document.getElementById('batata')
const cenoura = document.getElementById('cenoura')
const remover = document.getElementById('remover')
const finalizar = document.getElementById('finalizar')

const alface_lista = document.getElementById('alface-lista')
const tomate_lista = document.getElementById('tomate-lista')
const pimentao_lista = document.getElementById('pimentao-lista')
const cebola_lista = document.getElementById('cebola-lista')
const batata_lista = document.getElementById('batata-lista')
const cenoura_lista = document.getElementById('cenoura-lista')
const quantidade_lista = document.getElementById('quantidade-lista')
const total_lista = document.getElementById('total-lista')

let contador_alface = 0
let contador_tomate = 0
let contador_pimentao = 0
let contador_cebola = 0
let contador_batata = 0
let contador_cenoura = 0
let quant = 0

alface.addEventListener("click", ()=>{
    quantidade = window.prompt('Quantos?')
    contador_alface+=parseInt(quantidade)
    quant+=parseInt(quantidade)
    quantidade_lista.innerText = "Quantidade de itens: " + quant
    alface_lista.innerText = "Alface: " + contador_alface
})
tomate.addEventListener("click", ()=>{
    quantidade = window.prompt('Quantos?')
    contador_tomate+=parseInt(quantidade)
    quant+=parseInt(quantidade)
    quantidade_lista.innerText = "Quantidade de itens: " + quant
    tomate_lista.innerText = "Tomate: " + contador_tomate
})
pimentao.addEventListener("click", ()=>{
    quantidade = window.prompt('Quantos?')
    contador_pimentao+=parseInt(quantidade)
    quant+=parseInt(quantidade)
    quantidade_lista.innerText = "Quantidade de itens: " + quant
    pimentao_lista.innerText = "Pimentão: " + contador_pimentao
})
cebola.addEventListener("click", ()=>{
    quantidade = window.prompt('Quantos?')
    contador_cebola+=parseInt(quantidade)
    quant+=parseInt(quantidade)
    quantidade_lista.innerText = "Quantidade de itens: " + quant
    cebola_lista.innerText = "Cebola: " + contador_cebola
})
batata.addEventListener("click", ()=>{
    quantidade = window.prompt('Quantos')
    contador_batata+=parseInt(quantidade)
    quant+=parseInt(quantidade)
    quantidade_lista.innerText = "Quantidade de itens: " + quant
    batata_lista.innerText = "Batata: " + contador_batata
})
cenoura.addEventListener("click", ()=>{
    quantidade = window.prompt('Quantos?')
    contador_cenoura+=parseInt(quantidade)
    quant+=parseInt(quantidade)
    quantidade_lista.innerText = "Quantidade de itens: " + quant
    cenoura_lista.innerText = "Cenoura: " + contador_cenoura
})
remover.addEventListener("click", ()=>{
    const item = window.prompt(`Qual item deseja remover?
    [1] alface
    [2] tomate
    [3] pimentão
    [4] cebola
    [5] batata
    [6] cenoura
    [0] sair
    `)
    if(item==1){
        quantidade = window.prompt('Quantos?')
        if(contador_alface-parseInt(quantidade)>=0){
            contador_alface = contador_alface-parseInt(quantidade)
            quant = quant - parseInt(quantidade)
            quantidade_lista.innerText = "Quantidade de itens: " + quant
            alface_lista.innerText = "Alface: " + contador_alface
        }else{
            while(contador_alface-parseInt(quantidade)<0){
                quantidade = window.prompt('Digite um valor válido')
            }
        }      
    }else if(item==2){
        quantidade = window.prompt('Quantos?')
        if(contador_tomate-parseInt(quantidade)>=0){
            contador_tomate = contador_tomate-parseInt(quantidade)
            quant = quant - parseInt(quantidade)
            quantidade_lista.innerText = "Quantidade de itens: " + quant
            tomate_lista.innerText = "Tomate: " + contador_tomate
        }else{
            while(contador_tomate-parseInt(quantidade)<0){
                quantidade = window.prompt('Digite um valor válido')
            }
        }
    }else if(item==3){
        quantidade = window.prompt('Quantos?')
        if(contador_pimentao-parseInt(quantidade)>=0){
            contador_pimentao = contador_pimentao-parseInt(quantidade)
            quant = quant - parseInt(quantidade)
            quantidade_lista.innerText = "Quantidade de itens: " + quant
            pimencontador_pimentao_lista.innerText = "Pimentão: " + contador_pimentao
        }else{
            while(contador_pimentao-parseInt(quantidade)<0){
                quantidade = window.prompt('Digite um valor válido')
            }
        }
    }else if(item==4){
        quantidade = window.prompt('Quantos?')
        if(contador_cebola-parseInt(quantidade)>=0){
            contador_cebola = contador_cebola-parseInt(quantidade)
            quant = quant - parseInt(quantidade)
            quantidade_lista.innerText = "Quantidade de itens: " + quant
            cebola_lista.innerText = "Cebola: " + contador_cebola
        }else{
            while(contador_cebola-parseInt(quantidade)<0){
                quantidade = window.prompt('Digite um valor válido')
            }
        }
    }else if(item==5){
        quantidade = window.prompt('Quantos?')
        if(contador_batata-parseInt(quantidade)>=0){
            contador_batata = contador_batata-parseInt(quantidade)
            quant = quant - parseInt(quantidade)
            quantidade_lista.innerText = "Quantidade de itens: " + quant
            batata_lista.innerText = "Batata: " + contador_batata
        }else{
            while(contador_batata-parseInt(quantidade)<0){
                quantidade = window.prompt('Digite um valor válido')
            }
        }
    }else if(item==6){
        quantidade = window.prompt('Quantos?')
        if(contador_cenoura-parseInt(quantidade)>=0){
            contador_cenoura = contador_cenoura-parseInt(quantidade)
            quant = quant - parseInt(quantidade)
            quantidade_lista.innerText = "Quantidade de itens: " + quant
            cenoura_lista.innerText = "Cenoura: " + contador_cenoura
        }else{
            while(contador_cenoura-parseInt(quantidade)<0){
                quantidade = window.prompt('Digite um valor válido')
            }
        }
    }
})