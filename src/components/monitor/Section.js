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
        clicked: false
        }

    onClickEvent = () => {
        this.props.rtBtn(this.props.col.id, this.props.rowId);
        this.setState({clicked: true})
    }
   
    buttonStyle = () => {
        return {
            backgroundColor: this.state.clicked ? 'black' : 'green',
            margin: '0px 2%',
            padding: '2%',
            height: '90px',
            width: '10%',
            fontSize: '30px',
            cursor: 'pointer',
        }
    }

    render() {
        //const name = this.props.col.id+this.props.rowId;
        if (this.props.col.id === 'A') {
            if (this.props.rowId === 0){
                return (
                    <React.Fragment>
                        <p style={{display: 'inline', fontSize: '30px', margin: '5% 4% 5% 4%'}}></p>
                        <p style={{display: 'inline', fontSize: '30px', margin: '5% 5% 5% 10%'}}>{this.props.col.id}</p>
                    </React.Fragment>
                    
                )
            } else {
                return (
                    <React.Fragment>
                        <p style={{display: 'inline', fontSize: '30px', margin: '5% 5%', verticalAlign: 'middle'}}>{this.props.rowId}</p>
                        <button style={this.buttonStyle()} onClick={this.onClickEvent.bind(this)}></button>
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
                <button style={this.buttonStyle()} onClick={this.onClickEvent.bind(this)}></button>
                )
            }
            
        }

        
    }
}

export default Section

