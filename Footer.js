import React from 'react'
import axios from './axios'
import {useEffect,useState} from 'react'
import {Api_Key,imageUrl} from './Constants'
import YouTube from 'react-youtube'
import './Footer.css'
function Footer() {
  const [movie,setMovie] = useState([])
  const [url,urlid] = useState('')
  useEffect(()=>{
    axios.get(`/movie/popular?api_key=${Api_Key}&language=en-US&page=1`).then((Response)=>{
      console.log(Response.data.results)
      setMovie(Response.data.results)
    })
    
  })
  const opts= {
    height: '390',
    width: '100%',
    playerVars: {
    //  https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const changeMovie=(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${Api_Key}&language=en-US`).then((Response)=>{
          console.log(Response.data)
          if(Response.data.results.length!==0){
            urlid(Response.data.results[0])
          }
        })
  }
  return (
    <div className='footer'>
        <h4>popular</h4>
        <div className='ls'>
          {
            movie.map((obj)=>
            
            <img  onClick={()=>{changeMovie(obj.id)}}  src={`${imageUrl+obj.backdrop_path}`}/>
            
          )}
        </div>
       {  url &&  <YouTube  opts={opts}  videoId={url.id}/> }
    </div>
  )
}

export default Footer