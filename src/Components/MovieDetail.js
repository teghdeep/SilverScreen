import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFlag } from "react-icons/fa";

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import background from './background.jpg';
import "./Details.css";
import { useParams } from "react-router-dom";

export default function M() {
  const [movie, setMovies] = useState([]);
  const [cast, setCast] = useState([]);
  let params = useParams();
  const apiURL =
    "https://api.themoviedb.org/3/movie/" +
    `${params.movieid}` +
    "?api_key=98325a9d3ed3ec225e41ccc4d360c817";
  const castURL = `https://api.themoviedb.org/3/movie/${params.movieid}/credits?api_key=98325a9d3ed3ec225e41ccc4d360c817`;
  //  const base_url = " https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(apiURL);
      setMovies(request.data);
      return request;
    }
    async function fetchData2() {
      const request2 = await axios.get(castURL);
      setCast(request2.data);
      return request2;
    }
    fetchData();
    fetchData2();
  }, [apiURL]);

  var path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  //  var profile_path = `https://image.tmdb.org/t/p/w500${cast.cast[0].profile_path}`;

  {
    console.log("Cast.cast " + cast.cast);
    console.log(cast);
    console.log(cast.cast);
  }

  return (
    <div className="main">
      <div className="split left">
        <img src={path}></img>
      </div>

      <div className="split right">
        <br></br>
        <br></br>
        <h1> {movie.title}</h1>

        <br></br>
        <br></br>
        <br></br>

        <h3>
          <FaFlag /> Overview
        </h3>

        <p>{movie.overview}</p>

        <br></br>
        <br></br>
        <br></br>
        <h3>
          <FaFlag /> Release date
        </h3>

        <p>{movie.release_date}</p>
        <br></br>
        <br></br>
        <br></br>
        <h3>
          <FaFlag /> Rating
        </h3>

        {console.log(cast)}
        {cast !== null &&
        cast !== undefined &&
        cast.cast !== null &&
        cast.cast !== undefined ? (
          (console.log(cast.cast[0].name),
          (<p color="white">{cast.cast[0].name}</p>))
        ) : (
          // cast.cast.map(
          //   (cast) => <h1 color="white">{cast[0].name}</h1>,
          //   console.log(cast.name)
          // ))
          <div></div>
        )}
        <p>{movie.vote_average}</p>
      </div>
      <br></br>

      {/* {cast !== null &&
      cast !== undefined &&
      cast.cast !== null &&
      cast.cast !== undefined ? (
        for( int i=0;i<5;i++)
        <p>{cast.cast[i].name}</p>
        
    ) : (
        <div></div>
      )} */}
    </div>
  );
}
