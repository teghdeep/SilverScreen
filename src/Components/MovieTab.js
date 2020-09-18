import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import axios from "axios";
import "./Details.css";
import { Container } from "@material-ui/core";
import Navbar from "./Navbar";
import { Row } from "react-bootstrap";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  //const fetchUrl = `https://api.themoviedb.org/3/search/tv?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query=${search}`;
  const toSearch = async (search) => {
    const fetchUrl = `https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query=${search}`;
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Container>
        {/* <Row>
          <Navbar />
        </Row> */}
        <Row>
          <SearchBar
            style={{ height: "50%" }}
            value={search}
            onChange={(newValue) => setSearch(newValue)}
            onRequestSearch={() => toSearch(search)}
          />
        </Row>
        {search}
        {movies.map((movie) => (
          <div>{movie.original_title}</div>
        ))}
        {console.log(movies)}
      </Container>
    </div>
  );
}

export default App;
