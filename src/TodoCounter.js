import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return (
      <h1 className='TodoCounter'>
        Completed <span>{completed}</span> to <span>{total}</span> TODO</h1>
    );
  }

export { TodoCounter }