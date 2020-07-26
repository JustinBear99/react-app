import React, { Component } from 'react'

export class About extends Component {
    header = () => {
        return {
            textAlign: 'left',
            fontSize: '26px',
            padding:'20px',
        }
    }

    paraStyle = () => {
        return {
            textAlign: 'left',
            fontSize: '16px',
            padding: '20px'
        }
    }

    render() {
        return (
            <div>
                <h1 style={this.header()}>About</h1>
                <p style={this.paraStyle()}>This is a website about asparagus research.</p>
            </div>
        )
    }
}

export default About
