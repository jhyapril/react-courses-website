import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {

  render() {
    return(
      <div className="jumbotron">
        <h1>Course Management Center</h1>
        <p> This website displays and manages good online course videos. It is developed based on React & Redux. </p>
        <Link to="about" className="btn btn-info">Know more</Link>
      </div>
    );
  }
}

export default HomePage;
