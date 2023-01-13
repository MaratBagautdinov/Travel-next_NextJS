import s from "./FavoritesList.module.css";
import PlaceItem from "../home/PopularPlaces/PlaceItem/PlaceItem";

const FavoritesList = ({FavPlaces}) =>{
    return(
        <div className={s.FavoritesList}>
            <h1>Favorites</h1>
            <div className={s.list}>
                {FavPlaces.map(place =>
                    <PlaceItem
                        id={place._id}
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