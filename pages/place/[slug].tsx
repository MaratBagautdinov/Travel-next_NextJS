import Layout from "@/common/footer/Layout";
import {GetServerSideProps, NextPage} from "next";
import {IPlace} from "@/types/place";
import PlacePage from "@screens/placePage/PlacePage";
import Meta from "@meta";
import {sanityClient} from "@api/sanity/sanity";
import {getPlace} from "@api/sanity/queries";

export interface IPlacePage {
  place:IPlace
}
const Place:NextPage<IPlacePage> = ({place}) => {
  return <Layout>
    <Meta title={place.location.city} description={place.location.city}/>
    <PlacePage place={place}/>
  </Layout>
}

export const getServerSideProps: GetServerSideProps = async(context) =>{
  const place = await sanityClient.fetch(getPlace(`${context.params.slug}`))
  return{ props: { place } }
}
export default Place