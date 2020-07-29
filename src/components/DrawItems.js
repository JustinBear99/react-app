import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

export class DrawItems extends Component {
    rescale = (counts, oldsize, newsize) => {
        var newcounts = [];
        var i;
        for (i = 0; i < counts.length; i++) {
            newcounts.push([(counts[i][0]*newsize[0])/oldsize[0], (counts[i][1]*newsize[1])/oldsize[1]])
        }
        return newcounts
    }
    
    clickEvent = () => {
        return console.log('Hi')
    }

    render() {
     return this.props.items.map((item) => (
            <svg height={600} width={800} key={uuid()} style={{position:'absolute'}}  onClick={()=>{this.clickEvent()}}>
                <polygon points={this.rescale(item.segmentation.counts, item.segmentation.size, [600,800])} 
                         
                         fill={'red'} 
                         fillOpacity={0.5} 
                         stroke={'red'} 
                         cursor={'pointer'}></polygon>
            </svg>
        ));
    }
}

export default DrawItems
