# Repositorio base del Curso de Introducción a React.js en Platzi

¡Hola, Platzinauta!

En este repositorio encontrarás el código de todas las clases del [Curso de Introducción a React.js](https://platzi.com/reactjs). Para empezar solo debes clonar este repositorio (`git clone`), instalar sus dependencias (`npm i`) y ejecutar la aplicación (`npm start`).

La rama principal contiene el código con el que eempezamos el curso. En las demás ramas encontrarás el código de las siguientes clases y finalmente el deploy de la aplicación.

¡Mucha suerte aprendiendo React! #NuncaParesDeAprender

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## COMENTARIOS DEL DESARROLLADOR 

### Capitulo 1: Introduccion 

#### index.js

El archivo principal es el index.js, hacemos varios imports pero lo importante es el **APP** es el spot por defecto.
Estamos creando un root _**const root = ReactDOM.createRoot(document.getElementById('root'));**_  y nos crea un metodo render que permite renderizar dentro del div con id="root" -> root.render(<App />);

#### index.js

Vemos por primeravez un componente, que al inicio parece una funcion pero un **Componente siempre debe iniciar con una letra Mayuscula** y por dentro parece HTML pero no lo es. 

### Capitulo States:

Tenemos que tener en cuenta que en TodoSearch.js se creo nuestro primer state donde hace solo un console.log a lo que escribamos en el input, ahora lo que hemos aprendido esque los states no se pueden heredar de hijos a padres sino todo lo contrario de padres a hijos y es por eso que todo el state se elimina (comenta para no perder el rastro) y se colota en App.js dodne este es el padre que se va a comunicar con TodoSearch.js.


### Capitulo LocalStorage:

Estamos aprendiendo como funciona LocalStorage con React, esto se aprende en un curso de JavaScript para que puedas profundisar un poco más pero para este capitulo será más resumido.

**Comando Especiales:**
```javaScript
//Todos estos comandos se deben ejecutar en la consola de la pagina web 
localStorage

localStorage.getItem('NameKey')

localStorage.setItem('NameKey','Value')

localStorage.removeItem('NameKey')
```

ahora para este capitulo vamos a recordar que nosotros para los TodoItem.js tenemos un array de json. 

```javaScript
const defaultTodos=[
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Ver la pelicula del conjuro', completed: true},
  {text: 'Comprar pan', completed: false},
]
```

pero ahora ya no haremos eso si no, aprovecharemos el mecanismo de localStorage y ejecutaremos lo siguiente para poder ver nuestros defaultTodos

```javaScript

//Todo ejecutado en la consola de la web
//Paso 1 crear nuestros defaultTodos
const defaultTodos=[
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Ver la pelicula del conjuro', completed: true},
  {text: 'Comprar pan', completed: false},
]
//Paso 2 parsear para que sea en string y no un array de Jsons
const stringifiedTodos= JSON.stringify(defaultTodos);
//podemos verificar que se creo correctamente
stringifiedTodos
//Paso 3 guardarlo en localStorage
localStorage.setItem('TODOS_V1',stringifiedTodos);
//Podemos verificar
localStorage.getItem('TODOS_V1')
//guardarlo en una variable
const localStorageTodos = localStorage.getItem('TODOS_V1');
let parsedTodos= JSON.parse(localStorageTodos);

```
