import Layout from "../components/common/footer/Layout";
import {GetStaticProps, NextPage} from "next";
import {ICountries, IPlace} from "../types/place";
import {API_URL} from "../constants";
import {useState} from "react";
import Home from "../components/elements/home/Home";
interface IApp {
    initialPlaces: IPlace[],
    initialCountries: ICountries[]
}
const App:NextPage<IApp> = ({initialPlaces, initialCountries}) => {
    const [places, setPlaces] = useState(initialPlaces);
    return (
        <Layout>
            <Home initialCountries={initialCountries} initialPlaces ={initialPlaces} places={places} setPlaces={setPlaces}/>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps =
    async () => {
        const Places = await fetch(`${API_URL}/places`)
        const initialPlaces = await Places.json()
        const Countries = await fetch(`${API_URL}/countries`)
        const initialCountries = await Countries.json()
      return {
            props:{
                initialPlaces,
                initialCountries
            }
          }
    }

    export default App