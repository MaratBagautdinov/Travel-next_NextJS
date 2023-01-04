import Footer from "./footer";

const Layout = (props) => {
  return(
      <>
          <div>
              {props.children}
          </div>
          <Footer/>
      </>
  )
}

export default Layout