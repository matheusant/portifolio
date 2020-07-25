document.querySelector(".hamburguer").addEventListener("click", () =>
   document.querySelector(".container").classList.toggle("show-menu")
);


document.querySelector("#mov").addEventListener("change", atualizarPreco)
document.querySelector("#mat").addEventListener("change", atualizarPreco)
document.querySelector("#mad").addEventListener("change", atualizarPreco)
document.querySelector("#branco").addEventListener("change", atualizarPreco)
document.querySelector("#preto").addEventListener("change", atualizarPreco)
document.querySelector("#cor-madeira").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function(){
   const prazo = document.querySelector("#prazo").value
   document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
   atualizarPreco()
})

function atualizarPreco(){
   const mov = parseFloat(document.querySelector("#mov").value)
   let material = parseFloat( document.querySelector("#mat").value)
   const mad = document.querySelector("#mad").checked
   const corBranca = document.querySelector("#branco").checked
   const corPreta = document.querySelector("#preto").checked
   const corMadeira = document.querySelector("#cor-madeira").checked
   const prazo = document.querySelector("#prazo").value

   let preco = mov + material
   if (mad) preco *= 1.45
   if (corBranca) preco += 80
   if (corPreta)  preco += 100
   if (corMadeira)preco += 0
   let taxaUrgencia = 1 - prazo*0.2
   preco *= 1 + taxaUrgencia 

   document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}


