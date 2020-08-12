import React, { Component } from 'react'
//import images from './Images'

export class Sideshow extends Component {

    divStyle() {
        return {
            borderLeft: '5px solid green',
            backgroundColor: '#7DCEA0',
            margin: '20px 0px',
            display: 'flex',
            flexDirection: 'column',
        }
    }

    headerStyle() {
        return {
            textAlign: 'left',
            padding: '10px 0px 10px 50px',
        }
    }

    ulStyle() {
        return {
            margin: '0px 0px 70px 0px',
            listStylePosition: 'inside',
        }
    }

    liStyle() {
        return {
            textAlign: 'left',
            padding: '0px 0px 0px 90px',
        }
    }

    render() {
        const Info = this.props.Info
        return (
            <div>
                <div style={this.divStyle()}>
                    <h2 style={this.headerStyle()} >States of current image</h2>
                    <ul style={this.ulStyle()}>
                        <li style={this.liStyle()}>Number of stalks: {Info.num_stalks}</li>
                        <li style={this.liStyle()}>Number of spears: {Info.num_spears}</li>
                        <li style={this.liStyle()}>Number of shoots: {Info.num_shoots}</li>
                    </ul>
                </div>
                <br></br>
                <div style={this.divStyle()}>
                    <h2 style={this.headerStyle()}>State of picked one</h2>
                    <ul style={this.ulStyle()}>
                        <li style={this.liStyle()}>This is a: {Info.cate_obj}</li>
                        <li style={this.liStyle()}>Confidance: {Info.score.toFixed(3)*100}%</li>
                        <li style={this.liStyle()}>Height: {Info.h_obj.toFixed(1)} (pixels)</li>
                        <li style={this.liStyle()}>Width: {Info.w_obj.toFixed(1)} (pixels)</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sideshow
