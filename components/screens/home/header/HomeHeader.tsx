import s from './Header.module.css'
import mapImage from '../../../../public/world-map.png'
import Filters from "./Filters/Filters";
import {FC, useCallback, useEffect, useState} from "react";
import Input from "@/common/Input/Input";
import {IPlace} from "@/types/place";
interface IHomeHead{
    setPlaces
    initialPlaces:IPlace[]
}
const HomeHeader:FC<IHomeHead> = ({setPlaces, initialPlaces}) => {
    const [filter, setFilter] = useState('');
    useEffect(()=>{
        if(filter) {
            setPlaces(initialPlaces.filter(place =>
                place.location.city.toUpperCase().includes(filter.toUpperCase()) ||
                place.location.country.toUpperCase().includes(filter.toUpperCase()))
            )
        } else {
            setPlaces(initialPlaces);
        }
    },[filter, setPlaces, initialPlaces])

  return (
      <header className={s.section} style={{backgroundImage: `url('${mapImage.src}')`}}>
          <h1>best places for trip</h1>
          <Input
              icon={'search'}
              placeholder={'Search place...'}
              value={filter}
              setValue={setFilter}
          />
          <Filters filter={filter} setFilter={setFilter} initialPlaces={initialPlaces}/>
      </header>
  )
}

export default HomeHeader