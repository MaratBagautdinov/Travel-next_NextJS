import HomeHeader from "./header/HomeHeader";
import PopularPlaces from "./PopularPlaces/PopularPlaces";

const Home = ({setPlaces, places}) =>{
    return (
        <>
            <HomeHeader setPlaces={setPlaces}/>
            <PopularPlaces places={places}/>
        </>
    )
}

export default Home