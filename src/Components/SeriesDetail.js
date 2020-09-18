import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFlag } from "react-icons/fa";

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import background from './background.jpg';
import "./SeriesDetail.css";
import { useParams } from "react-router-dom";

export default function S() {
  const [series, setSeries] = useState([]);
  const [cast, setCast] = useState([]);
  let params = useParams();
  const apiURL =
    "https://api.themoviedb.org/3/tv/" +
    `${params.seriesid}` +
    "?api_key=98325a9d3ed3ec225e41ccc4d360c817";
  const castURL = `https://api.themoviedb.org/3/tv/${params.seriesid}/credits?api_key=98325a9d3ed3ec225e41ccc4d360c817`;
  //  const base_url = " https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(apiURL);
      setSeries(request.data);
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

  var path = `https://image.tmdb.org/t/p/w500${series.poster_path}`;

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
        <h1> {series.name}</h1>

        <br></br>
        <br></br>
        <br></br>

        <h3>
          <FaFlag /> Overview
        </h3>

        <p>{series.overview}</p>

        <br></br>
        <br></br>
        <br></br>
        <h3>
          <FaFlag /> Release date
        </h3>

        <p>{series.first_air_date}</p>
        <br></br>
        <br></br>
        <h3>
          <FaFlag />
          Number of seasons
        </h3>
        <p>{series.number_of_seasons}</p>
        <h3>
          <br></br>
          <FaFlag /> Rating
        </h3>
        <p>{series.vote_average}</p>
        <br></br>
        <br></br>
        <h3>
          <FaFlag />
          CAST
        </h3>
        <div className="centered">
          {console.log(cast)}
          {cast !== null &&
          cast !== undefined &&
          cast.cast !== null &&
          cast.cast !== undefined ? (
            (console.log(cast.cast[0].name),
            (
              <p>
                {cast.cast[0].name}{" "}
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.cast[0].profile_path}`}
                />
                {cast.cast[1].name}
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.cast[1].profile_path}`}
                />
                {cast.cast[2].name}
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.cast[2].profile_path}`}
                />
                {/* {cast.cast[3].name}<img src={`https://image.tmdb.org/t/p/w500${cast.cast[3].profile_path}`}/>  */}
              </p>
            ))
          ) : (
            // cast.cast.map(
            //   (cast) => <h1 color="white">{cast[0].name}</h1>,
            //   console.log(cast.name)
            // ))
            <div></div>
          )}
        </div>
      </div>

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
