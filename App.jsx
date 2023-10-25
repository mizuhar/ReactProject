import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import LayoutBottom from "./components/Layout-bottom"
import LayoutGeneric from "./components/Layout-generic"
import Main from "./components/Main-section"




export default function App() {


  return (
    <>
  {/* Basic */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/* Mobile Metas */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Site Metas */}
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Oxer</title>
  {/* slider stylesheet */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
  />
  {/* bootstrap core css */}
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  {/* fonts style */}
  <link
    href="https://fonts.googleapis.com/css?family=Baloo+Chettan|Dosis:400,600,700|Poppins:400,600,700&display=swap"
    rel="stylesheet"
  />
  {/* Custom styles for this template */}
  <link href="css/style.css" rel="stylesheet" />
  {/* responsive style */}
  <link href="css/responsive.css" rel="stylesheet" />
  <Header></Header>
  {/* about section */}
  <About></About>
  {/* end about section */}
  {/* class section */}
  <Main></Main>
  {/* end class section */}
  {/* blog section */}
 <LayoutGeneric></LayoutGeneric>
  {/* end blog section */}
  {/* client section */}
  <LayoutBottom></LayoutBottom>
  {/* end client section */}
  {/* info section */}
 <Footer></Footer>
  {/* end info section */}
  {/* owl carousel script */}
  {/* end owl carousel script */}
  {/* Google Map */}
  {/* End Google Map */}
</>


      
     
    
  )
}


