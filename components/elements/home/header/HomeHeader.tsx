import s from './Header.module.css'
import Search from "./Search/Search";
import mapImage from '../../../../images/world-map.png'
import Filters from "./Filters/Filters";

const HomeHeader = ({setPlaces}) => {
  return (
      <header className={s.section} style={{backgroundImage: `url('${mapImage.src}')`}}>
          <h1>best places for trip</h1>
          <Search setPlaces={setPlaces}/>
          <Filters setPlaces={setPlaces}/>
      </header>
  )
}

export default HomeHeader