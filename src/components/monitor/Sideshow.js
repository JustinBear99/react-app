import React, { Component } from 'react'
import Collapsible from 'react-collapsible'
//import images from './Images'

export class Sideshow extends Component {

    state = {
        width: 10,
        height: 10,
    }

    static getDerivedStateFromProps(props, state) {
        return (
            {
                width: props.windowWidth > 900 ? (props.windowWidth*0.25)-10 : props.windowWidth,
                height: props.windowWidth > 900 ? ((props.windowWidth*0.25)-10)*3/4 : props.windowWidth*3/4
            }
        )
    }

    divStyle() {
        return {
            borderLeft: '5px solid green',
            backgroundColor: '#7DCEA0',
            margin: '50px 20px 0px 0px',
            display: 'flex',
            flexDirection: 'column',
        }
    }

    headerStyle() {
        return {
            fontSize: '2em',
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
            fontSize: '2em',
            textAlign: 'left',
            padding: `0px 0px 0px ${this.state.width*0.1}px`,
        }
    }

    collapseStyle() {
        return {
            fontsize: '2em',
            backgroundColor: 'green',
            textAlign: 'left',
            
        }
    }

    componentDidMount() {
        const w = document.getElementById('sideshow').clientWidth
        this.setState({width: w*0.9})
    }

    render() {
        const Info = this.props.Info
        return (
            <div>
                <div id={'sideshow'} style={this.divStyle()}>
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
                        <li style={this.liStyle()}>Height: {(Info.h_obj*Info.ratio).toFixed(1)} (cm)</li>
                        <li style={this.liStyle()}>Width: {(Info.w_obj*Info.ratio).toFixed(1)} (cm)</li>
                    </ul>
                </div>
                {/* <Collapsible trigger='Start here' triggerTagName="button" triggerClassName={this.collapseStyle()}>
                    <h2 style={this.headerStyle()} >States of current image</h2>
                    <ul style={this.ulStyle()}>
                        <li style={this.liStyle()}>Number of stalks: {Info.num_stalks}</li>
                        <li style={this.liStyle()}>Number of spears: {Info.num_spears}</li>
                        <li style={this.liStyle()}>Number of shoots: {Info.num_shoots}</li>
                    </ul>
                </Collapsible> */}
            </div>
        )
    }
}

export default Sideshow
