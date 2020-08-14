import React from 'react';
import { Link } from 'react-router-dom';

class Asparagus extends React.Component{
    getStyle = () => {
        return {
            background: '#333',
            color:'#fff',
            padding: '20px 0px 10px 0px',
            fontSize: '15px',
            textAlign: 'center',
        }
    }

    linkStyle = () => {
        return{
            color: '#fff',
            padding: '5px',
            fontSize: '15px'
        }
    }
    

    render(){
        
        return(
            <div style={this.getStyle()}>
                <h1>Asparagus Monitoring System</h1>
                <br></br>
                <Link style={this.linkStyle()} to="/">Home</Link> |  
                <Link style={this.linkStyle()} to="/control"> Control</Link>｜ 
                <Link style={this.linkStyle()} to="/monitor">Monitor</Link> | 
                <Link style={this.linkStyle()} to="/about">About</Link>
            </div>
        )
    }
}


export default Asparagus;
