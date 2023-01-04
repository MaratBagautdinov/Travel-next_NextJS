import Layout from "../components/common/footer/Layout";
import {GetStaticProps, NextPage} from "next";
import {IPlace} from "../components/types/place";
import SearchSection from "../components/elements/home/searchSection/SearchSection";

interface IHome {
  places: IPlace[]
}

const Home:NextPage<IHome> = ({places}) => {
  return <Layout>
    <SearchSection/>
  </Layout>
}

export const getStaticProps: GetStaticProps =
    async () =>{
    const result = await fetch('http://localhost:3000/api/places')
    const places = await result.json()
  return {
        props:{
          places
        }
      }
    }

    export default Home