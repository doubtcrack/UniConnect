import React from "react";
import Container from "react-bootstrap/esm/Container";
import Cards from "../components/Cards";
import Categories from "../components/Categories";
import "../styles/home.css";

import { v4 as uuidv4 } from "uuid";
const Home = () => {
  return (
    <div>
      <Container>
        <Categories />
        <Cards key={uuidv4()} />
      </Container>
    </div>
  );
};

export default Home;
