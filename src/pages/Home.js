import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Yann Tarot</h1>
          <h2>Développeur Front-end Junior</h2>
          <div className="pdf">
            <a href="./media/CV-YT.pdf" target="_blank">Télécharger CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
