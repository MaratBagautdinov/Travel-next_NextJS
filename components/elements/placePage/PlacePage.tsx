import s from './PlacePage.module.css'
import {IPlace} from "../../../types/place";
import {FC} from "react";
import HeaderPlace from "./HeaderPlace/HeaderPlace";
import Details from "./Details/Details";
import BookTrip from "./BookTrip/BookTrip";
interface IPlacePage {
    place:IPlace
}
const PlacePage:FC<IPlacePage> = ({place}) =>{
    return(
        <div className={s.placePage}>
            <HeaderPlace place={place}/>
            <Details place={place}/>
            <BookTrip place={place}/>
        </div>
    )
}
export default PlacePage