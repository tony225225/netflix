import React from 'react'
import axios from './axios'
import {Api_Key,imageUrl} from './Constants'
import { useEffect,useState } from 'react'
import './banner.css'
function Banner() {
  const [Movie,setMovie] = useState()
  useEffect(()=>{
    axios.get( `movie/top_rated?api_key=${Api_Key}&language=en-US&page=1`).then((Response)=>{
    console.log(Response.data.results[0])
    
    setMovie(Response.data.results[1])
    })
  })
  return (
    <div  style={{backgroundImage:`url(${Movie ?  imageUrl+Movie.backdrop_path : ""})`}} 
    
    className='banner' >
      
        <div className='title' >
            <h2>{ Movie ? Movie.original_title : ""}</h2>
        </div>
        <div className='buttons'>
            <button className='btn'>Play Episode</button>
            <button className='btn'>Watch Later</button>
        </div>
       <div className='dis'>
           <h3>{Movie ? Movie.overview : ""}</h3>
       </div>
    </div>
  )
}

export default Banner