"use strict"

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

function getName() {
    console.log("getName called");
    return this.name;
}

// name get into global variable
global.name = "Global";

//prints Global
console.log(getName());

var obj = {
    name: "Object",
    getName: getName
}

//print Object
console.log(obj.getName());

console.log(getName.apply(obj));

var obj2 = {
    name : "Object 2"
}


console.log(getName.apply(obj2));

//with strict mode, this become undefined in getName
console.log(getName.apply(undefined));

console.log(getName.apply(null));
