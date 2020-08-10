import React, { Component } from 'react'
import {v4 as uuid} from 'uuid'
import Section from './Section';

export class Row extends Component {


    render() {
        return this.props.cols.map(col => (
            <Section key={uuid()} col={col} rowId={this.props.row.id} rtBtn={this.props.rtBtn}/>
        ))
    }
}


export default Row
