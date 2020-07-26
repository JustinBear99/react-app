import React, { Component } from 'react';

class Button extends Component{
    render(){
        const id = this.props.key;
        const info = this.props.info;
        const numbering = this.props.numbering;
        return (
        <button>{numbering}{info.id}</button>
        )
    
    }
}

export default Button;