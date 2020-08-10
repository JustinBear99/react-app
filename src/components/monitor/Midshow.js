import React, { Component } from 'react'
import {v4 as uuid} from 'uuid'
import images from './Images'
import DrawItems from './DrawItems'
import det from '../../detection/coco_instances_results_converted.json'

export class Midshow extends Component {
    state = {
        width: 10,
        height: 10,
    }

    imgStyle = () => {
        return {
            width: `${this.state.width}px`,
            height: `${this.state.height}px`,
        }
    }

    componentDidMount() {
        const w = document.getElementById('midshow').clientWidth
        this.setState({width: w*0.9})
        this.setState({height: w*0.75*0.9})
    }

    render() {
        const img = images.filter((image) => (image.col===this.props.col && image.row===this.props.row))
        const items = det.filter((item) => (item.image_id === img[0].id));

        return (
            <div id={'midshow'}>
                <br></br>
                <h1 style={{fontSize: '30px'}}>{img[0].title}</h1>
                <br></br>
                <svg height={this.state.height} width={this.state.width} key={uuid()} style={{position:'absolute'}}>
                    <DrawItems items={items} detInfo={this.props.detInfo} height={this.state.height} width={this.state.width}/>
                </svg>
                <img style={this.imgStyle()} src={img[0].src} alt='Unspecified'></img>
            </div>
        )
    }
}

export default Midshow
