import React, { Component } from 'react'
import { Joystick } from 'react-joystick-component'
import Frontview from '../control/Frontview'
//import Lidar from '../control/Lidar'

export class Control extends Component {
     
    render() {
        return (
            <div id={'control'} style={{overflow: 'hidden'}}>
                <Frontview/>
                <Joystick size={100} baseColor="red" stickColor="blue" /> 
            </div>
        )
    }
}

export default Control
