// Primjer 1
/*
var foo = "foo";

function bob() {
  var foo = "foo2";
  console.log(foo); // trazi ono foo iz najblizeg Scope-a !
}

bob();
console.log(foo);
*/
// Primjer 2
// IIFE
/*
(function bob() {
  // ova funkcija ce odma da se pozove
  var foo = "foo2";
  console.log(foo);
})();

console.log(foo);*/
var elem = 10;
// Primjer 3
var a = (function IIFE(bar) {
  // ova funkcija ce odma da se pozove
  console.log(bar);
  var foo = "foo2";
  console.log(foo);
  console.log(bar);
  return foo
  
})(elem);

var car1 = { model:"Ford", year:2000 };
var Car = (function(params){
  function drive(){
    return "drive " + params.model
  }
  function stop(){
    return "stop driving  " + params.model
  }
  return {
    drive,
    stop
  }
})(car1)

console.log(Car.drive());
console.log(Car.stop());


