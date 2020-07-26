import React, { Component } from 'react';
import ButtonItem from './ButtonItem';

class Button extends Component{
    render(){
        return this.props.pos.map((p) => (
        <div >
            <ButtonItem />
        </div>
        )
        );
    
    }
}

export default Button;