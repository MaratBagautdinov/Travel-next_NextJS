import HomeHeader from "./header/HomeHeader";
import PopularPlaces from "./PopularPlaces/PopularPlaces";
import s from './Home.module.css'

const Home = ({setPlaces, places, initialPlaces}) =>{
    return (
        <div className={s.Home}>
            <HomeHeader initialPlaces={initialPlaces} setPlaces={setPlaces}/>
            <PopularPlaces places={places}/>
        </div>
    )
}

export default Home