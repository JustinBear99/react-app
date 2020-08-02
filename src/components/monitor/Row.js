import React, { Component } from 'react'
//import Button from './Button'
import PropTypes from 'prop-types';

export class Row extends Component {

    buttonStyle = () => {
        return {
            backgroundColor: 'green',
            margin: '0px 10px',
            padding: '10px',
            height: '90px',
            width: '60px',
            fontSize: '30px',
        }
    }


    render() {
        const row = this.props.row;
        return (
            <div>
                <button style={this.buttonStyle()} onClick={ () => this.props.rtBtn('A', row.id) } >A{row.id}</button>
                <button style={this.buttonStyle()}>B{row.id}</button>
                <button style={this.buttonStyle()}>C{row.id}</button>
                <button style={this.buttonStyle()}>D{row.id}</button>
                <button style={this.buttonStyle()}>E{row.id}</button>
                <button style={this.buttonStyle()}>F{row.id}</button>
            </div>
        )
    }
}

Row.propTypes = {
    row: PropTypes.object.isRequired
}

export default Row
