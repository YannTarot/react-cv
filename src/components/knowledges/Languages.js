import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
  state = {
    languages : [
      {id: 1, value: "Javascript", xp:1},
      {id: 2, value: "Css", xp:1.4},
      {id: 3, value: "Php", xp:0.2},
      {id: 4, value: "Ruby", xp:1.2}
    ],
    frameworks : [
      {id: 5, value: "React", xp:1},
      {id: 6, value: "Bootstrap", xp:1.2},
      {id: 7, value: "Sass", xp:0.9},
      {id: 8, value: "Rails", xp:1.1},
    ]
  }

  render() {
    let {languages, frameworks} = this.state
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
        languages={frameworks}
        className="frameworksDisplay"
        title="frameworks & bibliothèques"

        />

      </div>
    );
  }
}

export default Languages;
