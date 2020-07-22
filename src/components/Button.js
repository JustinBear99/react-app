import React, { Component } from 'react';

export class Scene_button extends Component{
    constructor(x, y, img, det_img){
        this.x = x
        this.y = y
        this.img = img
        this.det_img = det_img
        this.name = x + y
    }
    render(){
    <div key='button' style={buttonstyle}>
        {this.props.name}
    </div>
    }
}
