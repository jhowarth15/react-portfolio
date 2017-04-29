import React, { Component, PropTypes } from 'react';

export default class Introduction extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <div className="introduction-container">
        <div className="introduction">
          <h4>
            <strong><p>I'm a software engineer in London. I love solving tough engineering challenges and building awesome applications, watching them develop and advance with each iteration! Recently, I've been exploring machine learning techniques for cyber breach event detection and efficient state management in single-page apps. </p></strong>
            
            <br />
            <p>A few fun facts about me:</p>
            <p><i>1.  I grew up on a dairy farm with over 100 cattle</i></p>
            <p><i>2.  I'm an American Red Cross trained lifeguerd</i></p>
            <p><i>3.  I'm a recently recovering Windows user</i></p>
          </h4>
        </div>
      </div>
    );	
  }
}

Introduction.propTypes = {
  // personalInfo: PropTypes.object.isRequired
};
