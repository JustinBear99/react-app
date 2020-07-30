import React, { Component } from 'react'
import images from './Images'
import DrawItems from './DrawItems'
import det from '../detection/coco_instances_results_converted.json'

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
        // var imgg = new Image();
        // imgg.src = img[0].src
        // const width = imgg.width
        // const height = imgg.height
        const items = det.filter((item) => (item.image_id===0));
        return (
            <div style={this.getStyle()}>
                <br></br>
                <h1>{img[0].title}</h1>
                <br></br>
                <DrawItems items={items} detInfo={this.props.detInfo}/>
                <img style={this.imgStyle()} src={img[0].src} alt='Unspecified'></img>
                
            </div>
        )
    }
}

export default Midshow
