import s from './HeaderPlace.module.css'
import {FC} from "react";
import Link from "next/link";
import {IPlacePage} from "../../../../pages/place/[slug]";
import {urlFor} from "@api/sanity/sanity";
import FavButton from "./FavButton";
import {useSession} from "next-auth/react";

const HeaderPlace:FC<IPlacePage> = ({place}) =>{
    const {data} = useSession()
    return(
        <div style={{width:'100%'}}>
            <div className={s.HeaderPlace} style={{backgroundImage:`url(${urlFor(place.imageLink).url()})`}}>
                <div className={s.icons}>
                    <button>
                        <Link rel="stylesheet" href="/">
                            <span className="material-icons-outlined">arrow_back_ios</span>
                        </Link>
                    </button>
                    {data && <FavButton placeID={place._id} subscribers={place.subscribers}/>}
                </div>
            </div>
        </div>

    )
}
export default HeaderPlace