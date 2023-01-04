import s from './Search.module.css'
import {useState} from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return <div className={s.search}>
    <span className='material-icons-outlined'>search</span>
    <input type="text" onChange={e=> setSearchTerm(e.target.value)} value={searchTerm} placeholder='Search place...'/>
  </div>
}

export default Search