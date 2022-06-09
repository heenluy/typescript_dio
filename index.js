"use strict";
class Sum {
    constructor() {
        this.firsInput = document.getElementById("first");
        this.secondInput = document.getElementById("second");
        this.buttonInput = document.getElementById("myButton");
        this.response = document.getElementById("response");
    }
    listener() {
        if (this.buttonInput) {
            this.buttonInput.addEventListener("click", () => {
                if (this.firsInput && this.secondInput) {
                    console.log('Response: ', this.calc(Number(this.firsInput.value), Number(this.secondInput.value)));
                    this.response.innerHTML = this.calc(Number(this.firsInput.value), Number(this.secondInput.value)).toString();
                }
            });
        }
    }
    calc(first, second) {
        return first + second;
    }
    start() {
        this.listener();
    }
}
let exec = new Sum().start();
// Resolução dos desafios
console.log("------- Desafio 1 -------");
console.log("interface Employe" + " {\n" +
    " code: number;\n" +
    " name: string\n" +
    "}");
let employee1 = { code: 1, name: "Henrique" };
console.log(employee1);
console.log("------- Desafio 2 -------");
var Jobs;
(function (Jobs) {
    Jobs[Jobs["DESENVOLVEDOR"] = 0] = "DESENVOLVEDOR";
    Jobs[Jobs["CONSULTOR"] = 1] = "CONSULTOR";
    Jobs[Jobs["JOGADOR"] = 2] = "JOGADOR";
})(Jobs || (Jobs = {}));
console.log("enum Jobs" + " {\n" +
    " Desenvolvedor,\n" +
    " Consultor,\n" +
    " Jogador,\n" +
    "}");
let person1 = { name: "Henrique", age: 23, job: Jobs.JOGADOR };
console.log(person1);
