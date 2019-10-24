// 1. Dodavanje itema

// Prvo nam treba forma u kojoj unosimo ime itema
// id - addForm
const form = document.getElementById("addForm");
// Treba nam container gdje se nalazi svi itemi
// id - items

const itemList = document.getElementById("items");

// Na submit forme gdje unosimo item treba da aktiviramo submit event i zakacimo funkciju addItem
form.addEventListener("submit", addItem)

// Za brisanje
itemList.addEventListener("click", removeItem);

// filter
let filter = document.getElementById("filter");
filter.addEventListener("keyup", filterItems)

// Sada trebamo da kreiramo event handler za submit forme
// Event handler za dodavanje itema
function addItem(event) {

    // Na submit forme trebamo da onemogucimo default ponasanje forme
    // tj. da onemogucimo action na submit
    event.preventDefault();

    // Sada nam treba vrijednost iz input polja
    // koju smo unijeli
    // id - item
    const newItem = document.getElementById("item").value

    console.log(newItem);

    // Sledeci korak je kreiranje novog li itema
    const li = document.createElement("li");

    // Nakon toga li itemu trebamo dodati klasu 
    // class - list-group-item
    li.className = "list-group-item";

    // Nakon ovog trebamo da kreiramo text node
    // cija je vrijednost sacuvana u input polju
    // i da dodamo taj text node u li
    li.appendChild(document.createTextNode(newItem));

    // Potrebno je da kreiramo i delete button element
    const delBtn = document.createElement("button");

    // Potrebno je da dodamo klase za delete button
    // da bismo dobili adekvatan izgled
    // class - btn btn-danger btn-sm float-right delete
    delBtn.className = "btn btn-danger btn-sm float-right delete";

    // Potrebno je da dodamo na delete button text node "X"
    delBtn.appendChild(document.createTextNode("X"));

    // Sada moramo da dodamo deleteBtn u li
    li.appendChild(delBtn);

    // Nakon toga, potrebno je da dodamo
    // novokreirani li u listu itema
    itemList.appendChild(li);

}

// 2. Brisanje elemenata iz liste

// Na item list dodamo click event i event handler za brisanje itema removeItem
// U prvom koraku smo nasli item list !

// Sada trebamo da kreiramo event handler za brisanje itema
function removeItem(event) {
    console.log(event.target);
    // sad treba da provjerimo da li je user kliknuo na X
    // to mozemo da odradimo tako sto provjerimo da li
    // element koji smo kliknuli sadrzi klasu "delete"
    console.log(event.target.classList);
    if (event.target.classList.contains("delete")) {
        // ako sadrzi pozvati confirm sa porukom "Jeste li sigurni"
        // - radimo detaljnije nakon testa
        // confirm vrace true/false
        if (confirm("Jeste li sigurni da zelite da uklonite item?")) {
            // trebamo da obrisemo li element
            // prvo selektujemo li
            // li je parent node elementa X, tj. targeta
            // parentElement
            const li = event.target.parentElement;

            // onda obrisemo selektovani li
            // iz parent noda, tj. lista itema (definisana globalno)
            // parent.removeChild(child)
            itemList.removeChild(li);

        }
    }
}

// 3. Filtriranje/pretraga elemenata

// prvo nam treba input polje za pretragu itema
// id - filter


// Na filter input polje dodamo event "keyup" i event handler filterItems

// Event handler za filtriranje itema
function filterItems(e) {
    // konvertovanje slova iz e.target.value u lowercase,
    // taj tekst cuvamo u varijablu 
    // lakse nam je da radimo pretragu
    let text = e.target.value.toLowerCase();

    // uzmemo sve li iteme iz liste itema, gore vec definisali
    // sve elemente moramo da sacuvamo u varijablu
    // mozemo da koristimo getElementsByTagName
    let items = itemList.getElementsByTagName("li");

    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !== -1) {
            item.style.display = "block";
        } else{
            item.style.display = "none";
        }
    })

}
