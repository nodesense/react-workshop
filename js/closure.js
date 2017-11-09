//Closure the scope of id still alive
//even after function executed

function Seq(start) {
    var id = start || 0;
    return function() {
        return id++;
    }
}

let seq1 = Seq(0);
let seq2 = Seq(100);

console.log(seq1()); //prints 0
console.log(seq1()); //prints 1

console.log(seq2()); //prints 101
console.log(seq2()); //prints 102
