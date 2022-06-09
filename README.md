# Movilizame React Code Challenge

## Iniciar

Forkea este proyecto e instalá sus dependencias con `npm install`

Realizá todos los cambios que consideres y cuando lo tengas listo realizá un Pull Request al proyecto original.

Te contactaremos a la brevedad con nuestros comentarios.

## Consignas

1- Implementar en services/movies.js llamada a la API de peliculas para buscar por título

2- Desarrollar 3 componentes:

    A- SearchMovies: Permitirá el ingreso de un posible título en un input[text] (parámetro para la API) y un año en un campo input[number] en dónde se usará para filtrar las películas (post query) que sean anteriores a ese año. Ejemplo: "Matrix" y "2020" debería mostrar las 3 primeras películas de Matrix unicamente. El componente tendrá un botón que dispare la búsqueda.
   
    B- MovieList: Mostrará en una lista los resultados de la búsqueda realizada en SearchMovies y por cada item mostrará un botón "Agregar a mi lista" o "Quitar de mi lista" según corresponda. Utilizará el context para saber si la película está en la lista y el método "setMovies" del reducer del context para agregarlas.

    C- WatchList: Este componente mostrará un listado de las películas que están en la lista del usuario.



BONUS:
1- Migrar de contex de React a react-redux
2- Utilizar TailwindCSS para darle estilos


## Consideraciones

Todo el código debe escribirse usando React Hooks y código funcional.

Se valorará el código limpio y ordenado.

Los bonus son opcionales.