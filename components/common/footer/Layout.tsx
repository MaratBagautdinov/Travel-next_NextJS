import Footer from "./footer";

const Layout = (props) => {
  return(
      <>
          <div style={{maxWidth:'480px',margin:'auto', paddingBottom: '100px'}}>
              {props.children}
          </div>
          <Footer/>
      </>
  )
}

export default Layout