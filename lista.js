function marcarImportante(event) {
    let botonPinchado = event.srcElement;  // <button> sobre el que se ha hecho click
    let liContenedor = botonPinchado.parentElement;  // <li> que contiene al <button> sobre el que se hizo click

    // hacemos que el <li> tome la clase "importante" de CSS
    liContenedor.classList.add("importante");

    // hacemos que el botón de marcar importante se deje de ver (ya no hace falta, no vamos a volver a marcar la tarea)
    botonPinchado.style.display = "none";
}

function eliminarTarea(event) {
    let botonPinchado = event.srcElement;  // <button> sobre el que se ha hecho click
    let liContenedor = botonPinchado.parentElement;  // <li> que contiene al <button> sobre el que se hizo click
    let ul = liContenedor.parentElement;  // <ul> que contiene al <li> que contiene al <button>, podríamos haber hecho document.getElementById("listaTareas") también

    // elimina la tarea de la lista
    ul.removeChild(liContenedor);
}

function anadirTarea() {
    let ul = document.getElementById("listaTareas");  // <ul> con la lista de tareas; aquí no hay otra forma de obtenerlo
    let nuevoLi = document.createElement("li");  // <li> para meter la nueva tarea
    let inputNuevaTarea = document.getElementById("nuevaTarea");  // input que contiene el nombre de la nueva tarea
    let nuevoBotonImportante = document.createElement("button");  // botón de marcar importante que vamos a crear para la nueva tarea
    let nuevoBotonEliminar = document.createElement("button");  // botón de eliminar que vamos a crear para la nueva tarea

    // copiamos el nombre de la nueva tarea del input al nuevo <li> y añadimos el <li> a la <ul>
    nuevoLi.innerHTML = inputNuevaTarea.value + " ";
    ul.appendChild(nuevoLi);

    // preparamos (ponemos texto y le decimos que queremos escuchar el evento de click) el botón de marcar importante y lo añadimos al <li>
    nuevoBotonImportante.innerHTML = "Marcar importante";
    nuevoBotonImportante.onclick = marcarImportante;
    nuevoLi.appendChild(nuevoBotonImportante);

    // preparamos el botón de eliminar (ponemos texto y le decimos que queremos escuchar el evento de click) y lo añadimos al <li>
    nuevoBotonEliminar.innerHTML = "Eliminar";
    nuevoBotonEliminar.onclick = eliminarTarea;
    nuevoLi.appendChild(nuevoBotonEliminar);

    // Limpiar el input para poder meter la próxima tarea
    inputNuevaTarea.value = "";
}
