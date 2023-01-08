import s from './BookTrip.module.css'
import {FC} from "react";
import {IPlace} from "../../../../types/place";
interface IBookTrip {
    place:IPlace
}
const BookTrip:FC<IBookTrip> = ({place}) =>{
    return(
        <div className={s.BookTrip}>
            <button>
                Book a trip
                <span className="material-icons-outlined">arrow_forward</span>
            </button>
        </div>
    )
}
export default BookTrip