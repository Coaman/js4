console.log(x);

let age;
console.log(age, age + 3); //undefined, nan - not a number

age = null;
console.log(age, age + 3);


x = 5;
y = 7;
x = x + y;
console.log(x, y); // x=12, y=7

x *= 5; // x = x * 5 -> x=60
y -= 2; // y = y - 2 -> y=5

console.log(x, y);

x = 4.3;
y = -8;
x++; //x=x+1
y--; //y=y-1

console.log(x, y);

console.log(5 % 2);
console.log(77 % 6);  // x % y kao rezultat daje (0,1,3...,y-1)

console.log(y ** 2); 

z = x + y * z % z ** ;