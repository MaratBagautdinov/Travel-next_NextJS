import s from './Filters.module.css'
import {FC} from "react";
import cn from 'classnames';
import {ICountries} from "@/types/place";
interface IFilters{
    initialCountries: ICountries[],
    filter,
    setFilter,
}

const Filters:FC<IFilters> = ({setFilter, initialCountries, filter}) => {
    return (
        <div className={s.Filters}>
            {initialCountries.map(country =>
                <button
                    onClick={()=> setFilter(country.title)}
                    key={country._id}
                    className={cn({[s.active]:country.title.toUpperCase() === filter})}
                >
                    {country.title}
                </button>
            )}
        </div>
    );
};

export default Filters;