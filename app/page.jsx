import React from "react";
import { Feed, Nav, Provider } from "@components";
const Home = () => {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center ">
        Discover & Share
        <br className="" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="text-center desc">
        "Let's Share" is a free AI tool that empowers users in today's world to
        explore, generate, and share creative prompts openly.
      </p>
      {/* <Nav /> */}
      <Feed />
      <Provider />
    </section>
  );
};

export default Home;
