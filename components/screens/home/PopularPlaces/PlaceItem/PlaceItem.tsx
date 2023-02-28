import s from './PlaceItem.module.css'
import {urlFor} from "@api/sanity/sanity";
import Link from "next/link";
import {IPlace} from "@/types/place";
import {FC} from "preact/compat";

const PlaceItem: FC<{ place: IPlace }> = ({place}) => {
    return (
        <Link href={`/place/${place.slug.current.toLowerCase()}`}
              className={s.item}
              style={{backgroundImage: `url(${urlFor(place.imageLink).url()})`}}>
            <div className={s.heading}>
                {place.location.city + ', ' + place.location.country}
            </div>
        </Link>
    )
}
export default PlaceItem