import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { allTopics , handleError, handleloading} from "../Redux/action"
import {Link } from "react-router-dom"
import "./Home2.css"
// import { Home1 } from "./Home1"

const Home2 = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleloading())

        fetch("https://alltopics-server.herokuapp.com/ALL_TOPICS")
        .then((res) => res.json())
        .then((res) => dispatch(allTopics(res)))
        .catch(() => dispatch(handleError()))
    }, [])

    const data = useSelector((state) => state.allTopic);
    // console.log(data);
    const loading = useSelector((state) => state.isLoading);
    const error = useSelector((state) => state.isError);

    // const {id, name} = data

    if(loading){
        return(
            <div>Loading.......</div>
        )
    }

    
    if(error){
        return(
            <div>Somthing went wrong.....</div>
        )
    }
     
    return( 
       
    <div className="homemid"> 
        <h2>All Lesson</h2>    
         
        <div className="home2">{data.map((item) => {
            return (<div className="home21">
               <Link to="/Topic"> <img  src = {item.profile_img} alt = "" /> </Link>
                    <div>
                         <h2>{item.title}</h2> 
                    </div>
                    <div>
                        <h5>{item.name}</h5> 
                    </div>
                    <div>
                        <p>{item.role}</p>
                    </div>
            </div>)
        })}</div>

    </div>)
}

export { Home2 }