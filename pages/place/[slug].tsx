import Layout from "@/common/footer/Layout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IPlace} from "@/types/place";
import PlacePage from "@screens/placePage/PlacePage";
import Meta from "@meta";
import {sanityClient} from "@api/sanity/sanity";
import {getPlace, getPlaces} from "@api/sanity/queries";

export interface IPlacePage {
  place:IPlace
}
const Place:NextPage<IPlacePage> = ({place}) => {
  return <Layout>
    <Meta title={place.location.city} description={place.location.city}/>
    <PlacePage place={place}/>
  </Layout>
}


export const getStaticPaths: GetStaticPaths = async() =>{
  const res = await sanityClient.fetch(getPlaces('slug'))
  const paths = res.map(place => ({
    params: {slug: place.slug.current}
  }));
  return{paths, fallback: 'blocking'}
}
export const getStaticProps: GetStaticProps = async({params}) =>{
  const place = await sanityClient.fetch(getPlace(`${params.slug}`))
  return{
    props:{ place }
  }
}
export default Place