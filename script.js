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