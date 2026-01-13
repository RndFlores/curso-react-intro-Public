import './TodoCounter.css';
// const styles={
//   backgroundColor: '#61dafb',
//   padding: '48px',
//   borderRadius: '10px',
//   fontSize: '24px',
//   textAlign: 'center',
// }

//estos son los props y se diferencia de los parametros porque estos no son obligatorios 
function TodoCounter({total, completed}) {
  return(
    // <h1 style={styles}>
    <h1>
      Has completado {completed} de {total} TODOS
    </h1>
  );

}

export { TodoCounter }; 