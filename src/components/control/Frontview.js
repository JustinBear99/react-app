import React, { Component } from 'react'
import Webcam from 'react-webcam'

export class Frontview extends Component {
    state = {
        width: 10,
    }

    setRef = webcam => {
        this.webcam = webcam;
    }

    shutter() {
        const imagesrc = this.webcam.getScreenshot();
        console.log(imagesrc)
    }

    componentDidMount() {
        const w = document.getElementById('control').clientWidth
        this.setState({width: w*0.9})
    }

    render() {

        return (
            <div>
                <h1>Front view</h1>
                <Webcam height={`${this.state.width*0.25}px`}
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
