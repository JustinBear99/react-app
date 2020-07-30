import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

export class DrawItems extends Component {
    state = {
        num_stalks: 0,
        num_spears:0,
        num_shoots: 0,
    }
    rescale = (counts, oldsize, newsize) => {
        var newcounts = [];
        var i;
        for (i = 0; i < counts.length; i++) {
            newcounts.push([(counts[i][0]*newsize[0])/oldsize[0], (counts[i][1]*newsize[1])/oldsize[1]])
        }
        return newcounts
    }
    
    clickEvent = (item) => {
        const category_id = {1:stalk, 2:spear, 3:shoot, 4:bar}
        const width = (item.bbox[2]*800)/item.segmentation.size[1]
        const height = (item.bbox[3]*600)/item.segmentation.size[0]
        const score = item.score


        return () =>{this.props.detInfo()}
    }

    render() {
        var items = this.props.items
        var i;
        for (i = 0; i < items.length; i++) {
            if (items[i].image_id === 0) {
                if (items[i].category_id === 1) {
                    this.state.num_stalks += 1
                } else if (items[i])
            }
        }

        return items.map((item) => (
            <svg height={600} width={800} key={uuid()} style={{position:'absolute'}}  onClick={()=>{this.clickEvent(item)}}>
                <polygon points={this.rescale(item.segmentation.counts, item.segmentation.size, [600,800])} 
                         fill={'red'} 
                         fillOpacity={0.5} 
                         cursor={'pointer'}></polygon>
            </svg>
        ));
    }
}

export default DrawItems
