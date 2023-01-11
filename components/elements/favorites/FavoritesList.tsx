import s from "./FavoritesList.module.css";
import PlaceItem from "../home/PopularPlaces/PlaceItem/PlaceItem";

const FavoritesList = ({FavPlaces}) =>{
    return(
        <div className={s.FavoritesList}>
            <h2>My favorite places </h2>
            <div className={s.list}>
                {FavPlaces.map(place =>
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
    )
}

export default FavoritesList