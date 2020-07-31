import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import Drawpolygon from './Drawpolygon';

export class DrawItems extends Component {
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

    render() {
        var items = this.props.items
        return items.map((item) => (
            <Drawpolygon key={uuid()} item={item} detInfo={this.props.detInfo}/>
        ));
    }
}

export default DrawItems
