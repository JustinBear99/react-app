import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import Drawpolygon from './Drawpolygon';

export class DrawItems extends Component {
    

    render() {
        var items = this.props.items
        return items.map((item) => (
            <Drawpolygon key={uuid()} item={item} items={items} detInfo={this.props.detInfo}/>
        ));
    }
}

export default DrawItems
