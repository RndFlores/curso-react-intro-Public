import "./TodoList.css";

function TodoList(props) {
  return(
    <ul>
      {/* REACT hace que todo lo que esta dentro de nuestro componente sea children
      por esl el <TodoItem /> sería el children */}
        {props.children}

    </ul>
  );

}

export { TodoList }; 