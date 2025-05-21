import React from "react";
import Hero from "../components/Hero";
import Policy from "../components/Policy";
import Query from "../components/Query";
import Latest from "./Latest";
import BestSeller from "./BestSeller";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Latest />
      <BestSeller />
      <Policy />
      <Query />
    </div>
  );
};

export default HomePage;
