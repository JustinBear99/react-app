import React, { Component } from 'react'

export class Section extends Component {
    buttonStyle = () => {
        return {
            backgroundColor: 'green',
            margin: '0px 2%',
            padding: '2%',
            height: '90px',
            width: '10%',
            fontSize: '30px',
        }
    }

    render() {
        return (
        <button style={this.buttonStyle()} onClick={ () => this.props.rtBtn(this.props.col.id, this.props.rowId)}>{this.props.col.id}{this.props.rowId}</button>
        )
    }
}

export default Section
