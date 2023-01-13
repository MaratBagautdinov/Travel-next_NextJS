import HomeHeader from "./header/HomeHeader";
import PopularPlaces from "./PopularPlaces/PopularPlaces";
import s from './Home.module.css'
import {useState} from "react";


const Home = ({initialPlaces}) =>{
    const [places, setPlaces] = useState(initialPlaces);
    return (
        <div className={s.Home}>
            <HomeHeader initialPlaces={initialPlaces} setPlaces={setPlaces}/>
            <PopularPlaces places={places}/>
        </div>
    )
}

export default Home