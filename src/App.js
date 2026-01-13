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
  //cerando state de Todos
  const [todos, setTodos]=React.useState(defaultTodos);

  //estado para el buscador
  const [searchValue, setSearchValue]=React.useState('');
  console.log('Los usuarios buscan: ' + searchValue);
  
  const searchedTodos = todos.filter( todo => {
    const todoText = todo.text.toLocaleLowerCase();
    const todoSearch = searchValue.toLocaleLowerCase();
    return todoText.includes(todoSearch);
    // return todo.text.toLowerCase.includes(searchValue.toLocaleLowerCase());
  });


  //funcion para saber que TODO se marco como completado
  const completeTodo = (text)=>{
    const newTodos= [...todos];//creamos una copia del array
    const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
    );//buscamos el indice del TODO
    newTodos[todoIndex].completed = true;//modificamos el valor de completed a true
    setTodos(newTodos);
  }

  //funcion para eliminar
  // const onDelete= (text) =>{
  //   const newTodos = todos.filter(todo=> todo.text != text);
  //   setTodos(newTodos); 
  // };
  const onDelete= (text) =>{
    const newTodos= [...todos];//creamos una copia del array
    const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
    );//buscamos el indice del TODO
    newTodos.splice(todoIndex, 1);//eliminamos el TODO en el indice encontrado
    setTodos(newTodos);
  };


  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
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
       
       <TodoCounter completed={completedTodos} total={totalTodos}/>
       
       <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}  />

       <TodoList>
        {/* map crea un array a partir de larray inicial */}
        {searchedTodos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)} //envolvemos en una funcion para que no se ejecute inmediatamente y no rompa
          onDelete={()=> onDelete(todo.text)}
          />
        ))}
       </TodoList>

       <CreateTodoButton />
    </React.Fragment>
  );
}



export default App; //exportando por defecto