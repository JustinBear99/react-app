import React from 'react';
import { Link } from 'react-router-dom';

class Asparagus extends React.Component{
    getStyle = () => {
        return {
            background: '#333',
            color:'#fff',
            padding: '20px 0px 10px 0px',
            fontSize: '15px',
            textAlign: 'center'
        }
    }

    render(){
        return(
            <div style={this.getStyle()}>
                <h1>Monitoring system</h1>
                <br></br>
                <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            </div>
        )
    }
}

const linkStyle = {
    color: '#fff',
    padding: '5px',
    fontSize: '15px'
}

export default Asparagus;
