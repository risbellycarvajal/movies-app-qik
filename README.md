# Movies Inc App

#### Aplicación para ver un listado de películas en estrenos, listado de películas recomendadas y tambien el detalle de estas películas, con la funcionalidad de poder calificarlas y añadirlas a una lista favoritos.

## Tecnologias

Esta aplicación ha sido creada usando `React Native`, `TypeScript` `React Redux` y `Axios`.

## Pantallas

Esta aplicación consta de dos pantallas principales: `listado de películas en estrenos / listado de películas añadidas a favoritos` y el `detalle de la película con un listado de películas recomendadas` basado en una película seleccionada.

## Caracteristicas

-   Listado de películas en estrenos.
-   Listado de películas recomendadas en base a una película seleccionada.
-   Detalles de una película.
-   Habilidad para poder añadir una película a un listado de favoritos.
-   Habilidad para calificar o puntuar una película.

**La data mostrada en esta aplicación es obtenida desde [TMBD API](https://developer.themoviedb.org/docs/getting-started).**

# Instalación

## Pre-requisitos

-   [Node.js](https://nodejs.org/en/download) >= 18
-   [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) >= 4.1.0
-   [Visual Studio Code](https://code.visualstudio.com) (o cualquier otro IDE)
-   [Xcode](https://developer.apple.com/xcode/) (desarrollo en iOS)
-   [Android Studio](https://developer.android.com/studio?gad_source=1&gclid=Cj0KCQjwqdqvBhCPARIsANrmZhMnH3vZRalBmWfGtEPrOEY3Xm_v8GcRK1IZBTjrWlg8fU4xINH7aa4aAmd_EALw_wcB&gclsrc=aw.ds) (desarrollo en Android)
-   [API Key](https://developer.themoviedb.org/docs/getting-started) de TBMD API

> **Nota**: Ten en cuenta que este proyecto se creó con el **CLI de React Native** y para poder correr las aplicaciones tanto en iOS como en Android, debes tener previamente configurado tu entorno de desarrollo. Si no esta configurado, puedes seguir la guia [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) hasta el apartado "Creating a new application".

## Ejecutar el proyecto

### Paso 1: Clonar o descargar el repositorio

Para clonar el repositorio puedes simplemente correr el comando `git clone https://github.com/risbellycarvajal/movies-app-qik.git` o `git clone git@github.com:risbellycarvajal/movies-app-qik.git` - para este comando debes configurar una [SSH Key en GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

### Paso 2: Instalar las dependencias del proyecto

Para instalar las dependencias necesarias para ejecturar el proyecto debes correr el comando `yarn` o `yarn install` en la carpeta root del proyecto (`/movies-app-qik`).

### Paso 3: Configurar las variables de entorno

Para ejecutar correctamente el proyecto, debes tener configuradas las variables de entorno (archivo `.env`) necesarias del proyecto.

Para configurarlas, puedes tomar como base el archivo `.env.defaults` el cual contiene las variables requeridas. La variable `API_KEY` debe ser generada desde [TMBD API](https://developer.themoviedb.org/docs/getting-started) y luego
configurarla en el archivo `.env`

Deberias tener un archivo `.env` con la siguiente estructura:

```bash
API_KEY= # TMBD API KEY HERE
API_BASE_URL=https://api.themoviedb.org/3/movie
AUTH_API_BASE_URL=https://api.themoviedb.org/3/authentication
API_BASE_IMAGE_URL=https://image.tmdb.org/t/p/w500
API_LANGUAGE=es
```

### Paso 4: Ejecutar la aplicación

Para ejecutar la aplicación puedes correr los siguientes comandos desde la carpeta root del proyecto (`/movies-app-qik`).

```bash
# Aplicación iOS
yarn ios

# Aplicación Android
yarn android
```

Si todo esta correctamente configurado, deberias ver la aplicación ejecutandose en tu emulador iOS o Android. Tambien puedes correr las aplicaciones directamente desde
Android Studio y Xcode.

## Scripts

Este proyecto contiene algunos scripts que pueden resultar ùtiles al momento de ejecutar o modificar la aplicación.

### `yarn android`

Este comando ejecutará el proyecto en un simulador Android.

### `yarn ios`

Este comando ejecutará el proyecto en un simulador iOS.

### `yarn start`

Este comando iniciará el servidor de Metro desde una nueva terminal. En esta misma terminal puedes correr los comando `yarn ios` o `yarn android` para ejecutar las aplicaciones en sus respectivos simuladores.

### `yarn test`

Este comando ejecutará todos los tests del proyecto.

### `yarn clean:android`

Este comando realizará una limpieza de la aplicación de android en caso de que haya algún error con alguna
dependencia al momento de ejecutar la aplicación.

### `yarn clean:ios`

Este comando realizará una limpieza de la aplicación de iOS en caso de que haya algún error con alguna
dependencia al momento de ejecutar la aplicación.

Este proyecto está utilizando `eslint` y `prettier` para la identificación de errores y el formateo del código. Tambien utiliza `lint-staged` para verificar errores o formatear el codigo cuando se va a realizar un `commit`.

## Imágenes de la aplicación

![pantalla principal - peliculas estrenos](https://i.ibb.co/Nyk4P9P/Screenshot-2024-03-18-at-2-08-31-AM.png)

![pantalla principal - peliculas favoritas](https://i.ibb.co/jzgRsyZ/Screenshot-2024-03-18-at-2-09-15-AM.png)

![detalle pelicula](https://i.ibb.co/nmbvnCp/Screenshot-2024-03-18-at-2-09-29-AM.png)

![detalle pelicula2](https://i.ibb.co/vJTT78b/Screenshot-2024-03-18-at-2-09-49-AM.png)

![detalle pelicula3](https://i.ibb.co/kSHQqWL/Screenshot-2024-03-18-at-2-10-04-AM.png)

Este proyecto ha sido creado por **Risbelly Carvajal**.
