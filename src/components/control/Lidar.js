import React, { Component } from 'react'
import RPLidar from 'rplidar'

const lidar = new RPLidar();

export class Lidar extends Component {
    render() {
        lidar.on('data', console.log);
        return (
            <div>
                
            </div>
        )
    }
}

export default Lidar
