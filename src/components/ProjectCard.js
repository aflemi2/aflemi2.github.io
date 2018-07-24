import React from 'react';

const ProjectCard = (props) => {
  const { title, subTitle, imageURL, description, collaborators, site } = props.project;
  return(
  <div>
    <h1>{ title }</h1>
    <h2>{ subTitle }</h2>
    <img src = { imageURL } />
    <p> { description }</p>
    <div>{ collaborators }</div>
    <a href = { site } >{ title } Link</a>
  </div>
  );
};

export default ProjectCard;
