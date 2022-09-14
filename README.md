
# PROYECTO 2: CRUD

Segundo proyecto del Bootcamp de la UDD "Fullstack" que consiste en la creación de un CRUD.

## Descripción

El proyecto va dirigido para músicos que tengan la necesidad de ensayar, practicar o tocar canciones en vivo y consiste en agregarlas dentro de una lista con la
finalidad de tenerlas como guía o recordatorio al estilo PlayList.

La página consta de un nav dentro de un Header no funcional, seguido de títulos que explican a grandes rasgos la finalidad del proyecto.

### Formulario

En la parte izquierda de la página se encuentra un cuadro conteniendo un formulario en donde se pueden agregar:
  
  - Canción
  - Banda/Artista
  - Álbum
  
Seguido de un boton agregar que ingresa los datos en una lista.

El formulario es completamente funcional:

 - No acepta espacios en blanco.
 - No acepta canciones ya ingresadas con anterioridad.
 - No acepta actualizaciones a canciones ya existentes.
 - No acepta cambio de título de la canción, ya que en ese caso es preferible eliminarla por completo.
 - No se aceptan más de 25 canciones.

En cualquier caso que se realice alguna acción previamente descrita, la página enviará una alerta de error explicando lo que se hizo de manera incorrecta.

### Lista

En la parte derecha de la página se encuentra un cuadro en donde se muestran las canciones que se ingresaron en el formulario.
Los datos de las canciones que se pueden observar en la tabla son:

 - #: Corresponde al ID de la canción ingresada.
 - Canción : Nombre de la canción.
 - Banda: Banda/Artista/Interprete etc. de la canción.
 - Album: Album de la canción.
 - Actualizar: Botones para editar o eliminar una canción
 
Los botones de la sección "Actualizar son funcionales y corresponden a:
  
  - Editar: Edita la banda y el álbum de una canción previamente ingresada, dando la oportunidad de volver a ingresar los datos en el formulario, pudiendose
  actualizar al hacer click en el nuevo botón "Actualizar".
  - Borrar: Elimina la canción elegida.
