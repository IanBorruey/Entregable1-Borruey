// Declaro variables
const mensajeBienvenida = "Bienvenido al gestor de nombres";
// Array con nombres escritos por el usuario
let nombres = [];

// Función para agregar nombres
function agregarNombre() {
  let nombre = prompt("Ingresa un nombre:");
  if (nombre) {
    nombres.push(nombre);
    console.log(`Nombre agregado: ${nombre}`);
    alert(`El nombre '${nombre}' ha sido agregado.`);
  } else {
    alert("No ingresaste un nombre valido.");
  }
}

// Función para mostrar todos los nombres
function mostrarNombres() {
  if (nombres.length === 0) {
    alert("No hay nombres en la lista.");
  } else {
    console.log("Lista de nombres:", nombres);
    alert("Lista de nombres: \n" + nombres.join("\n"));
  }
}

// Función principal con menú de opciones
function iniciarPrograma() {
  alert(mensajeBienvenida);
  let continuar = true;

  while (continuar) {
    let opcion = prompt(
      "Elige una opción:\n1. Agregar nombre\n2. Mostrar nombres\n3. Salir"
    );

    switch (opcion) {
      case "1":
        agregarNombre();
        break;
      case "2":
        mostrarNombres();
        break;
      case "3":
        continuar = confirm("¿Estás seguro de que deseas salir?");
        break;
      default:
        alert("Opción no válida, intenta nuevamente.");
    }
  }
}

// Ejecutar el programa
iniciarPrograma();
