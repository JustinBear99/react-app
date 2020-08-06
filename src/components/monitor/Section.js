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
        if (this.props.col.id === 'A') {
            if (this.props.rowId === 0){
                return (
                    <p style={{display: 'inline', fontSize: '30px', margin: '5% 5% 5% 10%',}}>{this.props.col.id}</p>
                )
            } else {
                return (
                    <React.Fragment>
                        <p style={{display: 'inline', fontSize: '30px', margin: '5% 5%',}}>{this.props.rowId}</p>
                        <button style={this.buttonStyle()} onClick={ () => this.props.rtBtn(this.props.col.id, this.props.rowId)}>{this.props.col.id}{this.props.rowId}</button>
                    </React.Fragment>
                )
            }
            
        } else {
            if (this.props.rowId === 0) {
                return (
                    <p style={{display: 'inline', fontSize: '30px', margin: '5% 5%',}}>{this.props.col.id}</p>
                )
            } else {
                return (
                <button style={this.buttonStyle()} onClick={ () => this.props.rtBtn(this.props.col.id, this.props.rowId)}>{this.props.col.id}{this.props.rowId}</button>
                )
            }
            
        }

        
    }
}

export default Section
