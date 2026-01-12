import logo from './platzi.webp';
import './App.css';

//nuestro primer componente
function App() {
 
  return (
    //esto es JSX combinar JavaScript con HTML y son elementos de React
    <div className="App">
      {/* llamando a nuestro componente de REACT dentro de REACT */}
       <TodoItem /> 
       <TodoItem /> 
       <TodoItem />   
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Aprender React</p>
      <span>X</span>
    </li>
  );
}

export default App;