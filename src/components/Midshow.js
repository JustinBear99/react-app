import React, { Component } from 'react'
import images from './Images'

export class Midshow extends Component {
    getStyle = () => {
        return {
            //backgroundColor: 'red',
            color: 'black',
            float: 'left',
            width: '70%',
        }
    }

    imgStyle = () => {
        return {
            width: '800px',
            height: '600px',
        }
    }

    render() {
        const img = images.filter((image) => (image.col===this.props.col && image.row===this.props.row))
        return (
            <div style={this.getStyle()}>
                <br></br>
                <h1>{img[0].title}</h1>
                <br></br>
                <img style={this.imgStyle()} src={img[0].src} alt='Unspecified'></img>
            </div>
        )
    }
}

export default Midshow
