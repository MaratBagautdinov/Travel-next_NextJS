import Footer from "./footer";
import {useSession} from "next-auth/react";

const Layout = (props) => {
  return(
      <>
          <div style={{maxWidth:'480px',margin:'auto', paddingBottom: '100px'}}>
              {props.children}
          </div>
          <Footer />
      </>
  )
}

export default Layout