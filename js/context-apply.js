
//"use strict"


function getName() {
    console.log("getName called");
    return this.name;
}

// name get into global variable
name = "Global";

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

console.log(getName.apply(undefined));

console.log(getName.apply(null));
