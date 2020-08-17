import React, { Component } from 'react'
import Webcam from 'react-webcam'
import axios from 'axios';

export class Frontview extends Component {
    state = {
        width: 10,
    }

    setRef = webcam => {
        this.webcam = webcam;
    }

    shutter() {
        const imagesrc = this.webcam.getScreenshot();
        this.uploadPhoto(imagesrc)
    }

    uploadPhoto(image) {
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const ibp = 'http://ibp.bime.ntu.edu.tw/rest/sensorDataLogs/ntu_test/lab403/asparagus/img/file'

        var data = new FormData();
        data.append('file', image);
        data.append('dataTime', '2020-08-14 12:12:12');
        
        axios.post(`${cors}${ibp}`, data, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(function (response) {
            console.log(response);
          })
            .catch(function (error) {
            console.log(error);
          });
    }

    componentDidMount() {
        const w = document.getElementById('control').clientWidth
        this.setState({width: w*0.9})
    }

    render() {

        return (
            <div>
                <h1>Front view</h1>
                <Webcam audio={false}
                        height={`${this.state.width*0.25}px`}
                        ref={this.setRef}
                        screenshotFormat={'image/jpeg'}
                />
                <br></br>
                <button onClick={() => this.shutter()}>ClickMe</button>
            </div>
        )
    }
}

export default Frontview
