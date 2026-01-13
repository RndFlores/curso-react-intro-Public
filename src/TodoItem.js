
import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';
import './TodoItem.css';

function TodoItem({ text, completed, onDelete, onComplete }) { // Asumo que luego agregarás funciones
  return (
    <li className="TodoItem">
      {/* <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}>
        √
      </span> */}
      <CompleteIcon />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}>
        {text}
      </p>
      <DeleteIcon />
      {/* <span 
        className="Icon Icon-delete"
        onClick={onDelete}>
        X
      </span> */}
    </li>
  );
}

export { TodoItem };