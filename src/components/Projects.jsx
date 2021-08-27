import React from "react";
import "./Projects.scss";
import Card from "./Card";
import WorkTile from "./WorkTile";
import { projects } from "../assets/projects.json";

function Projects() {
  return (
    <section className="projects">
      <div className="projects--top">
        <Card
          building="Willis Building, New York, NY, USA"
          project="Mike Williams"
          year="2020"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          etiam odio quam. Dui, adipiscing mattis pharetra ullamcorper gravida
          nunc, elementum tincidunt quisque. Eu mollis metus dolor pharetra,
          dictum. Facilisi suspendisse maecenas sed volutpat eget sit. Sapien
          amet, facilisis dolor ante sapien vitae non faucibus. Posuere eget
          massa et at pharetra ut id elit. Quam purus arcu."
        />
      </div>
      <div className="projects--bottom">
        {projects.map((project) => (
          <WorkTile
            key={project.id}
            title={project.title}
            desc={project.desc}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
