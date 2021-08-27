import React from "react";
import Projects from "./Projects";
import "./WorkTile.scss";

function WorkTile({ project }) {
  return (
    <div className="worktile">
      <img src={project.src} alt="" />
      <h2>{project.title}</h2>
      <p>{project.desc}</p>
    </div>
  );
}

export default WorkTile;
