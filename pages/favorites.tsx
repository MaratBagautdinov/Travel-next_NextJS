import Layout from "@/common/footer/Layout";
import {GetServerSideProps} from "next";
import {IPlace} from "@/types/place";
import Meta from "@meta";
import {sanityClient} from "@api/sanity/sanity";
import {getPlaces} from "@api/sanity/queries";
import FavoritesList from "@screens/favorites/FavoritesList";
import {NextPageAuth} from "../components/providers/checkRole";
import {useSession} from "next-auth/react";
interface IFavorites{
    initialPlaces: IPlace[]
}

const Favorites:NextPageAuth<IFavorites> = ({initialPlaces}) => {
    const {data} = useSession()
    const FavPlaces = initialPlaces.filter(place =>
        place.subscribers.find(user => (user === data.user.email))
    )
    return <Layout>
        <Meta title={'Favorites'} description='Index'/>
        <FavoritesList FavPlaces={FavPlaces}/>
    </Layout>
}
Favorites.isOnlyUser = true
export const getServerSideProps: GetServerSideProps = async(context) => {
    const initialPlaces = await sanityClient.fetch(getPlaces('imageLink, slug{current}, subscribers'))
    return { props: { initialPlaces } }
}
export default Favorites