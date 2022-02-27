import * as React from "react";
import { Helmet } from "react-helmet";
import HomePage from "../components/home/home";
import "./index.css";

const IndexPage = () => {
  return (
    <main className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ik - Website</title>
      </Helmet>
      <HomePage />
    </main>
  );
};

export default IndexPage;
