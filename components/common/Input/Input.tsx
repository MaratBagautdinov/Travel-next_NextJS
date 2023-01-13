import s from './Input.module.css'

const Input = ({value, setValue, placeholder, icon}) => {
  return (
      <div className={s.search}>
        <span className='material-icons-outlined'>{icon}</span>
        <input
        type="text"
        onChange={(e)=>setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
        />
      </div>
  )
}
export default Input