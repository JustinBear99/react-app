import React, { Component } from 'react'

export class Section extends Component {
    state = {
        buttonStyle : {
            backgroundColor: 'green',
            margin: '0px 2%',
            padding: '2%',
            height: '90px',
            width: '10%',
            fontSize: '30px',
        },
        }

    onClickEvent = () => {
        this.props.currentButton(this.props.col.id, this.props.rowId);
    }

    buttonStyle = () => {
        return {
            backgroundColor: (this.props.currentRow===this.props.rowId && this.props.currentCol===this.props.col.id) ? '#33cc33' : 'green',
            margin: '3px 10px',
            padding: '0% 5%',
            height: '90px',
            fontSize: '30px',
            cursor: 'pointer',
            borderRadius: '3px',
            border: '2px solid green'
        }
    }

    render() {
        //const name = this.props.col.id+this.props.rowId;
        if (this.props.col.id === 'A') {
            if (this.props.rowId === 0){
                return (
                    <React.Fragment>
                        <p style={{fontSize: '30px', margin: '5% 0%'}}></p>
                        <p style={{fontSize: '30px', margin: '5% 4% 5% 4%'}}>{this.props.col.id}</p>
                    </React.Fragment>
                )
            } else {
                return (
                    <React.Fragment>
                        <p style={{fontSize: '30px', margin: '5% 0%',}}>{this.props.rowId}</p>
                        <button style={this.buttonStyle()} onClick={this.onClickEvent.bind(this)}></button>
                    </React.Fragment>
                )
            }
            
        } else {
            if (this.props.rowId === 0) {
                return (
                    <p style={{fontSize: '30px', margin: '5% 5%',}}>{this.props.col.id}</p>
                )
            } else {
                return (
                <button style={this.buttonStyle()} onClick={this.onClickEvent.bind(this)}></button>
                )
            }
            
        }

        
    }
}

export default Section

