import Layout from "../components/common/footer/Layout";
import {GetStaticProps, NextPage} from "next";
import {IPlace} from "../types/place";
import {API_URL} from "../constants";
import {useState} from "react";
import Home from "../components/elements/home/Home";
interface IApp {
    initialPlaces: IPlace[]
}
const App:NextPage<IApp> = ({initialPlaces}) => {
    const [places, setPlaces] = useState(initialPlaces);
    return (
        <Layout>
            <Home places={places} setPlaces={setPlaces}/>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps =
    async () =>{
    const result = await fetch(`${API_URL}/places`)
    const initialPlaces = await result.json()
  return {
        props:{
            initialPlaces
        }
      }
    }

    export default App