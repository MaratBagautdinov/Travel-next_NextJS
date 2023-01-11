import s from './MapFC.module.css'
import {ILocation} from "@/types/place";
import {FC} from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Line,
    ZoomableGroup
} from "react-simple-maps";
interface IMap{
    location: ILocation
}
const geoUrl =
    'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'
const MapFC:FC<IMap> = ({location}) =>{
    return(
        <div className={s.map}>
            <div className={s.distance}>
                <span className="material-icons-outlined" style={{fontSize:".8rem"}}>place</span>
                <span className={s.count}>222 KM</span>
            </div>
            <ComposableMap
                projection="geoEqualEarth"
                projectionConfig={{
                    rotate: [0,0,0],
                    center: [60, 60],
                    scale: 200,
                }}
                width={240}
                height={155}
            >
                <ZoomableGroup zoom={0.3}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const isCurrent = geo.properties.name.toLowerCase() === location.country.toLowerCase()

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={isCurrent ? '#eb601e' : '#39373B'}
                                        stroke={isCurrent ? 'transparent' : '#111111'}
                                        style={{
                                            default: { outline: 'none' },
                                            hover: { outline: 'none' },
                                            pressed: { outline: 'none' },
                                        }}
                                    />
                                )
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    )
}

export default MapFC