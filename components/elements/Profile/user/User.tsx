import s from './User.module.css'
import {IUsers} from "@/types/users";
import {FC} from "react";
import {IPlace} from "@/types/place";
import {urlFor} from "../../../../pages/api/sanity/sanity";
import PlaceItem from "../../home/PopularPlaces/PlaceItem/PlaceItem";

interface IUser{
    user: IUsers
    FavPlaces: IPlace[]
}

const User:FC<IUser> = ({user, FavPlaces}) =>{
    return(
        <div className={s.User}>
            <div className={s.info}>
                <img
                    className={s.logo}
                    src={urlFor(user.logo).url()}/>
                <p>{user.name}</p>
            </div>
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
            {}
        </div>
    )
}

export default User


