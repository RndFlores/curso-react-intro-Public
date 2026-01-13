import { ReactComponent  as CheckSVG} from './resource/check.svg';
import { ReactComponent as DeleteSVG } from './resource/delete.svg';

const iconTypes={
    "check": <CheckSVG />,
    "delete": <DeleteSVG />

}

function TodoIcon({ type, color }){
    return(
        <span className={`Icon Icon-svg Icon-${type}`}
        >
            {iconTypes[type]}
        </span>
    )
}

export {TodoIcon};  