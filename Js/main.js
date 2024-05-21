import { lista_componentes } from "./data.js";

let div_root = document.querySelector(".root");

let bloque_principal = `
<h3>Componentes del computador</h3>

<input type="text" class="entrada_texto" placeholder="Buscar componente...">
<div class="lista_items"></div>
`;

div_root.innerHTML = bloque_principal;

function cargar_items(texto) {
    let div_items = document.querySelector(".lista_items");
    div_items.innerHTML = "";

    lista_componentes.forEach((elemento) => {
        if (texto === "" || texto.toLowerCase() === elemento.nombre.toLowerCase()) {
            let div = document.createElement("div");
            div.classList.add("item");
            div.innerHTML = `
                <img src="${elemento.img}" alt="${elemento.nombre}">
            `;
            div_items.appendChild(div);
        }
    });
}

// Cargar los elementos cuando la página se carga inicialmente
cargar_items("");

// Evento de la entrada de texto
let entrada = document.querySelector(".entrada_texto");
entrada.addEventListener("input", () => {
    cargar_items(entrada.value);
});