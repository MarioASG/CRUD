let botonAgregar = document.getElementById('agregar')
botonAgregar.addEventListener('click', (event) => agregarCancion(event))

let botonActualizar = document.getElementById('actualizar')
botonActualizar.addEventListener('click', (event) => actualizarCancion(event))

let nombre = document.getElementById('nombreCancion')
let banda = document.getElementById('banda')
let album = document.getElementById('album')

let contenedor = document.getElementById('canciones')

let canciones = []

function agregarCancion(event) {
    event.preventDefault()

    const cancion = {
        nombre: nombre.value,
        banda: banda.value,
        album: album.value
    }
        let cancionIncluida = canciones.includes(cancion.nombre)
    if (cancion.nombre === "" || cancion.banda === "" ||cancion.album === ""){
        mostrarAlerta()
    }else if(cancion.nombre === cancionIncluida){
        mostrarAlerta()

    }else{
        canciones.push(cancion)
        console.log(cancion);
    }

    // canciones.push(cancion)
    guardarEnLS()
    mostrarCanciones()
    limpiarInput()
}

function mostrarAlerta(){
    swal('Error', 'Debe ingresar todos los datos que se solicitan', 'error')
}

function guardarEnLS(){
    let cancionesString = JSON.stringify(canciones)
    window.localStorage.setItem('canciones', cancionesString)
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

    let nombreCancion = nombre.value
    let newBanda = banda.value
    let newAlbum = album.value
    
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

function leerCanciones(){
   let cancionesEnLS = window.localStorage.getItem('canciones')

   if(cancionesEnLS === null){
    canciones = []
   }else {
    canciones = JSON.parse(cancionesEnLS)
   }
   mostrarCanciones()
}

function mostrarCanciones(){
    contenedor.innerHTML = ''
    canciones.forEach(cancion => {
    contenedor.innerHTML += `
            <article>
                <div>

                <p>${cancion.nombre}</p>
                <p>${cancion.banda}</p>
                <p>${cancion.album}</p>

                </div>
                <div>
                <button onclick = "editarCancion('${cancion.nombre}')" >Editar</button>
                <button onclick = "eliminarCancion(this, '${cancion.nombre}')" >Borrar</button>

                </div>

            </article>
    `
    })
}

leerCanciones()

function limpiarInput (){
    nombre.value = ''
    banda.value = ''
    album.value = ''
}
