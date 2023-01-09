import Navbar from "./component/Navbar";


export default function App({ Component, pageProps }) {
  return<>
 <Navbar/>
   <Component {...pageProps} />
  </>
  
}