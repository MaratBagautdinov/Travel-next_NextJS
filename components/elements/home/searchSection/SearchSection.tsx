import s from './SearchSection.module.css'
import {FC} from "react";
import Search from "../Search/Search";
import Filters from "../../Filters/Filters";
import mapImage from '../../../../images/world-map.png'

const SearchSection:FC = () => {
  return <section className={s.section} style={{backgroundImage: `url('${mapImage.src}')`}}>
      <div>
          <h1>Best places for trip</h1>
          <Search/>
          <Filters/>
      </div>
  </section>
}

export default SearchSection