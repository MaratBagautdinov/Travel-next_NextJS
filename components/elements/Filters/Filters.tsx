import s from './Filters.module.css'
import {FC, useState} from "react";
import cn from 'classnames';
const cities = [
    {location: 'Paris'},
    {location: 'Moscow'},
    {location: 'Brazil'},
    {location: 'Norway'},
    {location: 'Minsk'},
    {location: 'Kiev'}
]

const Filters:FC = () => {
    const [filter, setFilter] = useState('')
    return (
        <div className={s.Filters}>
            {cities.map(city =>
                <button
                    onClick={()=> setFilter(city.location)}
                    key={city.location}
                className={cn({
                    [s.active]:city.location === filter
                })}>
                    {city.location}
                </button>
            )}
        </div>
    );
};

export default Filters;