'use strict';

// Ez a függvény deklarációs módszer.

/*function Osszead(a, b) {
    return a + b;
}

let eredmeny = Osszead(123, 21);

document.getElementById('kiir').innerText = eredmeny;

document.getElementById('kiir').innerText = eredmeny;*/

/*console.log(eredmeny);
console.log(Osszead(-96,485));*/

/*function Osszead(){
    let elso = window.prompt("Kérem az első számot: ", 10);
    let második = window.prompt("Kérem a második számot: ", 20);
    //console.log('Az eredmény: ${+elso + +masodik}');
    console.log('Az eredmény: ${Number(elso) + Number(masodik)}');
}
Osszead();*/

/*ehesvagy();

function ehesvagy(){
    let valassz = window.confirm('Éhes vagy e?');
    if (valassz) {
        console.log('Akkor menj el kajálni!');
    } else {
        console.log('Egészségedre');
    } 
}
ehesvagy(); */

// Ez pedig a függvény literál módszer

/*let Osszead = function(a, b) {
    return a + b;
};

console.log(Osszead(123, 586)); */

/*let EhesVagy = function(){
    if (window.confirm('Éhes vagy-e?')) {
        console.log("Menj el kajálni");
    } else {
        console.log('Egészségedre!');
    }
};

EhesVagy();*/

// Arrow function (nyíl függvény)

//Függvény literál

let Osszead = function(a, b){
    return a + b;
};

//Arrow function

let Osszead = (a, b) => a + b;

console.log(Osszead(142, 42));