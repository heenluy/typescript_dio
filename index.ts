class Sum {
    firsInput = document.getElementById("first") as HTMLInputElement;
    secondInput = document.getElementById("second") as HTMLInputElement;
    buttonInput = document.getElementById("myButton") as HTMLButtonElement;
    response = document.getElementById("response") as HTMLElement;

    private listener(): void {
        if(this.buttonInput) {
            this.buttonInput.addEventListener("click", () => {
                    if(this.firsInput && this.secondInput) {
                        console.log(
                            'Response: ',
                            this.calc(Number(this.firsInput.value),Number(this.secondInput.value)
                        ));

                        this.response.innerHTML = this.calc(Number(this.firsInput.value),Number(this.secondInput.value)).toString();
                    }
            });
        }

    }

    private calc(first: number, second: number): number {
        return first + second;
    }

    public start(): void {
        this.listener();
    }

}

let exec = new Sum().start();

// Resolução dos desafios
console.log("------- Desafio 1 -------");
interface Employee {
    code: number;
    name: string;
}

console.log(
    "interface Employe" + " {\n" +
    " code: number;\n" +
    " name: string\n" +
    "}"
);

let employee1: Employee = {code: 1, name: "Henrique"};
console.log(employee1);

console.log("------- Desafio 2 -------");
enum Jobs {
    DESENVOLVEDOR,
    CONSULTOR,
    JOGADOR
}

interface Person {
    name: string;
    age: number;
    job: Jobs;
}

console.log(
    "enum Jobs" + " {\n" +
    " Desenvolvedor,\n" +
    " Consultor,\n" +
    " Jogador,\n" +
    "}"
);

let person1: Person = {name: "Henrique", age: 23, job: Jobs.JOGADOR};
console.log(person1);
