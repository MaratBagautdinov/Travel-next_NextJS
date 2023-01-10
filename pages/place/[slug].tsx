import Layout from "@/common/footer/Layout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {API_URL} from "../../constants";
import {IPlace} from "@/types/place";
import PlacePage from "../../components/elements/placePage/PlacePage";
import loginUser from "../api/loginUser";
import {useState} from "react";
import {IUsers} from "@/types/users";
import Meta from "../../components/utills/Meta";

export interface IPlacePage {
  place:IPlace
  FavCheck: boolean
}
const Place:NextPage<IPlacePage> = ({place, FavCheck}) => {
  return <Layout>
    <Meta title={place.location.city} description={place.description}/>
    <PlacePage place={place}
               FavCheck={FavCheck}
    />
  </Layout>
}


export const getStaticPaths: GetStaticPaths = async() =>{
  const res = await fetch(`${API_URL}/places`);
  const places = await res.json();
  const paths = places.map(place => ({
    params: {slug: place.location.city.toLowerCase()}
  }));
  return{paths, fallback: true}
}
export const getStaticProps: GetStaticProps = async({params}) =>{
  const placeID = await fetch(`${API_URL}/places/${params.slug}`);
  const place = await placeID.json()
  const userID = await fetch(`${API_URL}/users/${loginUser}`)
  const user = await userID.json()
  const FavPlace = user.favoritePlaces.find(id =>
      id === place.id
  )
  const FavCheck = !!(FavPlace !== undefined || '')
  return{
    props:{
      FavCheck, place
    }
  }
}
export default Place