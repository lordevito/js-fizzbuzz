`use strict`;

// Dichiaro variabili

let contatoreInizio = 0;
let contatoreFine = 100;
const elemUl = document.querySelector(`ul.list`);

// Imposto Ciclo 

for (let numeroIniziale = contatoreInizio; numeroIniziale <= contatoreFine; numeroIniziale++) {

    const li = document.createElement(`li`);

    // Imposto if 

    if(numeroIniziale % 15 === 0) {
        console.log (`FizzBuzz`);
        li.append(`FizzBuzz`);
    }

    // Imposto else if 

    else if (numeroIniziale % 3 === 0) {
        console.log (`Fizz`);
        li.append(`Fizz`);
    }

    // Imposto else if 

    else if (numeroIniziale % 5 === 0) {
        console.log (`Buzz`);
        li.append(`Buzz`);
    }

    // Imposto else 

    else{
        console.log (numeroIniziale);
        li.append(numeroIniziale);        
    }

    elemUl.append(li);

}