import Layout from "@/common/footer/Layout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IPlace} from "@/types/place";
import PlacePage from "../../components/elements/placePage/PlacePage";
import Meta from "../../components/utills/Meta";
import {PortableText, sanityClient} from "../api/sanity/sanity";
import {getPlace, getPlaces, getUser} from "../api/sanity/queries";

export interface IPlacePage {
  place:IPlace
  FavCheck: boolean
}
const Place:NextPage<IPlacePage> = ({place, FavCheck}) => {
  return <Layout>
    <Meta title={place.location.city} description={place.location.city}/>
    <PlacePage place={place} FavCheck={FavCheck}/>
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
  const user = await sanityClient.fetch(getUser(`{favoritePlaces}`))
  const FavPlace = user.favoritePlaces.find(fav => fav._ref === place._id)
  const FavCheck = !!(FavPlace !== undefined || '')
  return{
    props:{ FavCheck, place }
  }
}
export default Place