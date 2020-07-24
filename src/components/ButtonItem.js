import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ButtonItem extends Component {
    getStyle = () => {
        return {
            padding: '10px 20px',
            border: '2px #ccc dotted',
            fontsize: '16px',
            backgroundColor: this.props.pos.torf ? 'red' : 'blue',
            float:'left',
        }
    }
    render() {
        const {id, col, row} = this.props.pos
        return (
            <div>
                <button style={this.getStyle()} onClick={console.log(id)}>
                {col+row}
                </button>
                <button style={this.getStyle()}>123</button>
            </div>
        )
    }
}

ButtonItem.propTypes = {
    pos: PropTypes.object.isRequired
}

export default ButtonItem
