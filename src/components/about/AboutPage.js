import React from 'react';
import { Link } from 'react-router';

const AboutPage = () => {
    return (
      <div>
        <h1>About</h1>
        <p>This App uses React & Redux.</p>
        <Link to="/" className="btn btn-info">Back to Home</Link>
      </div>
    );
};

export default AboutPage;
