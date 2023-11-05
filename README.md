# Prueba Frontend

Esta prueba fue realizada basándose en las instrucciones de la empresa GO FOR CUSTOMER, que consiste en una aplicación web para realizar operaciones CRUD, obteniendo datos de una fake API proporcionada por [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Instalación en entorno local

Una vez descargado o copiado el repositorio en el servidor o computador local, es necesario ejecutar el comando **npm install** en el terminal (asegurándose de estar en la ruta del proyecto) para instalar las dependencias del proyecto.

```bash
npm install
```

Una vez finalice la descarga de dependencias, ejecutar el comando npm run dev permitirá correr el programa localmente.

```bash
npm run dev
```

Posteriormente, en el terminal se mostrará una dirección local. Abre esta dirección en tu navegador.

```bash
> proyecto2@0.0.0 dev
> vite


  VITE v4.5.0  ready in 3866 ms

  ➜  Local:  <span style="color:blue">http://localhost:5173/</span>
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## Uso del programa

- Crear un registro

Haz clic en el botón ubicado en la esquina superior derecha para crear un registro. Luego, se abrirá una pantalla donde deberás completar todos los datos y finalizar con el botón "Save Changes".
![Crear ](/create.png)

- Modificar un registro

Para modificar un registro, haz clic en el botón azul de la columna "Action" del registro que deseas modificar. Posteriormente, se abrirá una pantalla de modificación y al finalizar los cambios, usa el botón "Save Changes".
![Modificar usuario](/update.png)

- Eliminar un registro

Para borrar un registro, haz clic en el botón rojo debajo de la columna "Actions".
![Eliminar usuario](/deleteButton.png)

- Filtrar

Para filtrar, selecciona los parámetros de filtrado y escribe lo que estás buscando. Este proceso te permitirá buscar información específica dentro de la aplicación.
![ Filtrar](/filterResults.png)

- Paginación y numero de resultado

El número de resultados que se muestra puede ser cambiado con el botón de arriba a la izquierda.
![ N Resultados](/showNresults.png)

La paginación se encuentra abajo a la derecha y podrá ser modificada con las flechas, lo que te permitirá navegar a través de los diferentes conjuntos de resultados.
![ Paginación](/pagination.png)
