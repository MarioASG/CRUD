let botonAgregar = document.getElementById('agregar');
botonAgregar.addEventListener('click', (event) => {agregarCancion(event)});

let botonActualizar = document.getElementById('actualizar');
botonActualizar.addEventListener('click', (event) => actualizarCancion(event));

let idCanciones = document.querySelector("#id");
let nombre = document.getElementById('nombreCancion');
let banda = document.getElementById('banda');
let album = document.getElementById('album');

let cancionesCSS = document.querySelector('.cancionesCSS');

// Sortable.create(cancionesCSS, {
//     animation: 150,
//     chosenClass: "seleccionado",
//     ghostClass: "fantasma",
// });

let canciones = [];

function agregarCancion(event) {
    event.preventDefault()

    const cancion = {
        id:(canciones.length + 1),
        nombre: nombre.value,
        banda: banda.value,
        album: album.value
    }
        
        let cancionIncluida = canciones.find(cancion => 
            cancion.nombre === nombre.value && 
            cancion.banda === banda.value &&
            cancion.album === album.value)
    if (cancion.nombre === "" || cancion.banda === "" ||cancion.album === ""){
        mostrarAlerta()
    }else if(cancionIncluida !== undefined){
        swal('Error', 'La cancion ingresada ya se encuentra en la lista', 'error')

    }else{
        canciones.push(cancion)
    }

    guardarEnLS()
    mostrarCanciones()
    limpiarInput()
}

function mostrarAlerta(){
    swal('Error', 'Debe ingresar todos los datos que se solicitan', 'error')
}

function editarCancion(nombreCancion){
    botonAgregar.style.display = 'none'
    botonActualizar.style.display = 'block'

    let cancionEditada = canciones.find((cancion) => cancion.nombre === nombreCancion)
    
    nombre.value = cancionEditada.nombre
    banda.value = cancionEditada.banda
    album.value = cancionEditada.album
    nombre.setAttribute('disabled', true)
}

function actualizarCancion(event){
    event.preventDefault()

    let cancionIncluida = canciones.find(cancion => 
        cancion.nombre === nombre.value && 
        cancion.banda === banda.value &&
        cancion.album === album.value)

    let nombreCancion = nombre.value
    let newBanda = banda.value
    let newAlbum = album.value

    if(cancionIncluida !== undefined){
        swal('Error', 'La cancion ingresada ya se encuentra en la lista', 'error')
    }else
    canciones = canciones.map(cancion =>{
        if(cancion.nombre === nombreCancion){
            return {
                nombre: nombreCancion,
                banda: newBanda,
                album: newAlbum
            }
        }else{
            return cancion;
        }
    })

    limpiarInput()
    botonAgregar.style.display = 'block'
    botonActualizar.style.display = 'none'
    nombre.removeAttribute('disabled')
    mostrarCanciones()

}

function eliminarCancion(btn, nombre){
    btn.parentElement.parentElement.remove()
    canciones = canciones.filter((cancion) => cancion.nombre !== nombre)
    guardarEnLS()
}

function guardarEnLS(){
    let cancionesString = JSON.stringify(canciones)
    window.localStorage.setItem("canciones", cancionesString)
}

function leerCanciones(){
   let cancionesEnLS = window.localStorage.getItem("canciones")

   if(cancionesEnLS === null){
    canciones = []
   }else {
    canciones = JSON.parse(cancionesEnLS)
   }
    
   mostrarCanciones()
}

function mostrarCanciones(){
    cancionesCSS.innerHTML = '';
    canciones.forEach(e => {
        cancionesCSS.innerHTML += `
                <tr>
                <th>${e.id}</th>
                <td>${e.nombre}</td>
                <td>${e.banda}</td>
                <td>${e.album}</td>
                <th>
                <button onclick = "editarCancion('${e.nombre}')" >Editar</button>
                |
                <button onclick = "eliminarCancion(this, '${e.nombre}')" >Borrar</i></button></th>
                </tr>
                `;
    });
}

leerCanciones()

function limpiarInput (){
    nombre.value = ''
    banda.value = ''
    album.value = ''
}
