import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class Main extends Component {
  componentDidMount(){
    console.log('Thank You for Visiting My Site!');
  }

  render() {
  const Project = {
    title: "Plan It", subTitle: "Mobile App For Planning Trips",
    imageURL: "public/images/PlanItLogo.png",
    description: "We created a React-Native mobile app which allows your social network to give you recommendations for your next trip. Just pick a destination and your friend's suggestions will pop up on your map.",
    collaborators: "Collaborators: Chaehoon Lim, Ben Rosenbuam, Balthazar Villegas,",
    site: "https://www.youtube.com/watch?v=A2-jfJn0RAc&feature=youtu.be"
  };

  return (
      <div>
         <hr />
        <ProjectCard project={Project} />
         <a href="https://www.youtube.com/watch?v=A2-jfJn0RAc&feature=youtu.be" >Plan It demo</a>
         <a href="https://github.com/sizplay/MovieMarker" >Movie Marker</a>
         <a href="https://williams-pomona.herokuapp.com/" >Williams-Pomona.com</a>
         <a href="https://www.youtube.com/watch?v=qTAawpGUNzU" >Dancing Machine demo</a>
         <a href="https://dancing-machine.herokuapp.com/" >Dancing Machine</a>
      </div>

    );
  }
}

export default Main;
