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

function regressiveCountdown (number){
    console.log(number);
    let nextNumber = number - 1;
    if (nextNumber > 0)
        regressiveCountdown(nextNumber);
}

document.addEventListener('submit', function(event){
    event.preventDefault();
    event.stopPropagation();
    let formulary = document.getElementById('formulary-01');
    let data = new FormData(formulary);
    let object = {};
    let notes = [];
    for(let key of data.keys()){
        object[key] = data.get(key);
        //add itens in array
        notes.push(parseInt(data.get(key)));
    }
    console.log(object);
    console.log(notes);
    document.getElementById('result').innerHTML = aproval(notes);
});