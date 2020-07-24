
// prvi zadatak:
let x, y, z;
x = 10;
y = 48;

z = x * 60 + y;
console.log(z);

// drugi zadatak:

z = 200;



y = Math.floor(z / 60);

x = z % 60;

console.log(y);
console.log(x);

// treci zadatak:

x = 20;
y = 50;
z = y - x;
console.log(z);

// cetvrti zadatak:


let datum = new Date();
let s = datum.getHours();
let m = datum.getMinutes();
console.log(s, m);
z = s * 60 + m;
console.log(z);

// peti zadatak:

let god = datum.getFullYear(); //2020god

let mes = datum.getMonth();
mes++;
//let dat = datum.Date();
let dan = datum.getDay();// 0-nedelja.. 6-subota
//console.log(god, mes, dat, dan);
//console.log(`${dat}.${mes}.${god}`);
console.log(`${god}/${mes}/${dan}`);


//sesti zadatak;

let euro, din, konverzija;
euro = 250;
konverzija = 117.59;
din = euro * konverzija;
console.log(din);

din = 54345
euro = din / konverzija;
console.log(euro);


//sedmi zadatak:

let kdolar, dolar;

kdolar = 101.52;
dolar = 300;

euro = (dolar * kdolar) / konverzija;

console.log(euro);

dolar = (euro / konverzija) * kdolar;
console.log(dolar);

// osmi zadatak:

let cel, far;
cel = 24;
far = cel * 1.8 + 32;
console.log(far);

cel = (far - 32) / 1.8;
console.log(cel);

let k;

k = cel + 273.15;
console.log(k);


cel = k - 273.15;
console.log(cel);