import React, { Component } from 'react';
import RPLidar from './RPLidar';

const lidar = new RPLidar();

export class Lidar extends Component {
    render() {
        lidar.on('data', console.log);
        return (
            <div>
                <p></p>
            </div>
        )
    }
}

export default Lidar
