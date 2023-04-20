import CheckmarkIcon from "../../icons/CheckmarkIcon";
import './Checkbox.scss';

function Checkbox(props) {
    return (
        <label className='checkbox'>
            <input type="checkbox" className='checkbox__input'/>
            <span className='checkbox__checkmark'>
                <CheckmarkIcon />
            </span>
            <span className='checkbox_title'>{props.title}</span>
        </label>
      );
}

export default Checkbox;