import s from './HeaderPlace.module.css'
import {IPlace} from "../../../../types/place";
import {FC} from "react";
interface IHeaderPlace {
    place:IPlace
}
const HeaderPlace:FC<IHeaderPlace> = ({place}) =>{
    return(
        <div className={s.HeaderPlace} style={{backgroundImage:`url(${place.imageLink})`}}>
            <div className={s.icons}>
                <button className="material-icons-outlined">arrow_back_ios</button>
                <button className="material-icons-outlined">bookmark_border</button>
            </div>
        </div>
    )
}
export default HeaderPlace