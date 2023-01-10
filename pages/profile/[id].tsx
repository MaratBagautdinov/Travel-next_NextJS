import Layout from "../../components/common/footer/Layout";
import User from "../../components/elements/Profile/user/User";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {API_URL} from "../../constants";
import {IUsers} from "@/types/users";
import {IPlace} from "@/types/place";
import loginUser from "../api/loginUser";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Meta from "../../components/utills/Meta";
interface IProfile{
    user: IUsers,
    FavPlaces: IPlace[]
}

const Profile:NextPage<IProfile> = ({user,FavPlaces}) => {
    const {push} = useRouter();
    useEffect(()=> {
        if(user.id !== loginUser){push(`/profile/login`)}
    },)
    return <Layout>
        <Meta title={user.name} description='Profile'/>
        <User FavPlaces={FavPlaces} user={user}/>
    </Layout>
}

export const getStaticPaths: GetStaticPaths = async() =>{
    const res = await fetch(`${API_URL}/users`);
    const users = await res.json();
    const paths = users.map(user => ({
        params: {id: user.id.toString()}
    }));
    return{paths, fallback: true}
}
export const getStaticProps: GetStaticProps =
    async ({params}) => {
        const resPlaces = await fetch(`${API_URL}/places`);
        const places = await resPlaces.json()
        const res = await fetch(`${API_URL}/users/${params.id}`)
        const user = await res.json()
        const FavPlaces = user.favoritePlaces.map(id =>
            places.find((pl) => (pl.id === id))
        )
        return {
            props:{
                user, FavPlaces
            }
        }
    }
export default Profile