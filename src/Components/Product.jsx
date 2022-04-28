import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Product.css";
import { Navbar } from "./Navbar";
import { Footerdown } from "./Footerdown";

export const Product = () => {
  const [productData, setProductData] = useState([]);
    // console.log(productData);

  const [filterData, setFilterData] = useState([]);

  //function getText
  const getText = (e) => {
    // console.log(e);
    if (e == "all") {
      setFilterData(productData);
    } else {
      const categoryData = productData.filter((el) => {
        return el.category == e;
      });
      setFilterData(categoryData);
    }
  };

  useEffect(() => {
    axios.get("https://alltopics-server.herokuapp.com/ALL_TOPICS").then((data) => {
      setProductData(data.data);
      setFilterData(data.data);
    });
  }, []);
  
  return (
    <>
      <Navbar/>
      <div  onClick={() => getText("all")} className="up" ><span className="up1">All</span> Topic</div>
      <div className="container-div">
        <div className="left-div">
        <div onClick={() => getText("all")}>
        <h5>ALL TOPICS</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>FILM-MAKING</h5>
      </div>
      <div onClick={() => getText("beat-boxing")}>
        <h5>BEAT BOXING</h5>
      </div>
      <div onClick={() => getText("content-creation")}>
        <h5>CONTENT CREATION</h5>{" "}
      </div>
      <div onClick={() => getText("beat-boxing")}>
        <h5>CONTENT CREATION</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>FILM PRODUCTION</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>NOVEL WRITING</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>ENTREPRENEURSHIP</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>MUSIC</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>FASHION BLOGGING</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>DESIGN</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>ILLUSTRATION</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>F&B</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>BAKING</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>EMCEEING</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>PERFORMING ARTS</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>STAND-UP COMEDY</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>IMPROV COMEDY</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>ARTIST MANAGEMENT</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>FOOD BLOGGING</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>CHEF</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>RADIO JOCKEY</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>PHOTOGRAPHY</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>RESTAURANT BUSINESS</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>WEB SERIES</h5>
      </div>
      <div onClick={() => getText("film-making")}>
        <h5>PERSONAL FINANCE</h5>
      </div>
          

          {/* jitne category hai utne div dala uper me aur "onclick" pe getText function ko call kiya jisme jo 'category' div me di hai wo getText function me dalna hai  */}
        </div>
       
        <div className="right-div">
          {filterData.map((el) => (
            <div className="image-div" key={el.id}>
              <img src={el.profile_img} alt="" height={"60%"} width={"100%"} />
              <div> <h3>{el.name}</h3></div>
              <div>{el.title}</div>
              <div> <p>{el.role}</p></div>
            </div>
          ))}
        </div>
      </div>
      <Footerdown />
    </>
  );
};