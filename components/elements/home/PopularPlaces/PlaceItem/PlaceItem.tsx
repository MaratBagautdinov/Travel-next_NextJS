import s from './PlaceItem.module.css'
import {urlFor} from "@api/sanity/sanity";
import Link from "next/link";

const PlaceItem = ({slug, id, image, city, country}) => {
    return(
        <Link href={`/place/${slug}`}
              className={s.item}
              style={{backgroundImage: `url(${urlFor(image).url()})`}}>
            <div className={s.heading}>
                {city + ', ' + country}
            </div>
        </Link>
    )
}
export default PlaceItem