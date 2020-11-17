import React, { Component } from 'react'
import {v4 as uuid} from 'uuid'
import images from './Images'
import DrawItems from './DrawItems'
import det from '../../detection/coco_instances_results_converted.json'

export class Midshow extends Component {
    state = {
        width: 100,
        height: 100,
    }

    imgStyle = () => {
        return {
            width: '100%',
            height: 'auto',
        }
    }

    static getDerivedStateFromProps(props, state) {
        return (
            {
                width: props.windowWidth > 900 ? ((props.windowWidth)*0.5)-10 : props.windowWidth,
                height: props.windowWidth > 900 ? (((props.windowWidth)*0.5)-10)*3/4 : props.windowWidth*3/4
            }
        )
    }

    render() {
        const img = images.filter((image) => (image.col===this.props.col && image.row===this.props.row))
        const items = det.filter((item) => (item.image_id === img[0].id));
        return (
            <div id={'midshow'}>
                <br></br>
                <h1 style={{fontSize: '2em'}}>{img[0].title}</h1>
                <br></br>
                <svg height={this.state.height} width={this.state.width} key={uuid()} style={{position:'absolute'}}>
                    <DrawItems items={items} detInfo={this.props.detInfo} height={this.state.height} width={this.state.width}/>
                </svg>
                <img style={this.imgStyle()} src={img[0].src} alt='Unspecified' ></img>
            </div>
        )
    }
}

export default Midshow
