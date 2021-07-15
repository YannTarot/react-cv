import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
          <div className="contactBox">
            <h1>Contactez-moi</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Nantes</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0761711068">
                <span className="clickInput" onClick={() => {alert('Téléphone copié !')}}>07 61 71 10 68</span>
                </CopyToClipboard>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <CopyToClipboard text="yann.tarot@gmail.com">
                <span className="clickInput" onClick={() => { alert('E-mail copié !') }}>yann.tarot@gmail.com</span>
                </CopyToClipboard>
              </li>
            </ul>
          </div>

        <div className="socialNetwork">
          <ul>
            <a href="https://www.linkedin.com/in/yann-tarot/" target="_blank" rel="noopener noreferrer">
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/YannTarot" target="_blank" rel="noopener noreferrer">
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/yann.tarot/" target="_blank" rel="noopener noreferrer">
              <h4>Facebook</h4>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="http://www.codepen.com" target="_blank" rel="noopener noreferrer">
              <h4>Codepen</h4>
              <i className="fab fa-codepen"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
