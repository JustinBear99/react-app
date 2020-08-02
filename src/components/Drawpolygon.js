import React, { Component } from 'react'


export class Drawpolygon extends Component {
    state = {
        num_stalks: 0,
        num_spears:0,
        num_shoots: 0,
    }
    
    static getDerivedStateFromProps(props, state) {
        var i;
        var stalks = 0, spears = 0, shoots = 0;
        for (i = 0; i < props.items.length; i++) {
            if (props.items[i].category_id === 1) {
                stalks += 1
            } else if (props.items[i].category_id === 2) {
                spears += 1
            } else if (props.items[i].category_id === 3) {
                shoots += 1
            }
        }

        return {
            num_stalks: stalks,
            num_spears: spears,
            num_shoots: shoots,
        };
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
        const category_id = {1:'stalk', 2:'spear', 3:'shoot', 4:'bar'}
        const category = category_id[item.category_id]
        const width = (item.bbox[2]*800)/item.segmentation.size[1]
        const height = (item.bbox[3]*600)/item.segmentation.size[0]
        const score = item.score
        const num_stalks = this.state.num_stalks
        const num_spears = this.state.num_spears
        const num_shoots = this.state.num_shoots
        
        this.props.detInfo(category, width, height, score, num_stalks, num_spears, num_shoots)
    }

    render() {
        return (
            <polygon points={this.rescale(this.props.item.segmentation.counts, this.props.item.segmentation.size, [600,800])} 
                fill={'red'} 
                fillOpacity={0.5} 
                cursor={'pointer'}
                pointerEvents={'visible'}
                onClick={() => this.clickEvent(this.props.item)}
                ></polygon>
        )
    }
}

export default Drawpolygon
