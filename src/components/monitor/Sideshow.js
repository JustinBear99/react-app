import React, { Component } from 'react'
//import images from './Images'

export class Sideshow extends Component {

    listStyle = () => {
        return {
            margin: '0px 0px 70px 0px',
            listStylePosition: 'inside',
            float: 'left',
        }
    }

    itemStyle = () => {
        return {
            float: 'left',
            //margin: '0px 40px',
        }
    }

    render() {
        const Info = this.props.Info
        return (
            <div>
                <div style={{alignItems: 'center'}}>
                    <h2>States of current image</h2>
                    <br></br>
                    <ul style={this.listStyle()}>
                        <li style={this.itemStyle()}>Number of stalks: {Info.num_stalks}</li>
                        <li style={this.itemStyle()}>Number of spears: {Info.num_spears}</li><br></br>
                        <li style={this.itemStyle()}>Number of shoots: {Info.num_shoots}</li>
                    </ul>
                </div>
                <br></br>
                <div style={{alignItems: 'center'}}>
                    <h2>State of picked one</h2>
                <br></br>
                <ul style={this.listStyle()}>
                    <li style={this.itemStyle()}>This is a: {Info.cate_obj}</li> <br></br>
                    <li style={this.itemStyle()}>Confidance: {Info.score.toFixed(3)*100}%</li><br></br>
                    <li style={this.itemStyle()}>Height: {Info.h_obj.toFixed(1)} (pixels)</li><br></br>
                    <li style={this.itemStyle()}>Width: {Info.w_obj.toFixed(1)} (pixels)</li><br></br>
                </ul>
                </div>
            </div>
        )
    }
}

export default Sideshow
