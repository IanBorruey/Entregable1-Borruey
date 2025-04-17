// Declaro variables
const inputNombre = document.getElementById("inputNombre");
const botonAgregar = document.getElementById("botonAgregar");
const botonLimpiar = document.getElementById("botonLimpiar");
const listaNombres = document.getElementById("listaNombres");

// Array donde se guardan los nombres
let nombres = JSON.parse(localStorage.getItem("nombres")) || [];

// Guardo el array en storage
function guardarEnStorage() {
  localStorage.setItem("nombres", JSON.stringify(nombres));
}

function iniciarPrograma() {
  listaNombres.innerHTML = "";
  nombres.forEach((nombre, index) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    li.addEventListener("click", () => eliminarNombre(index));
    listaNombres.appendChild(li);
  });
}

// Función para agregar nombres
function agregarNombre() {
  const nombre = inputNombre.value.trim();
  if (nombre !== "") {
    nombres.push(nombre);
    guardarEnStorage();
    iniciarPrograma();
    inputNombre.value = "";
  }
}

function eliminarNombre(index) {
  nombres = nombres.filter((_, i) => i !== index);
  guardarEnStorage();
  iniciarPrograma();
}

// Eventos
botonAgregar.addEventListener("click", agregarNombre);
botonLimpiar.addEventListener("click", () => {
  nombres = [];
  guardarEnStorage();
  iniciarPrograma();
});

// Ejecucion del programa
iniciarPrograma();