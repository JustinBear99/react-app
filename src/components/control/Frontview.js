import React, { Component } from 'react'
import Webcam from 'react-webcam'
//import axios from 'axios';

export class Frontview extends Component {
    state = {
        width: 10,
    }

    setRef = webcam => {
        this.webcam = webcam;
    }
    /*
    shutter() {
        const imagesrc = this.webcam.getScreenshot();
        this.uploadPhoto(imagesrc)
    }
    
    uploadPhoto(image) {
        const cors = 'https://cors-anywhere.herokuapp.com/';
        const ibp = 'http://ibp.bime.ntu.edu.tw/rest/sensorDataLogs/ntu_test/lab403/asparagus/img/file'

        let data = image.split(',', 2)[1]

        let datas = new FormData()
        datas.append('file', this.dataURItoBlob(image));
        datas.append('filename', 'test.jpg');
        datas.forEach((value, key) => {console.log("%s: %s", key, value)})
        
        axios.post(`${cors}${ibp}`, datas, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(function (response) {
            console.log(response);
          })
            .catch(function (error) {
            console.log(error);
          });
    }

    
    dataURItoBlob(dataURI, callback) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);
    
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    
        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
    
        // write the ArrayBuffer to a blob, and you're done
        var bb = new Blob([ab]);
        return bb;
    }*/

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
                <button >ClickMe</button>
            </div>
        )
    }
}

export default Frontview
