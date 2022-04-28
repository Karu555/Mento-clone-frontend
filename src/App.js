
import './App.css';
import { Home } from './Components/Home';
import { Home2 } from './Components/Home2';
import { Product } from './Components/Product';
import { Footerdown } from './Components/Footerdown';
import { FooterTop } from './Components/Footertop';
import { About } from './Components/About';
import { Navbar } from './Components/Navbar';
import { Topic } from './Components/Topic';
import { Home1 } from './Components/Home1';
import {BrowserRouter, Routes,route, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path={"/"} exact element={<Home/>}></Route>
      <Route path={"/AllTopics"} exact element={<Product/>}></Route>
      <Route path={"/about"} exact element={<About/>}></Route>
      <Route path={"/Topic"} exact element={<Topic/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
