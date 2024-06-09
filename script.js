//DOM
var nome = document.querySelector("#name");
var level = document.querySelector("#level");
var Força = document.querySelector("#Força");
var Power = document.querySelector("#Power");
var Agilidade = document.querySelector("#Agilidade")
var Armadura = document.querySelector("#Armadura")
var Defesa = document.querySelector("#Defesa")
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

function atualizar(){
    let force = parseInt(Força.value,10)
    let lvl = parseInt(level.value,10)
    Power.value = (force - 10)/2 + lvl/2;
}
//valores de Agilidade e Armadura
Armadura.addEventListener("change", Update)
Agilidade.addEventListener("change", Update)

function Update(){
    let arma = parseInt(Armadura.value,10)
    let agi = parseInt(Agilidade.value,10)
    var defense = (arma + agi);
    Defesa.value = defense;
    console.log(defense);
}
