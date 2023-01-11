import s from './PopularPlaces.module.css'
import {IPlace} from "@/types/place";
import {FC} from "react";
import Link from "next/link";
import {urlFor} from "../../../../pages/api/sanity/sanity";
import PlaceItem from "./PlaceItem/PlaceItem";
interface IPopularPlaces {
    places: IPlace[]
}
const PopularPlaces: FC<IPopularPlaces> = ({places}) => {
    return (
        <div className={s.PopularPlaces}>
            <h2>Popular places</h2>
            <div className={s.list}>
            {places.map(place =>
                <PlaceItem
                    slug={place.slug.current.toLowerCase()}
                    key={place._id}
                    image={place.imageLink}
                    city={place.location.city}
                    country={place.location.country}
                />
            )}
            </div>
        </div>
    );
};

export default PopularPlaces;