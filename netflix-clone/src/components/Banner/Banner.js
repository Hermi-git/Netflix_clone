import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request)        
        const randomIndex = Math.floor(Math.random() * request.data.results.length);
        setMovie(request.data.results[randomIndex]);
        console.log(request.data.results); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <div className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height:"700px"
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button-play">Play</button>
          <button className="banner-button">List</button>
        </div>
        <h1 className="banner-description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className='banner-fade-bottom'></div>
    </div>
  );
}

export default Banner;