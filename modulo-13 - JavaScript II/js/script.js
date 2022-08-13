function averageCalculation( notes ) {
    let sum = 0;
    for ( d = 0; d < notes.length; d++) {
        sum += notes [d];
    }
    average = sum / notes.length;
    return average;
}

//escopo global

function aproval( average ) {
		//escopo da função
    let condition = average >= 7 ? "Aproved" : "Not aproved";
    return "Average note: " + average + " - Result: " + condition;
}

//console.log()
//console.log('Average: ' + averageCalculation([7, 7, 7, 7]))
console.log(aproval(averageCalculation([7, 6, 8, 10])));

document.addEventListener('submit', function(evento){
    evento.preventDefault();
    let formulary = document.getElementById('formulario-01');
    let data = new FormData(formulary);
    let objetc = {};
    let notes = [];
    for(let key of data.keys()) {
        object[key] = data.get(key);
        //add itens in array
        notes.push(parseIntdata(key));
    }

    console.log(notes);
    console.log(objetc);
    
    text = aproval(notes)

    document.getElementById('result').innerHTML = aproval(notes)
});