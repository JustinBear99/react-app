import React from 'react';
import { Joystick } from 'react-joystick-component';

class Asparagus extends React.Component{
    render(){
        return(
            <div>
                <h1>Monitoring system</h1>
                <div>
                <Joystick size={100} baseColor="red" stickColor="black" ></Joystick>
                </div>
            </div>
        )
    }
}

export default Asparagus;
