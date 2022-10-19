# Asincronismo con JavaScript

- Los lenguajes de programación son sincrónicos.
- JavaScript es síncrono por defecto y tiene un solo subproceso.
- JavaScript es **asíncrono** y no bloqueante, con un bucle de eventos (concurrencia), implementado con un único hilo para sus interfaces de I/O
- JavaScript es **Single-Threaded**, aún con múltiples procesadores, solo se puede ejecutar tareas en un solo hilo, llamado hilo principal


## Conceptos Importantes:

- **Bloqueante:** Una tarea no devuelve el control hasta que se ha completado.

- **No Bloqueante:** Una tarea se devuelve inmediatamente con independencia del resultado. Si se completó, devuelve los datos. Si no, un error.

- **Síncrono:** Las tareas se ejecutan de forma secuencial, se debe esperar a que se complete para continuar con la siguiente tarea.

- **Asíncrono:** Las tareas pueden ser realizadas más tarde, lo que hace posible que una respuestas sea procesada en diferido.

- **Event Loop:** El bucle de eventos es un patrón de diseño que espera y distribuye eventos o mensajes en un programa


## Formas de manejar la asincronía

- **Callbacks:** Una función que se pasa como argumento de otra función y que será invocada.

- **Promesas:** Función no-bloqueante y asíncrona la cual puede retornar un valor ahora, en el futuro o nunca.

- **Async & Await:** Permite estructura una función asincrónica sin bloqueo de una manera similar a una función sincrónica ordinaria.