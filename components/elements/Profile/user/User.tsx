import s from './User.module.css'
import {IUsers} from "@/types/users";
import {FC} from "react";
import {IPlace} from "@/types/place";

interface IUser{
    user: IUsers
    FavPlaces: IPlace[]
}

const User:FC<IUser> = ({user, FavPlaces}) =>{
    return(
        <div className={s.User}>
            <p>{user.name}</p>
            <br/>
            Favorite places:
            <br/>
            {FavPlaces.map(pl => <p>{pl.location.city}</p>)}
            {}
        </div>
    )
}

export default User


