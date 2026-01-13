import './TodoItem.css';

function TodoItem({ text, completed, onDelete, onComplete }) { // Asumo que luego agregarás funciones
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        // onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}>
        {text}
      </p>
      <span 
        className="Icon Icon-delete"
        // onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };