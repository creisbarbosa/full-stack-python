function averageCalculation(notes) {
    let sum = 0;
    for ( d = 0; d < notes.length; d++) {
        sum += notes [d];
    }
    average = sum / notes.length;
    return average;
}

function aproval(notes) {
    let average = averageCalculation(notes);
    let condition = average >= 7 ? "Aproved" : "Not aproved";
    return "Average note: " + average + " - Result: " + condition;
}

/* function regressiveCountdown (number){
    console.log(number);
    let nextNumber = number - 1;
    if (nextNumber > 0)
        regressiveCountdown(nextNumber);
} */

const formulary1 = document.getElementById('formulary-01');

if(formulary1)

formulary1.addEventListener('submit', function(event){

    event.preventDefault();
    event.stopPropagation(); 

    if(this.getAttribute('class').match(/error/)){
        return false;
    }

    let data = new FormData(this);

    let notes = [];

    for(let key of data.keys()){

        let numero = data.get(key).match(/\d*/) ? Number(data.get(key)) : 0;

        if(!isNaN(numero)){
            notes.push(numero);
        }

    }

    console.log(notes);

    text = aproval(notes)

    document.getElementById('result').innerHTML = text;
});


function filedValidation(element){

    element.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.message').innerHTML =  "Verify data on red fields";
            this.classList.add('error');
            this.parentNode.classList.add('error');
            return false;
        } else {
            document.querySelector('.message').innerHTML =  "";
            this.classList.remove('error');
            this.parentNode.classList.remove('error');
        }
    });
}

function numberFiledValidation(element){

    element.addEventListener('focusout', function(event){
        event.preventDefault();
        let zipnumber = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(zipnumber != "" && zipnumber.match(/[0-9]*/) && zipnumber >= 0 && zipnumber <= 10){
            document.querySelector('.messagem').innerHTML = "";
            this.classList.remove('error');
            this.parentNode.classList.remove('error');
        } else {
            document.querySelector('.menssage').innerHTML = "Verify your Zip Code";
            this.classList.add('error');
            this.parentNode.classList.add('error');
            return false;
        }
    });
}

let mandatoryField = document.querySelectorAll('input.mandatory');
let mandatoryNumberField = document.querySelectorAll('input.number');


for(let inFocus of mandatoryField){
    filedValidation(inFocus);
}

for(let inFocus of mandatoryNumberField){
    numberFiledValidation(inFocus);
}