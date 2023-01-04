import s from './PopularPlaces.module.css'
import {IPlace} from "../../../../types/place";
import {FC} from "react";
interface IPopularPlaces {
    places: IPlace[]
}
const PopularPlaces: FC<IPopularPlaces> = ({places}) => {
    return (
        <div className={s.PopularPlaces}>
            <h2>Popular places</h2>
            <div className={s.list}>
            {places.map(place => (
                <div
                    className={s.item}
                    key={place.slug}
                    style={{backgroundImage: `url(${place.imageLink})`}}>
                    <div className={s.heading}>
                        {place.location.city + ', ' + place.location.country}
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default PopularPlaces;