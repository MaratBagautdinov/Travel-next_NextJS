import s from './Filters.module.css'
import {FC} from "react";

const cities = [
    {location: 'Paris'},
    {location: 'Moscow'},
    {location: 'Brazil'},
    {location: 'Norway'},
    {location: 'Minsk'},
]

const Filters:FC = () => {
    return (
        <div className={s.Filters}>
            {cities.map(city =>
                <button key={city.location}>{city.location}</button>
            )}
        </div>
    );
};

export default Filters;