import {useRouter} from "next/router";
import Layout from "../../components/common/footer/Layout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {API_URL} from "../../constants";
import {IPlace} from "../../types/place";

interface IPlacePage {
  place:IPlace
}
const Place:NextPage<IPlacePage> = ({place}) => {
  return <Layout>
    Place {place.id}
  </Layout>
}
export const getStaticPaths: GetStaticPaths = async() =>{
  const res = await fetch(`${API_URL}/places`);
  const places = await res.json();
  const paths = places.map(place => ({
    params: {id: place.id.toString()}
  }));
  return{paths, fallback: true}
}
export const getStaticProps: GetStaticProps = async({params}) =>{
  const res = await fetch(`${API_URL}/places/${params.id}`);
  const place = await res.json()
  console.log(place)
  return{
    props:{
      place
    }
  }
}
export default Place