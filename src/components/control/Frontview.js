import React, { Component } from 'react'
import Webcam from 'react-webcam'

export class Frontview extends Component {
    render() {
        return (
            <div>
                <h1>Front view</h1>
                <Webcam height={'800px'}
                        
                />
            </div>
        )
    }
}

export default Frontview
