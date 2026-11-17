
const plantilla = document.querySelector("#plantilla-mascota");

class FichaMascota extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const contenido = plantilla.content.cloneNode(true);
    shadow.appendChild(contenido);
  }

  connectedCallback() {
    const nombre = this.getAttribute("nombre") || "Sin nombre";
    const especie = this.getAttribute("especie") || "No especificada";
    const edad = this.getAttribute("edad") || "No registrada";
    const vacuna = this.getAttribute("vacuna") || "Fecha pendiente";

    this.shadowRoot.querySelector(".nombre").textContent = nombre;
    this.shadowRoot.querySelector(".especie").textContent = especie;
    this.shadowRoot.querySelector(".edad").textContent = edad;
    this.shadowRoot.querySelector(".fecha-vacuna").textContent = vacuna;
  }
}

customElements.define("ficha-mascota", FichaMascota);
