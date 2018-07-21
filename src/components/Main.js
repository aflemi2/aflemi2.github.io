import React, { Component } from 'react';

class Main extends Component {
  componentDidMount(){
    console.log('Thank You for Visiting My Site!');
  }
  render() {
    return (
      <div>
         <hr />

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
