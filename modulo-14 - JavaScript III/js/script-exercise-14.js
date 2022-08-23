const formulary1 = document.getElementById('formulary-01');

if(formulary1)

formulary1.addEventListener('submit', function(event){

    event.preventDefault();
    event.stopPropagation(); 
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
        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.messagem').innerHTML = "";
            this.classList.remove('error');
            this.parentNode.classList.remove('error');
        } else {
            document.querySelector('.message').innerHTML = "Verify your Zip Code";
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