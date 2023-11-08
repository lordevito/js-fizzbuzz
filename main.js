`use strict`

// Dichiaro variabili

let contatoreInizio = 0;
let contatoreFine = 100;
const elemUl = document.querySelector(`ul.list`);


// Imposto Ciclo 

for (let numeroIniziale = contatoreInizio; numeroIniziale < contatoreFine; numeroIniziale++) {

    

    // Imposto if 

    if(numeroIniziale % 15 === 0) {
        const li = document.createElement(`li`);
        console.log (`FizzBuzz`);
        li.append(`FizzBuzz`);
        elemUl.append(li);
    }

    // Imposto else if 

    else if (numeroIniziale % 3 === 0) {
        const li = document.createElement(`li`);
        console.log (`Fizz`);
        li.append(`Fizz`);
        elemUl.append(li);
    }

    // Imposto else if 

    else if (numeroIniziale % 5 === 0) {
        const li = document.createElement(`li`);
        console.log (`Buzz`);
        li.append(`Buzz`);
        elemUl.append(li);
    }

    // Imposto else 

    else{
        console.log (numeroIniziale);
        const li = document.createElement(`li`);
        li.append(numeroIniziale);
        elemUl.append(li);
    }

    

}