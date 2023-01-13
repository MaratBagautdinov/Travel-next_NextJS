import s from './Filters.module.css'
import {FC} from "react";
import {IPlace} from "@/types/place";
import uniqBy from "lodash/uniqBy";
interface IFilters{
    initialPlaces: IPlace[],
    filter,
    setFilter,
}

const Filters:FC<IFilters> = ({setFilter, initialPlaces, filter}) => {
    return (
        <div className={s.Filters}>
            {uniqBy(initialPlaces, 'location.country').map(place =>
                <button
                    onClick={()=> setFilter(place.location.country)}
                    key={place.location.country}
                    className={(place.location.country.toUpperCase() === filter.toUpperCase()) ? s.active : ''}
                >
                    {place.location.country}
                </button>
            )}
        </div>
    );
};

export default Filters;