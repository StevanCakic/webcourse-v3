// Primjer 1
var c = {greeting: "Hi", name: "Marko"};
var d;

d = { ... c};
c.greeting = "Hello";
console.log(c);
console.log(d);

let f = {name: "Janko", ...c}
console.log(f);

// Primjer 2
function changeGreeting(obj){
    obj.greeting = "Hola";
}
changeGreeting(d);
console.log(c);
console.log(d);

// Primjer 3
c = {greeting: "howdy"};
console.log(c);
console.log(d);