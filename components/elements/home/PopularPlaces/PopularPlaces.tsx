import s from './PopularPlaces.module.css'
import {IPlace} from "@/types/place";
import {FC} from "react";
import Link from "next/link";
interface IPopularPlaces {
    places: IPlace[]
}
const PopularPlaces: FC<IPopularPlaces> = ({places}) => {
    return (
        <div className={s.PopularPlaces}>
            <h2>Popular places</h2>
            <div className={s.list}>
            {places.map(place => (
                <Link href={`/place/${place.location.city.toLowerCase()}`}
                    className={s.item}
                    key={place.id}
                    style={{backgroundImage: `url(${place.imageLink})`}}>
                    <div className={s.heading}>
                        {place.location.city + ', ' + place.location.country}
                    </div>
                </Link>
            ))}
            </div>
        </div>
    );
};

export default PopularPlaces;