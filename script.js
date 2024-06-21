//Av2
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
//Av3
var d4 = document.querySelector("#d4");
var d6 = document.querySelector("#d6");
var d8 = document.querySelector("#d8");
var d10 = document.querySelector("#d10");
var d12 = document.querySelector("#d12");
var d20 = document.querySelector("#d20");
var d100 = document.querySelector("#d100");
var d1000 = document.querySelector("#d1000");

var random_1 = document.querySelector("#Random1");
var random_2 = document.querySelector("#Random2");
var random_3 = document.querySelector("#Random3");
var random_4 = document.querySelector("#Random4");
var random_5 = document.querySelector("#Random5");
var random_6 = document.querySelector("#Random6");
var random_7 = document.querySelector("#Random7");
var random_8 = document.querySelector("#Random8");
function Interact_random(d){
    parseInt(random_1.value,10);
    parseInt(random_2.value,10);
    parseInt(random_3.value,10);
    parseInt(random_4.value,10);
    parseInt(random_5.value,10);
    parseInt(random_6.value,10);
    parseInt(random_7.value,10);
    parseInt(random_8.value,10);
    switch(d){
        case 4:
            random_1.value = Math.floor(Math.random() * 4) + 1
            break
        case 6:
            random_2.value = Math.floor(Math.random() * 6) + 1
            break
        case 8:
            random_3.value = Math.floor(Math.random() * 8) + 1
            break
        case 10:
            random_4.value = Math.floor(Math.random() * 10) + 1
            break
        case 12:
            random_5.value = Math.floor(Math.random() * 12) + 1
            break
        case 20:
            random_6.value = Math.floor(Math.random() * 20) + 1
            break
        case 100:
            random_7.value = Math.floor(Math.random() * 100) + 1
            break
        case 1000:
            random_8.value = Math.floor(Math.random() * 1000)+1
            break
    }
}

