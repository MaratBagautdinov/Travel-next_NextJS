import s from './Search.module.css'
import {FC, KeyboardEvent, useState} from "react";
import {IPlace} from "../../../../../types/place";
import {TypeSetState} from "../../../../../types/common";

interface ISearch {
  setPlaces: TypeSetState<IPlace[]>
}
const Search: FC<ISearch> = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchHandler = (e:KeyboardEvent<HTMLInputElement>) => {
      if(e.key === 'Enter') {
        console.log('press')
      };
  }
  return <div className={s.search}>
    <span className='material-icons-outlined'>search</span>
    <input
        type="text"
        onChange={e=> setSearchTerm(e.target.value)}
        onKeyPress={searchHandler}
        value={searchTerm}
        placeholder='Search place...'/>
  </div>
}

export default Search