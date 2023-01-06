import s from './Search.module.css'

const Search = ({searchTerm, setSearchTerm}) => {
  return <div className={s.search}>
    <span className='material-icons-outlined'>search</span>
    <input
        type="text"
        onChange={(e)=>setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder='Search place...'/>
  </div>
}

export default Search