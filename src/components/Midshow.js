import React, { Component } from 'react'
import {v4 as uuid} from 'uuid'
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
        const items = det.filter((item) => (item.image_id === img[0].id));
        return (
            <div style={this.getStyle()}>
                <br></br>
                <h1>{img[0].title}</h1>
                <br></br>
                <svg height={600} width={800} key={uuid()} style={{position:'absolute'}}>
                    <DrawItems items={items} detInfo={this.props.detInfo}/>
                </svg>
                <img style={this.imgStyle()} src={img[0].src} alt='Unspecified'></img>
            </div>
        )
    }
}

export default Midshow
