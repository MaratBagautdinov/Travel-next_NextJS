import Layout from "@/common/footer/Layout";
import {GetStaticProps, NextPage} from "next";
import {IPlace} from "@/types/place";
import {useState} from "react";
import Home from "@screens/home/Home";
import Meta from "@meta";
import {sanityClient} from "@api/sanity/sanity";
import {getPlaces} from "@api/sanity/queries";

interface IApp {
    initialPlaces: IPlace[]
}
const App:NextPage<IApp> = ({initialPlaces}) => {
    return (
        <Layout>
            <Meta title='Best places for trip' description='Best routs for traveling'/>
            <Home initialPlaces={initialPlaces}/>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps =
    async () => {
        const initialPlaces = await sanityClient.fetch(getPlaces('imageLink, slug{current}'))
      return {
            props:{
                initialPlaces
            }
          }
    }

export default App