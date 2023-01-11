import s from './HeaderPlace.module.css'
import {FC, useEffect, useState} from "react";
import Link from "next/link";
import {IPlacePage} from "../../../../pages/place/[slug]";
import {urlFor} from "../../../../pages/api/sanity/sanity";

const HeaderPlace:FC<IPlacePage> = ({FavCheck, place}) =>{
    const [favoriteRadio, setFavoriteRadio] = useState(FavCheck)

    return(
        <div style={{width:'100%'}}>
            <div className={s.HeaderPlace} style={{backgroundImage:`url(${urlFor(place.imageLink).url()})`}}>
                <div className={s.icons}>
                    <button><Link rel="stylesheet" href="/">
                        <span className="material-icons-outlined">arrow_back_ios</span>
                    </Link></button>
                        <button
                        onClick={()=> setFavoriteRadio(!favoriteRadio)}
                        className={favoriteRadio === true ? s.active : ''}
                    ><span className="material-icons-outlined">bookmark_border</span></button>
                </div>
            </div>
        </div>

    )
}
export default HeaderPlace