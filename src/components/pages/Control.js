import React, { Component } from 'react'
import { Joystick } from 'react-joystick-component'
import Webcam from 'react-webcam'

export class Control extends Component {
    render() {
        return (
            <div>
                <Webcam />
                <Joystick size={100} baseColor="red" stickColor="blue" />
                
            </div>
        )
    }
}

export default Control
