import s from './PlaceItem.module.css'
import {urlFor} from "../../../../../pages/api/sanity/sanity";
import Link from "next/link";

const PlaceItem = ({slug, key, image, city, country}) => {
    return(
        <Link href={`/place/${slug}`}
              className={s.item}
              key={key}
              style={{backgroundImage: `url(${urlFor(image).url()})`}}>
            <div className={s.heading}>
                {city + ', ' + country}
            </div>
        </Link>
    )
}
export default PlaceItem