import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

export class Drawpolygon extends Component {
    
    rescale = (counts, oldsize, newsize) => {
        var newcounts = [];
        var i;
        for (i = 0; i < counts.length; i++) {
            newcounts.push([(counts[i][0]*newsize[0])/oldsize[0], (counts[i][1]*newsize[1])/oldsize[1]])
        }
        return newcounts
    }

    clickEvent = (item) => {
        const plg = document.getElementsByTagName('polygon')
        const category_id = {1:'stalk', 2:'spear', 3:'shoot', 4:'bar'}
        const category = category_id[item.category_id]
        const width = (item.bbox[2]*800)/item.segmentation.size[1]
        const height = (item.bbox[3]*600)/item.segmentation.size[0]
        const score = item.score
        console.log(score)
        this.props.detInfo(category, width, height, score)
    }

    componentDidMount() {
        document.addEventListener('click', this.clickEvent);
    }

    componentWillMount() {
        document.removeEventListener('click', this.clickEvent);
    }

    render() {
        const plg = document.getElementsByTagName('polygon')
        return (
            <svg height={600} width={800} key={uuid()} style={{position:'absolute'}}>
                <polygon points={this.rescale(this.props.item.segmentation.counts, this.props.item.segmentation.size, [600,800])} 
                    fill={'red'} 
                    fillOpacity={0.5} 
                    cursor={'pointer'}
                    pointerEvents={'visible'}
                    
                    ></polygon>
            </svg>
        )
    }
}

export default Drawpolygon
