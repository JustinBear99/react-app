import React, { Component } from 'react'
import Field from '../monitor/Field'
import Sideshow from '../monitor/Sideshow'
import Midshow from '../monitor/Midshow'

import '../../css/Monitor.css'

export class Monitor extends Component {

    state = {
        rows: [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}],
        cols: [{id: 'A'}, {id: 'B'}, {id: 'C'}, {id: 'D'}, {id: 'E'}, {id: 'F'}],
        currentRow: 1,
        currentCol: 'A',
        num_stalks: 0,
        num_spears: 0,
        num_shoots: 0,
        h_obj: 0,
        w_obj: 0,
        cate_obj: undefined,
        score: 0,
        ratio: 0,
        windowWidth: 10,
        windowHeight: 10,
    }

    currentButton = (c, r) => {
        this.setState({currentCol: c, currentRow: r})
    }

    detInfo = (category, width, height, score, ratio, num_stalks, num_spears, num_shoots) => {
        this.setState(
            {
                cate_obj: category,
                w_obj: width,
                h_obj: height,
                score: score,
                ratio: ratio,
                num_stalks: num_stalks,
                num_spears: num_spears,
                num_shoots: num_shoots,
            }
        )
    }

    componentDidMount() {
        this.updateDimensions()
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    updateDimensions() {
        this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight})
    }

    render() {
        return (
            <div className="main-container">
                <div className="field">
                    <Field cols={this.state.cols} rows={this.state.rows} currentButton={this.currentButton} currentCol={this.state.currentCol} currentRow={this.state.currentRow} />
                </div>
                <div className="midshow">
                    <Midshow col={this.state.currentCol} row={this.state.currentRow} detInfo={this.detInfo} windowWidth={this.state.windowWidth} windowHeight={this.state.windowHeight}/>
                </div>
                <div className="sideshow">
                    <Sideshow col={this.state.currentCol} row={this.state.currentRow} Info={this.state} windowWidth={this.state.windowWidth} windowHeight={this.state.windowHeight}/>
                </div>
            </div>
        )
    }
}

export default Monitor
