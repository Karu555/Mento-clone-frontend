import axios from 'axios';
import { useEffect, useState } from 'react'


export function Search() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
  
    const handleSearch = (e) => {
      e.target.value = e.target.value.toLocaleUpperCase()
  
      const filtered = data.filter((els) => {
        return els.name.first_name == e.target.value || els.name.last_name == e.target.value
      })
      setFilter(filtered)
    }
  
    useEffect(() => {
      axios.get("http://localhost:8080/ALL_TOPICS").then((data) => {
        setData(data.data);
      })
    }, [])
  
    return (
        <div className="search" >
        <input className="searchbar" type="text" placeholder="Topic name, Influencers name" onChange={handleSearch}/>
        {filter.map((e) => {
         return (
          <div key={e.id}>
            <h6>{e.id}.{e.name.first_name}{" "}{e.name.last_name}</h6>
            <img src={e.profile_img} alt="" />
            <div>{e.title}</div>
            <div>{e.role}</div>
          </div>)
        })}
      </div>
    )
  }
  

  