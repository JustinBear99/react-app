import React, { Component } from 'react'
import Field from '../Field'
import Sideshow from '../Sideshow'
import Midshow from '../Midshow'

export class Monitor extends Component {
    state = {
        rows : [
            {
                id: 1,
                img_A: '../images/A1.jpg',
                img_B: '../images/B1.jpg',
                img_C: '../images/C1.jpg',
                img_D: '../images/D1.jpg',
                img_E: '../images/E1.jpg',
                img_F: '../images/F1.jpg',
            },
            {
                id:2,
                img_A: '../images/A2.jpg',
                img_B: '../images/B2.jpg',
                img_C: '../images/C2.jpg',
                img_D: '../images/D2.jpg',
                img_E: '../images/E2.jpg',
                img_F: '../images/F2.jpg',
            },
            {
                id:3,
                img_A: '../images/A3.jpg',
                img_B: '../images/B3.jpg',
                img_C: '../images/C3.jpg',
                img_D: '../images/D3.jpg',
                img_E: '../images/E3.jpg',
                img_F: '../images/F3.jpg',
            },
            {
                id:4,
                img_A: '../images/A4.jpg',
                img_B: '../images/B4.jpg',
                img_C: '../images/C4.jpg',
                img_D: '../images/D4.jpg',
                img_E: '../images/E4.jpg',
                img_F: '../images/F4.jpg',
            },
            {
                id:5,
                img_A: '../images/A5.jpg',
                img_B: '../images/B5.jpg',
                img_C: '../images/C5.jpg',
                img_D: '../images/D5.jpg',
                img_E: '../images/E5.jpg',
                img_F: '../images/F5.jpg',
            },
            {
                id:6,
                img_A: '../images/A6.jpg',
                img_B: '../images/B6.jpg',
                img_C: '../images/C6.jpg',
                img_D: '../images/D6.jpg',
                img_E: '../images/E6.jpg',
                img_F: '../images/F6.jpg',
            },
            {
                id:7,
                img_A: '../images/A7.jpg',
                img_B: '../images/B7.jpg',
                img_C: '../images/C7.jpg',
                img_D: '../images/D7.jpg',
                img_E: '../images/E7.jpg',
                img_F: '../images/F7.jpg',
            },
            {
                id:8,
                img_A: '../images/A8.jpg',
                img_B: '../images/B8.jpg',
                img_C: '../images/C8.jpg',
                img_D: '../images/D8.jpg',
                img_E: '../images/E8.jpg',
                img_F: '../images/F8.jpg',
            }
        ],
        col: 'A',
        row: 1,
        img: '../images/A1.jpg',
    }

    rtBtn = (c, r) => {
        this.setState({col: c, row: r, img:('../images/'+c+r.toString()+'.jpg')})
    }

    render() {
        return (
            <div>
                <section style={fieldStyle}>
                    <Field rows={this.state.rows} rtBtn={this.rtBtn}/>
                </section>
                <aside style={{float:'right',width:'70%'}}>
                    <Midshow col={this.state.col} row={this.state.row}/>
                    <Sideshow />
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
