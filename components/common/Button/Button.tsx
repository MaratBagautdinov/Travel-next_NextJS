import s from './Button.module.css'
const Button = ({icon, title, onClick}) =>{
    return(
        <button
            className={s.Button}
            onClick={onClick}
        >
            {title}
            <span className="material-icons-outlined">{icon}</span>
        </button>
    )
}
export default Button