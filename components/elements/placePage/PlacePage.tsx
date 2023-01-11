import s from './PlacePage.module.css'
import {FC} from "react";
import HeaderPlace from "./HeaderPlace/HeaderPlace";
import Details from "./Details/Details";
import {IPlacePage} from "../../../pages/place/[slug]";

const PlacePage:FC<IPlacePage> = ({ FavCheck, place}) =>{
    return(
        <div className={s.placePage}>
            <HeaderPlace
                place={place}
                FavCheck={FavCheck}/>
            <Details place={place}/>
        </div>
    )
}
export default PlacePage