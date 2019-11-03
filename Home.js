import React from "react";

import SkipLinks from "./SkipLinks";
import Anime from "./Anime";

const Home = () => (
  <div className="home">
    <SkipLinks />
    <Anime name="onePunchMan" />
    <Anime name="onePiece" />
    <Anime name="deathNote" />
  </div>
);

export default Home;
