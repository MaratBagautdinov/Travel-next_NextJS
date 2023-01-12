import Layout from "@/common/footer/Layout";
import {GetStaticProps} from "next";
import {IPlace} from "@/types/place";
import Meta from "@meta";
import {sanityClient} from "@api/sanity/sanity";
import {getPlaces} from "@api/sanity/queries";
import FavoritesList from "../components/elements/favorites/FavoritesList";
import {NextPageAuth} from "../components/providers/checkRole";
import {useSession} from "next-auth/react";
import {useProjectId} from "sanity";
interface IFavorites{
    places: IPlace[]
}

const Favorites:NextPageAuth<IFavorites> = ({places}) => {
    const {data} = useSession()
    const FavPlaces = places.filter(place =>
        place.subscribers.find(user => (user === data.user.email))
    )
    return <Layout>
        <Meta title={'Favorites'} description='Index'/>
        <FavoritesList FavPlaces={FavPlaces}/>
    </Layout>
}
Favorites.isOnlyUser = true
export const getStaticProps: GetStaticProps =
    async () => {
        const places = await sanityClient.fetch(getPlaces('imageLink, slug{current}, subscribers'))
        return { props: { places } }
    }
export default Favorites