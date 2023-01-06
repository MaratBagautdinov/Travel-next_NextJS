import s from './Header.module.css'
import Search from "./Search/Search";
import mapImage from '../../../../images/world-map.png'
import Filters from "./Filters/Filters";
import {useEffect, useState} from "react";

const HomeHeader = ({setPlaces, initialPlaces, initialCountries}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [value, setValue] = useState('');
    useEffect(()=>{
        if(value) {
            setPlaces(initialPlaces.filter(place =>
                place.location.city.toLowerCase().includes(value) ||
                place.location.country.toLowerCase().includes(value))
            )
        } else {
            setPlaces(initialPlaces);
        }
        setFilter(value)
        setSearchTerm(value)
    },[value])
    useEffect(()=>{
        setValue(searchTerm.toLowerCase())
    },[searchTerm])
    useEffect(()=>{
        setValue(filter.toLowerCase())
    },[filter])

  return (
      <header className={s.section} style={{backgroundImage: `url('${mapImage.src}')`}}>
          <h1>best places for trip</h1>
          <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
          <Filters filter={filter} setFilter={setFilter} initialCountries={initialCountries}/>
      </header>
  )
}

export default HomeHeader