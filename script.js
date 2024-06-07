//DOM
var nome = document.querySelector("#name");
var level = document.querySelector("#level");
var Força = document.querySelector("#Força");
var Power = document.querySelector("#Power");
var Agilidade = document.querySelector("#Agilidade")
var Armadura = document.querySelector("#Defesa")
var Defesa = document.querySelector("#Defesa")
var força_float = Força.value * 3
level.addEventListener("change",function(){
   if(level.value <= 5){
    nome.value = "INICIANTE";
   }
 if(level.value > 5){
    nome.value= "VETERANO";
}
atualizar();
} )
Força.addEventListener("change", function(){
    atualizar();
})

console.log(força_float);
function atualizar(){
    Power.value = (força_float - 10)/2 + level.value/2;
}
console.log(Defesa.value)

//valores de Agilidade e Armadura
Agilidade_float = Agilidade.value
Armadura_float = Armadura.value
Armadura.addEventListener("change", function(){Defesa.value == Agilidade_float + Armadura_float});
Agilidade.addEventListener("change", function(){Defesa.value == Agilidade_float + Armadura_float});