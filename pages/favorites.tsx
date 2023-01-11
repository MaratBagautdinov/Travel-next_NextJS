import Layout from "@/common/footer/Layout";
import {GetStaticProps, NextPage} from "next";
import {IPlace} from "@/types/place";
import Meta from "@meta";
import {sanityClient} from "@api/sanity/sanity";
import {getPlaces, getUser} from "@api/sanity/queries";
import FavoritesList from "../components/elements/favorites/FavoritesList";
interface IFavorites{
    FavPlaces: IPlace[]
}

const Favorites:NextPage<IFavorites> = ({FavPlaces}) => {
    return <Layout>
        <Meta title={'Favorites'} description='Index'/>
        <FavoritesList FavPlaces={FavPlaces}/>
    </Layout>
}

export const getStaticProps: GetStaticProps =
    async () => {
        const userAllInfo = await sanityClient.fetch(getUser)
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
export default Favorites