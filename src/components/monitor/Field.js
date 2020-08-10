import React, { Component } from 'react'
import {v4 as uuid} from 'uuid'
import Row from './Row'

export class Field extends Component {

    render() {
        return this.props.rows.map((row) => (
            <div key={uuid()} style={{verticalAlign: 'middle'}}>
                <Row cols={this.props.cols} row={row} rtBtn={this.props.rtBtn}/>
            </div>
        ));
    }
}

export default Field
