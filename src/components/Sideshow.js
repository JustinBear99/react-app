import React, { Component } from 'react'

export class Sideshow extends Component {
    getStyle = () => {
        return {
            //backgroundColor: 'yellow',
            color: 'black',
            float: 'right',
            width: '30%',
            fontSize: '16px',
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <label>Choose a property:</label>
                <br></br>
                <select>
                    <option value="Number of clumps">Number of clumps</option>
                    <option value="spear 1">spear 1</option>
                    <option value="spear 2">spear 2</option>
                    
                </select>
            </div>
        )
    }
}

export default Sideshow
