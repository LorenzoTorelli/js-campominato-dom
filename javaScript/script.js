
let container = document.getElementById("container-grid");
let play = document.getElementById('play');
let bombe = [];

// crea array con caselle con bombe
function creaBombe(livello) {
    let bombe = [];
    while(bombe.length < 16){
        let a = Math.floor(Math.random() * (livello - 1) + 1);
        if (!bombe.includes(a)) {
            bombe.push(a);
        }
    }
    return bombe;
}

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
function Gioca(livello, bombe, result, punteggio) {
    for (let i = 0; i< livello; i++) {
        const divElem = addSquare(livello, i);
        container.appendChild(divElem);
        changeColor(divElem, bombe, result, punteggio, livello);

    }
    return punteggio;
}



// cambia colore al click 
function changeColor(divElem, bombe, result, punteggio, livello) {
    let e = document.getElementsByClassName("click-true");
    divElem.addEventListener("click", function () {
        if (bombe.includes(parseInt(divElem.textContent))) {
            divElem.classList.add("click-false");
            result.classList.add("loser");
            result.innerHTML = "HAI PERSO !! "
            let a = parseInt(e.length);
            punteggio.innerHTML = "Il tuo Punteggio è: " + a ;
            giocoFinito(bombe);
            }
        else{
            let e = document.getElementsByClassName("click-true");
            if (livello-16 > e.length + 1) {
                divElem.classList.add("click-true");
            }
            else {
                result.classList.add("loser");
                result.innerHTML = "HAI VINTO !! "   
                let a = parseInt(e.length) + 1;
                punteggio.innerHTML = "Il tuo Punteggio è: " + a ; 
                giocoFinito(bombe);
            }
        }

        

    });
}

//gioco vinto 
function giocoVinto (livello, punteggio) {
    while(livello-16 >= punteggio) {
        punteggio += 1;
    }
    
}
// gioco finito 
 function giocoFinito(bombe) {
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
    let result = document.getElementById("lose");
    let punteggio = document.getElementById("punt");
    let livello = select.options[select.selectedIndex].value;
    let bombe = creaBombe(livello);
    svuotaGriglia();
    Gioca(livello, bombe, result, punteggio);
});