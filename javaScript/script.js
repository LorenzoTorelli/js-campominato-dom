
let container = document.getElementById("container-grid");
let play = document.getElementById('play');
let bombe = [];

// svuota la griglia
function svuotaGriglia() {
    container.innerHTML = "";
}

// aggiunge quadradi al div 
function addSquare(livello, i) {
    let elem = document.createElement('div');
    elem.className = 'square';
    elem.classList.add('square-' + livello);
    elem.innerHTML= i+1;
    return elem;
}


// creazione griglia 
function Gioca(livello, bombe) {
    for (let i = 0; i< livello; i++) {
        const divElem = addSquare(livello, i);
        container.appendChild(divElem);
        changeColor(divElem,bombe, livello);
        // if(changeColor(divElem,bombe, livello) == false) {
        //     console.log(" gioco finito" );
        // }
        // else{
        //     console.log(" il gioco continua");

        // }
    }
}

// crea array con caselle con bombe
function creaBombe(livello) {
    let bombe = [];
    for (let i = 0; i<Math.sqrt(livello); i++) {
        let a = Math.floor(Math.random() * (livello - 1) + 1);
        bombe.push(a);
    }
    return bombe;
}

// cambia colore al click 
function changeColor(divElem, bombe, livello) {
    let game = true;
    divElem.addEventListener("click", function () {
        if (bombe.includes(parseInt(divElem.textContent))) {
            divElem.classList.add("click-false");
            game = false;
            }
        else{
            divElem.classList.add("click-true");
        }
        
    if (game == false) {
        giocoFinito(livello, bombe);

    }
    // else {
    //     console.log("hai vinto")
    // }
    });
}


// // gioco finito 
 function giocoFinito(result, bombe) {
    let result = document.getElementById("lose");
    console.log(result);
    result.classList.add("loser");
    let elements = document.getElementsByClassName("square");
    for (let i = 0; i< elements.length; i++) {

        if (bombe.includes(parseInt(elements[i].textContent))) {
            elements[i].classList.add("click-false");
            

        }
        else{
            elements[i].classList.add("click-true");
        }
    }
 }


play.addEventListener("click", function() {
    let select = document.getElementById('livello');
    let livello = select.options[select.selectedIndex].value;
    let bombe = creaBombe(livello) 
    console.log(bombe);
    svuotaGriglia();
    Gioca(livello, bombe);
})