import s from './Details.module.css'
import {FC, useState} from "react";
import {IPlace} from "@/types/place";
import MapFC from "./Map/MapFC";
import {PortableText} from "@api/sanity/sanity";
interface IDetails {
    place:IPlace
}
const Details:FC<IDetails> = ({place}) =>{
    const [TEXTorMAP, setTEXTorMAP] = useState(false)
    return(
        <div className={s.Details}>
            <div className={s.info}>
                <div className={s.location}>
                    <span className="material-icons-outlined">place</span>
                    {place.location.city}, {place.location.country}
                </div>
                <div className={s.info_under}>
                    <div className={s.rating}>
                        <span className="material-icons-outlined">star</span>
                        {place.rating} / 5
                    </div>
                    <div className={s.duration}>
                        <span className="material-icons-outlined">calendar_month</span>
                        {place.duration} Days
                    </div>
                </div>
                <button
                    className={s.TEXTorMAP}
                    onClick={()=>setTEXTorMAP(!TEXTorMAP)}
                >
                    <span>Open {TEXTorMAP ? 'map' : 'description'}</span>
                    <span className="material-icons-outlined">arrow_drop_down</span>
                </button>
            </div>
            <div>
                {TEXTorMAP ?
                    <span className={s.description}>{<PortableText value={place.description}/>}</span>
                :
                    <MapFC location={place.location}/>
                }
            </div>
        </div>
    )
}
export default Details