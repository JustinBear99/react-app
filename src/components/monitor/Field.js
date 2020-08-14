import React, { Component } from 'react'
import {v4 as uuid} from 'uuid'
import Row from './Row'

import '../../css/Field.css'

export class Field extends Component {

    render() {
        return this.props.rows.map((row) => (
            <div key={uuid()} className={'row'}>
                <Row cols={this.props.cols} row={row} currentButton={this.props.currentButton} currentCol={this.props.currentCol} currentRow={this.props.currentRow}/>
            </div>
        ));
    }
}

export default Field
