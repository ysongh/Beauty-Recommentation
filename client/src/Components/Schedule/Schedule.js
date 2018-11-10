import React, { Component } from 'react';

import someoneThingImg from '../../Img/someoneThing.png';

class Schedule extends Component {
  render() {
    return (
        <div className="App">
            <img className="img-fluid w-100" src={someoneThingImg} alt="Amanda Schedule" />
        </div>
    );
  }
}

export default Schedule;