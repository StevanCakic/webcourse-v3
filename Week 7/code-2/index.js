// Primjer 1
/*
function bar() {
  var foo = "baz";
}

function baz(foo) {
  foo = "bam";
  bam = "yay";
}

baz();

console.log(foo);
console.log(bam);*/

// sta ako dodamo "use strict";
// "use strict"; //na nivou bloka ! ne mora na vrhu fajla

// Primjer 2

var foo = "bar";
function bar(){
  
  var foo = "baz";

  function baz(foo){
    var foo = "bam" + foo;
    console.log(foo);
    var bam = "yay";
    return bam;
  }
  var result = baz("abc");
  console.log(result);
  baz();
  return {
    baz
  }
}


bar();
console.log(foo);
//console.log(baz);
//baz(); //Error

// Primjer 3

const foo2 = function bar() {
  
  var foo = "baz";

  function baz(foo){
    foo = bar;
    console.log(foo);
  }
  baz();
}
console.log(foo2);
foo2();
// bar(); //Error
