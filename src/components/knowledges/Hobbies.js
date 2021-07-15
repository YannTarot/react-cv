import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
        <ul>
          <li className="hobby">
            <i className="fas fa-football-ball"></i>
            <span>Rugby</span>
          </li>
          <li className="hobby">
            <i className="fas fa-guitar"></i>
            <span>Guitare</span>
          </li>
          <li className="hobby">
            <i className="fab fa-bitcoin"></i>
            <span>Crypto-monnaies</span>
          </li>
          <li className="hobby">
            <i className="fas fa-atom"></i>
            <span>Physique quantique</span>
          </li>
        </ul>
    </div>
  );
};

export default Hobbies;
