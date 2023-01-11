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
import {sanityClient} from "../api/sanity/sanity";
import {getPlaces, getUser} from "../api/sanity/queries";
interface IProfile{
    user: IUsers,
    FavPlaces: IPlace[]
}

const Profile:NextPage<IProfile> = ({user,FavPlaces}) => {
    const {push} = useRouter();
    useEffect(()=> {
        if(user._id !== loginUser._id){push(`/`)}
    },)
    return <Layout>
        <Meta title={user.name} description='Index'/>
        <User FavPlaces={FavPlaces} user={user}/>
    </Layout>
}

export const getStaticProps: GetStaticProps =
    async () => {
        const userAllInfo = await sanityClient.fetch(getUser(''))
        const places = await sanityClient.fetch(getPlaces('imageLink, slug{current}'))
        const FavPlaces = userAllInfo.favoritePlaces.map(id =>
            places.find(place => (place._id === id._ref))
        )
        const user = {
            _id: userAllInfo._id,
            name: userAllInfo.name,
            logo: userAllInfo.logo,
        }
        return { props: { user, FavPlaces } }
    }
export default Profile