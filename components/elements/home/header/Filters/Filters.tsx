import s from './Filters.module.css'
import {FC} from "react";
import cn from 'classnames';
import { IPlace} from "@/types/place";
interface IFilters{
    initialPlaces: IPlace[],
    filter,
    setFilter,
}

const Filters:FC<IFilters> = ({setFilter, initialPlaces, filter}) => {
    return (
        <div className={s.Filters}>
            {initialPlaces.map(place =>
                <button
                    onClick={()=> setFilter(place.location.country)}
                    key={place.location.country}
                    className={cn({[s.active]:place.location.country.toUpperCase() === filter})}
                >
                    {place.location.country}
                </button>
            )}
        </div>
    );
};

export default Filters;