import {useRouter} from "next/router";
import Layout from "../../components/common/footer/Layout";

const Place = () => {
  const router = useRouter()
  return <Layout>
    Place {router.query.slug}
  </Layout>
}
export default Place