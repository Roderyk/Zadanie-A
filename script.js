const UllistaFilmow = document.querySelector("#listaFilmow");
window.addEventListener("load", FileFilmow)
function FileFilmow() {
    let lista = UllistaFilmow.querySelectorAll("li");
    let liczbaFilmow = lista.length;
    let SpanLiczbaFilmow = document.querySelector("#spanLiczbaFilmow")
    SpanLiczbaFilmow.innerHTML += liczbaFilmow
}

const Btagi = document.querySelector("#generujTagi");
const listaTagowHTML = document.querySelector("#listaTagow");
const listaParent = document.querySelector("#listaFilmow");
var selectRok = document.querySelector(".wybierzRok")
const buttonStyl = document.querySelector("#zmienStyl")

Btagi.addEventListener("click", chmuraTagow);

function chmuraTagow() {
    let lista = listaParent.querySelectorAll("li");
    let chmuraSlow = ""
    let chmuraTagow
    let stringWiersz;
    let itemp
    let iteracja = 0
    let listaObecnychTagow = listaTagowHTML.querySelectorAll("li")
    for (let i = 0; i < listaObecnychTagow.length; i++){
        listaTagowHTML.removeChild(listaObecnychTagow[i]);
    }
    for (let i = 0; i <= lista.length - 1; i++) {
        stringWiersz = lista[i].innerText;
        chmuraSlow += stringWiersz += " ";

    }
    chmuraSlow = chmuraSlow.toLocaleLowerCase();
    chmuraTagow = chmuraSlow.split(" ");
    //console.log(chmuraTagow.length);

    for (let i = 0; i <= chmuraTagow.length - 2; i++) {
        if (chmuraTagow[i] != null) {
            let nowyLi = document.createElement("li");
            itemp = chmuraTagow[i];
            nowyLi.innerHTML = itemp;
            nowyLi.dataset.on = ""
            nowyLi.addEventListener("click", FunkcjaLink.bind(null, itemp));
            if (itemp.includes("(", 0) == true) {
                let nowySelect = document.createElement("option");
                nowySelect.innerText = itemp;
                selectRok.appendChild(nowySelect);
            }
            //console.log(chmuraTagow[i])
            iteracja += 1
            //console.log(iteracja)
            for (let i = iteracja; i <= chmuraTagow.length - 2; i++) {
                if (itemp == chmuraTagow[i]) {
                    nowyLi.dataset.on += parseInt(1);
                    chmuraTagow[i] = null;
                }
                else {
                    continue;
                }
            }
            listaTagowHTML.appendChild(nowyLi);
            if (nowyLi.dataset.on.length >= 5) {
                nowyLi.className = "razy5";
            }
            else if (nowyLi.dataset.on.length < 5 && nowyLi.dataset.on.length >= 2) {
                nowyLi.className = "razy2";
            }
            else {
                nowyLi.className = "raz";
            }
        }
        else {
            continue;
        }
    }
}
function FunkcjaLink(temp) {
    let lista = listaParent.querySelectorAll("li");
    let stringWiersz;
    console.log(temp)
    //console.log(lista);
    for (let i = 0; i <= lista.length - 1; i++) {
        lista[i].style.display = "list-item";
        stringWiersz = lista[i].innerText.toLocaleLowerCase();
        //console.log(stringWiersz);
        //console.log(temp);
        if (stringWiersz.includes(temp) == true) {
            continue;
        }
        else {
            lista[i].style.display = "none";
        }
    }
}
let buttonPokazWszystkie = document.querySelector("#pokazWszystkie");
buttonPokazWszystkie.onclick = FpokazWszystkie

function FpokazWszystkie() {
    let lista = listaParent.querySelectorAll("li");
    for (let i = 0; i <= lista.length - 1; i++) {
        lista[i].style.display = "list-item";
    }
}
selectRok.onchange = FunkcjaLinkRok

function FunkcjaLinkRok() {
    let lista = listaParent.querySelectorAll("li");
    let stringWiersz;
    for (let i = 0; i <= lista.length - 1; i++) {
        lista[i].style.display = "list-item";
        stringWiersz = lista[i].innerText.toLocaleLowerCase();
        if (stringWiersz.includes(this.value) == true) {
            continue;
        }
        else {
            lista[i].style.display = "none";
        }
    }
}

//polecenie 5
buttonStyl.onclick = FzmienStyl
let kontrola = 1
function FzmienStyl() {
    let lista = listaParent.querySelectorAll("li");
    if (kontrola == 1) {
        buttonStyl.className = "stylListy2";
        for (let i = 0; i <= lista.length - 1; i++) {
            if (lista[i].className == "pierwsza")
            lista[i].className = "trzecia";
            else {
                lista[i].className = "czwarta";
            }
        }
        kontrola = 2;
    }
    else {
        buttonStyl.className = "stylListy1";
        for (let i = 0; i <= lista.length - 1; i++) {
            if (lista[i].className == "trzecia")
            lista[i].className = "pierwsza";
            else {
                lista[i].className = "druga";
            }
        }
        kontrola = 1;
    }
}
//polecenie 6
let tytulFilmu = document.querySelector("#tytulFilmu");
let rokFilmu = document.querySelector("#rokFilmu");
let BdodajFilm = document.querySelector("#dodajFilm");

BdodajFilm.onclick = FdodajFilm

function FdodajFilm() {
    let nowyFilmLi = document.createElement("li");
    let tekstDoWstawienia = tytulFilmu.value + " (" + rokFilmu.value + ")";
    nowyFilmLi.innerText = tekstDoWstawienia;
    let robocza = listaParent.lastChild
    console.log(robocza)
    // if (listaParent.lastChild.className == "pierwsza") {
    //     nowyFilmLi.className = "druga";
    // }
    // else if (listaParent.lastChild.className == "druga") {
    //     nowyFilmLi.className = "pierwsza";
    // }
    //listaParent.appendChild(nowyFilmLi);
    tytulFilmu.value = null;
    rokFilmu.value = null;
}