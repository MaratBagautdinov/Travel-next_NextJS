import s from './User.module.css'
import {IUsers} from "@/types/users";
import {FC} from "react";
import {IPlace} from "@/types/place";
import {urlFor} from "../../../../pages/api/sanity/sanity";
import PlaceItem from "../../home/PopularPlaces/PlaceItem/PlaceItem";
import {IProfile} from "../../../../pages/profile";

const User:FC<IProfile> = ({user}) =>{
    return(
        <div className={s.User}>
            <div className={s.info}>
                <img
                    className={s.logo}
                    src={urlFor(user.logo).url()}/>
                <p>{user.name}</p>
            </div>
            {}
        </div>
    )
}

export default User


