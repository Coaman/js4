console.log("test");


if(3 < 5){
    console.log(" Tri je manje od pet");
}

if(3 < -5){
    console.log("Tri je manje od pet");
}

let a = 10;
let b = 50;
if(a < b){
    console.log(`${a} je manja od ${b}`);
}

let x = 5;
let y = "5";
if(x == y){
    console.log(`${x} i ${y} je jednako`);
}

if(x === y){
    console.log(`${x} i ${y} su jednake i po tipu i po vrednosti`);
}

// if else:

if(a <= b){
    console.log(`${a} je manje ili jednako ${b}`);
}
else {
    console.log(`${a} nije manje od ${b}`);
}

// da li su dve vrednosti jednake:

let v1 = 5;
let v2 = 6;
// 1. nacic:
if(v1 == v2){
    console.log('jednake su');
}
else {
    console.log('nisu jednake');
}

// 2. nacin

if(v1 != v2){
    console.log('nisu');
}
else {
    console.log('jednake su')
}

// Vezba:

// Prvi zadatak:

let s, d;
s = 4;
d = 3;
if(s > d){
    console.log(`${s} je vece od ${d}`);
}
else {
    console.log(`${d} je vece od ${s}`);
}

//Drugi zadatak:

let c = 23;

if(c >= 0){
    console.log(`temperatura je ${c}`);
}
else {
    console.log('temperatura je minusna');
}

// Treci zadatak: (15 slajd)

let divPol = document.getElementById('pol');

let pol = 'm';
if(pol == 'm'){                 
    // muski pol 
    divPol.innerHTML = `<img src="slike/1.png">`
}
else {
    // zenski
    divPol.innerHTML = `<img src="slike/woman.png">`
}



// cetvrti zadatak:

let datum = new Date();
let n = datum.getHours();
let m = datum.getMinutes();

console.log(n, m);

if(n <= 12){
    console.log('sadda je jutro');
}
else {
    console.log('sada je podne');
}

// peti zadatak:
 let godRodj = 1994;
 let godTren = datum.getFullYear();
 let godOsobe = godTren - godRodj;

 if(godOsobe >= 18){
     console.log('Osoba punoletna');
 }
 else {
    console.log('Osoba maloletna');
}
 
let br = 5;
if(br <= 10){
    console.log('broj je prva deset');
} else if(br <= 20){
    console.log('broj je druga deset');
} else {
    console.log('veci od 30');
}

//6 zadatak:

let b1 = 3;
let b2 = 5;
let b3 = 7;

// predpostavka

let najveci = b1;
if(b2 > najveci){
    najveci = b2;
}
if(b3 > najveci){
    najveci = b3;
}

console.log(`najveci je: ${najveci}`);

// 7 zadatak:

let poena;
poena = 91;
if(poena <= 50){
    console.log('Pao ispit');
}
else if(poena <= 60){
    console.log('ocena je 6');
}
else if(poena <= 70){
    console.log('ocena je 7');
}
else if(poena <= 80){
    console.log('ocena je 8');
}
else if(poena <= 90){
    console.log('ocena je 9');
}
else{
    console.log('ocena je 10');
}

// 8 Zadatak:

let a1 = datum.getDay();
let dan;
if(dan == 0){
    console.log('nedelja');
}
if(dan == 1){
    console.log('ponedeljak');
}
if(dan == 2){
    console.log('utorak');
}
if(dan == 3){
    console.log('sreda');
}
if(dan == 4){
    console.log('cetvrtak');
}
if(dan = 5){
    console.log('petak');
}
else{
    console.log('subota');
}

// 9 zadatak:

let sati;
sati = datum.getHours();
if(sati > 12){
    console.log('Dobro jutro');
}
else if(sati < 18){
    console.log('Dobar dan');
}
else{
    console.log('Dobro vece');
}

//10 zadatak:

let dd1 = 3;
let m1 = 4;
let g1 = 1956;

let dd2 = 3;
let m2 = 4;
let g2 = 1956;

if(g1 < g2){
    console.log(`${dd1},${m1},${g1}`);
} else if(g2 < g1){
    console.log(`${dd2},${m2},${g2}`);
} else{
    if(m1 < m2){
        console.log(`${dd1},${m1},${g1}`);
    } else if(m2 < m1){
        console.log(`${dd2},${m2},${g2}`);
    } else {
        if(dd1 < dd2){
            console.log(`${dd1},${m1},${g1}`);
        } else if(dd2 < dd1){
            console.log(`${dd2},${m2},${g2}`);
        } else{
            console.log('they are equal:');
        }
    }
}