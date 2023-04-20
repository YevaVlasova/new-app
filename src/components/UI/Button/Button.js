import './Button.scss';
function Button(props) {
    const Tag = props.linkTo ? "a" : "button";
    return (
        <Tag 
            className={`btn ${props.addClass || ""}`} 
            type={props.type} 
            href={props.linkTo}
        >
            {props.icon}
            <span className="btn__text">{props.title}</span>
        </Tag>
    );
}

export default Button;