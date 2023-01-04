import Layout from "../components/common/footer/Layout";
import {GetStaticProps, NextPage} from "next";
import {IPlace} from "../components/types/place";
import SearchSection from "../components/elements/home/searchSection/SearchSection";
import PopularPlaces from "../components/elements/home/PopularPlaces/PopularPlaces";
import {API_URL} from "../constants";

interface IHome {
  places: IPlace[]
}

const Home:NextPage<IHome> = ({places}) => {
  return <Layout>
      <SearchSection/>
      <PopularPlaces places={places}/>
  </Layout>
}

export const getStaticProps: GetStaticProps =
    async () =>{
    const result = await fetch(`${API_URL}/places`)
    const places = await result.json()
  return {
        props:{
          places
        }
      }
    }

    export default Home