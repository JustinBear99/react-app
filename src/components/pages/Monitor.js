import React, { Component } from 'react'
import Field from '../Field'
import Sideshow from '../Sideshow'
import Midshow from '../Midshow'

export class Monitor extends Component {
    state = {
        rows : [
            {
                id: 1,
            },
            {
                id:2,
            },
            {
                id:3,
            },
            {
                id:4,
            },
            {
                id:5,
            },
            {
                id:6,
            },
            {
                id:7,
            },
            {
                id:8,
            }
        ],
        col: 'A',
        row: 1,
        img: '../images/A1.jpg',
        num_stalks: 0,
        num_spears: 0,
        num_shoot: 0,
        h_obj: 0,
        w_obj: 0,
        cate_obj: 0,
        score: 0,
    }

    rtBtn = (c, r) => {
        this.setState({col: c, row: r, img:('../images/'+c+r.toString()+'.jpg')})
    }

    detInfo = (category, width, height, score, states) => {
        this.setState(
            {
                cate_obj: category,
                w_obj: width,
                h_obj: height,
                score: score,
                //num_stalks: states.num_stalks,
                //num_spears: states.num_spears,
                //num_shoots: states.num_shoots,
            }
        )
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <section style={fieldStyle}>
                    <Field rows={this.state.rows} rtBtn={this.rtBtn}/>
                </section>
                <aside style={{float:'right',width:'70%'}}>
                    <Midshow col={this.state.col} row={this.state.row} detInfo={this.detInfo}/>
                    <Sideshow col={this.state.col} row={this.state.row}/>
                </aside>
            </div>
        )
    }
}

const fieldStyle = {
    //backgroundColor: 'blue',
    float: 'left',
    padding: '20px 20px',
    width: '30%'
}

export default Monitor
