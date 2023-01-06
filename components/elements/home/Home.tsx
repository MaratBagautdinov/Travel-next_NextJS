import HomeHeader from "./header/HomeHeader";
import PopularPlaces from "./PopularPlaces/PopularPlaces";
import s from './Home.module.css'

const Home = ({setPlaces, places, initialPlaces, initialCountries}) =>{
    return (
        <div className={s.Home}>
            <HomeHeader initialCountries={initialCountries} initialPlaces ={initialPlaces} setPlaces={setPlaces}/>
            <PopularPlaces places={places}/>
        </div>
    )
}

export default Home