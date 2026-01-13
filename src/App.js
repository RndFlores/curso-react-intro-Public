import React from 'react';
import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';  
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const defaultTodos=[
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Ver la pelicula del conjuro', completed: true},
  {text: 'Comprar pan', completed: false},
]

//nuestro primer componente
function App() {
 
  return (
    //esto es JSX combinar JavaScript con HTML y son elementos de React
    // <div className="App">
    // <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edita el archivo <code>src/App.js</code> y guarda para recargar.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://platzi.com/reactjs"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Aprendamos React
    //     </a>
    //   </header>   
    // </div>
    // en el React.Fragment hara que en el navegador salga invisible es decir no se veria como un div o algo y no afecte con nuestra estructura de la aplicacion

    <React.Fragment> 
      {/* llamando a nuestro componente de REACT dentro de REACT */}
       
       <TodoCounter completed={16} total={25}/>
       
       <TodoSearch />

       <TodoList>
        {/* map crea un array a partir de larray inicial */}
        {defaultTodos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
       </TodoList>

       <CreateTodoButton />
    </React.Fragment>
  );
}



export default App; //exportando por defecto