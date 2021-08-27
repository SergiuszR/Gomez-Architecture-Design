import React from "react";
import "./Home.scss";
import Card from "./Card";

function Home() {
  return (
    <section className="home">
      <div className="name">
        <h1>Gomez Addams</h1>
        <p>Architecture Design Studio</p>
      </div>
      <div className="description">
        <Card
          building="Empire Mind Building, Sydney, Australia"
          project="John & Jane Doe"
          year="2021"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          etiam odio quam. Dui, adipiscing mattis pharetra ullamcorper gravida
          nunc, elementum tincidunt quisque. Eu mollis metus dolor pharetra,
          dictum. Facilisi suspendisse maecenas sed volutpat eget sit. Sapien
          amet, facilisis dolor ante sapien vitae non faucibus. Posuere eget
          massa et at pharetra ut id elit. Quam purus arcu."
          span="more"
        />
      </div>
    </section>
  );
}

export default Home;
