import s from './Header.module.css'
import mapImage from '../../../../public/world-map.png'
import Filters from "./Filters/Filters";
import { useEffect, useState} from "react";
import Input from "@/common/Input/Input";

const HomeHeader = ({setPlaces, initialPlaces}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [value, setValue] = useState('');
    useEffect(()=>{
        if(value) {
            setPlaces(initialPlaces.filter(place =>
                place.location.city.toUpperCase().includes(value.toUpperCase()) ||
                place.location.country.toUpperCase().includes(value.toUpperCase()))
            )
        } else {
            setPlaces(initialPlaces);
        }
        setFilter(value)
        setSearchTerm(value)
    },[value])
    useEffect(()=>{
        setValue(searchTerm)
    },[searchTerm])
    useEffect(()=>{
        setValue(filter)
    },[filter])

  return (
      <header className={s.section} style={{backgroundImage: `url('${mapImage.src}')`}}>
          <h1>best places for trip</h1>
          <Input
              icon={'search'}
              placeholder={'Search place...'}
              value={searchTerm}
              setValue={setSearchTerm}
          />
          <Filters filter={filter} setFilter={setFilter} initialPlaces={initialPlaces}/>
      </header>
  )
}

export default HomeHeader