import { Footerdown } from "./Footerdown"
import { FooterTop } from "./Footertop"
import { Home1 } from "./Home1"
import { Home2 } from "./Home2"
import { Navbar } from "./Navbar"

export const Home = () => {
   return(
       <div>
           <Navbar />
           <Home1 />
           <Home2 />
           <FooterTop />
           <Footerdown />
       </div>
   )
}