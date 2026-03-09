let entregas = JSON.parse(localStorage.getItem("entregas")) || []
let combustivel = Number(localStorage.getItem("combustivel")) || 0
let km = Number(localStorage.getItem("km")) || 0

function salvar(){

localStorage.setItem("entregas", JSON.stringify(entregas))
localStorage.setItem("combustivel", combustivel)
localStorage.setItem("km", km)

}

function addEntrega(){

let valor = Number(document.getElementById("valorEntrega").value)

if(!valor) return

entregas.push(valor)

salvar()

render()

}

function addCombustivel(){

let valor = Number(document.getElementById("valorCombustivel").value)

combustivel += valor

salvar()

render()

}

function addKM(){

km = Number(document.getElementById("kmRodado").value)

salvar()

render()

}

function render(){

let total = entregas.reduce((a,b)=>a+b,0)

let media = total/entregas.length || 0

let lucro = total - combustivel

let valorKM = total/km || 0

if(document.getElementById("ganhos"))
document.getElementById("ganhos").innerText = total.toFixed(2)

if(document.getElementById("entregas"))
document.getElementById("entregas").innerText = entregas.length

if(document.getElementById("media"))
document.getElementById("media").innerText = media.toFixed(2)

if(document.getElementById("lucro"))
document.getElementById("lucro").innerText = lucro.toFixed(2)

if(document.getElementById("valorKM"))
document.getElementById("valorKM").innerText = valorKM.toFixed(2)

if(document.getElementById("combTotal"))
document.getElementById("combTotal").innerText = combustivel.toFixed(2)

if(document.getElementById("relTotal"))
document.getElementById("relTotal").innerText = total.toFixed(2)

if(document.getElementById("relComb"))
document.getElementById("relComb").innerText = combustivel.toFixed(2)

if(document.getElementById("relLucro"))
document.getElementById("relLucro").innerText = lucro.toFixed(2)

}

window.onload = render
