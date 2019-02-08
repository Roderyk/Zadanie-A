window.addEventListener("load", FileFilmow)
function FileFilmow() {
    let lista = document.querySelectorAll("li");
    let liczbaFilmow = lista.length;
    let SpanLiczbaFilmow = document.querySelector("#spanLiczbaFilmow")
    SpanLiczbaFilmow.innerHTML += liczbaFilmow

}

const Btagi = document.querySelector("#generujTagi");
const listaTagowHTML = document.querySelector("#listaTagow");

Btagi.addEventListener("click", chmuraTagow);

function chmuraTagow() {
    let listaParent = document.querySelector("#listaFilmow")
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
            nowyLi.dataset.on = parseInt(1);
            nowyLi.addEventListener("click", FunkcjaLink.bind(null, itemp));
            console.log(chmuraTagow[i])
            iteracja += 1
            console.log(iteracja)
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
        }
        else {
            continue;
        }
    }
}
function FunkcjaLink(temp) {
    console.log(temp)
}