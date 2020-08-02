import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Row from './Row'

export class Field extends Component {
    
    render() {
        return this.props.rows.map((row) => (
            <Row key={row.id} row={row} rtBtn={this.props.rtBtn}/>
        ));
    }
}


Field.propTypes = {
    rows: PropTypes.array.isRequired
}

export default Field
