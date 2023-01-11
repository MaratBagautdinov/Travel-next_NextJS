import Layout from "@/common/footer/Layout";
import {GetStaticProps, NextPage} from "next";
import {ICountries, IPlace} from "@/types/place";
import {useState} from "react";
import Home from "../components/elements/home/Home";
import Meta from "@meta";
import {sanityClient} from "@api/sanity/sanity";
import {getCountries, getPlaces} from "@api/sanity/queries";

interface IApp {
    initialPlaces: IPlace[],
    initialCountries: ICountries[]
}
const App:NextPage<IApp> = ({initialPlaces, initialCountries}) => {
    const [places, setPlaces] = useState(initialPlaces);
    return (
        <Layout>
            <Meta title='Best places for trip' description='Best routs for traveling'/>
            <Home initialCountries={initialCountries} initialPlaces ={initialPlaces} places={places} setPlaces={setPlaces}/>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps =
    async () => {
        const initialPlaces = await sanityClient.fetch(getPlaces('imageLink, slug{current}'))
        const initialCountries = await sanityClient.fetch(getCountries)
      return {
            props:{
                initialPlaces,
                initialCountries
            }
          }
    }

export default App