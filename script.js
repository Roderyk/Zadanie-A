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
const selectRok = document.querySelector(".wybierzRok")


Btagi.addEventListener("click", chmuraTagow);

function chmuraTagow() {
    let lista = listaParent.querySelectorAll("li");
    let chmuraSlow = ""
    let chmuraTagow
    let stringWiersz;
    let itemp
    let iteracja = 0
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
            if (itemp.includes("(", 0) == true){
                let nowySelect = document.createElement("option");
                nowySelect.innerText = itemp;
                selectRok.addEventListener("blur", FunkcjaLink.bind(null, itemp));
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
            if (nowyLi.dataset.on.length >= 5){
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
    console.log(lista);
    for (let i = 0; i <= lista.length - 1; i++) {
        stringWiersz = lista[i].innerText.toLocaleLowerCase();
        console.log(stringWiersz);
        console.log(temp);
        if (stringWiersz.includes(temp) == true){
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
        lista[i].style.display = "inherit";
    }
}