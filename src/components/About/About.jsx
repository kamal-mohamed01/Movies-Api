import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

export default function About() {

    const [trendingMovies, setTrendingMovies] = useState([])
    const [loading, setLoading] = useState(false)
    async function getTrending() 
    {
        setLoading(true)
        // let response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=4b87eb4572773b982d2ee17befe591ed`)
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=4b87eb4572773b982d2ee17befe591ed`)
            
        setTrendingMovies(data.results)
        setLoading(false)
            // console.log(data);
            // console.log(response.data);
    }
    
    
    useEffect(()=> {
        getTrending()
        // call api
    } , [])
    
    return <>
    <div className="row">
        {loading===true? <h2> Loding... <i className='fas fa-spinner fa-spin'></i></h2>:trendingMovies.map((movie)=> <div key={movie.id} className=' col-md-2'>
            <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+movie.profile_path} alt="img poster" />
            <h2 className='h5'>{movie.name}</h2>
        </div> ) }
        
    </div>
    
    
    
    </>
}

