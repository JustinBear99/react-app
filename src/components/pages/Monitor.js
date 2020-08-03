import React, { Component } from 'react'
import Field from '../monitor/Field'
import Sideshow from '../monitor/Sideshow'
import Midshow from '../monitor/Midshow'

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

    detInfo = (category, width, height, score, num_stalks, num_spears, num_shoots) => {
        this.setState(
            {
                cate_obj: category,
                w_obj: width,
                h_obj: height,
                score: score,
                num_stalks: num_stalks,
                num_spears: num_spears,
                num_shoots: num_shoots,
            }
        )
    }

    portrait = () => {
       return (
           <div>
               <div>
                    <section style={{float: 'left', width: '50%'}}>
                        <Field rows={this.state.rows} rtBtn={this.rtBtn}/>
                    </section>
                    <aside style={{float: 'right', width: '50%'}}>
                        <Sideshow col={this.state.col} row={this.state.row} Info={this.state}/>
                    </aside> 
                </div>
                <div>
                    <Midshow col={this.state.col} row={this.state.row} detInfo={this.detInfo}/>
                </div>
           </div>
       )
    }

    landscape = () => {
        return (
            <div>
                <div style={fieldStyle}>
                    <Field rows={this.state.rows} rtBtn={this.rtBtn}/>
                </div>
                <div style={{float:'right',width:'70%'}}>
                    <Midshow col={this.state.col} row={this.state.row} detInfo={this.detInfo}/>
                    <Sideshow col={this.state.col} row={this.state.row} Info={this.state}/>
                </div>
            </div>
        )
    }

    componentWillMount = () => {
        if (window.innerWidth < window.innerHeight){
            return this.portrait()
        }
        else {
            return this.landscape()
        }
    }

    render() {
        return this.landscape()
    }
}

const fieldStyle = {
    //backgroundColor: 'blue',
    float: 'left',
    padding: '20px 20px',
    width: '30%'
}

export default Monitor
