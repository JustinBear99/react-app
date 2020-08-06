import React, { Component } from 'react'
//import images from './Images'

export class Sideshow extends Component {
    divStyle = () => {
        return {
            backgroundColor: 'yellow',
            padding: '20px',
            color: 'black',
            float: 'right',
            width: '30%',
            fontSize: '16px',
        }
    }

    listStyle = () => {
        return {
            margin: '0px 0px 70px 0px',
            listStylePosition: 'inside',
        }
    }

    itemStyle = () => {
        return {
            margin: '0px 40px',
            //float: 'left',
        }
    }

    render() {
        const Info = this.props.Info
        return (
            <div style={this.divStyle()}>
                <h2>States of current image</h2>
                <br></br>
                <ul style={this.listStyle()}>
                    <li style={this.itemStyle()}>Number of stalks: {Info.num_stalks}</li>
                    <li style={this.itemStyle()}>Number of spears: {Info.num_spears}</li>
                    <li style={this.itemStyle()}>Number of shoots: {Info.num_shoots}</li>
                </ul>
                <br></br>
                <ul style={this.listStyle()}>
                    <li style={this.itemStyle()}>This is a: {Info.cate_obj}</li>
                    <li style={this.itemStyle()}>Confidance: {Info.score.toFixed(3)*100}%</li>
                    <li style={this.itemStyle()}>Height: {Info.h_obj.toFixed(1)} (pixels)</li>
                    <li style={this.itemStyle()}>Width: {Info.w_obj.toFixed(1)} (pixels)</li>
                </ul>
            </div>
        )
    }
}

export default Sideshow
