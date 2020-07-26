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

    state = {
        linkStyle : [
            {
                id:0,
                color: '#fff',
                padding: '5px',
                fontSize: '15px'
            },
            {   
                id:1,
                color: '#fff',
                padding: '5px',
                fontSize: '15px'
            },
            {
                id:2,
                color: '#fff',
                padding: '5px',
                fontSize: '15px'
            },
            {
                id:3,
                color: '#fff',
                padding: '5px',
                fontSize: '15px'
            }
        ]
    }

    whenClicked = () => {
        console.log(this.state);
    }


    render(){
        return(
            <div style={this.getStyle()}>
                <h1>Monitoring system</h1>
                <br></br>
                <Link style={this.state.linkStyle[0]} to="/">Home</Link> |  
                <Link style={this.state.linkStyle[1]} to="/control"> Control</Link>｜ 
                <Link style={this.state.linkStyle[2]} to="/monitor">Monitor</Link> | 
                <Link style={this.state.linkStyle[3]} to="/about">About</Link>
            </div>
        )
    }
}


export default Asparagus;
