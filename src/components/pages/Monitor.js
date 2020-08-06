import React, { Component } from 'react'
import Field from '../monitor/Field'
import Sideshow from '../monitor/Sideshow'
import Midshow from '../monitor/Midshow'

export class Monitor extends Component {

    state = {
        rows: [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}],
        cols: [{id: 'A'}, {id: 'B'}, {id: 'C'}, {id: 'D'}, {id: 'E'}, {id: 'F'}],
        currentRow: 1,
        currentCol: 'A',
        num_stalks: 0,
        num_spears: 0,
        num_shoots: 0,
        h_obj: 0,
        w_obj: 0,
        cate_obj: 0,
        score: 0,
        windowWidth: 0,
        windowHeight: 0,
    }

    rtBtn = (c, r) => {
        this.setState({currentCol: c, currentRow: r})
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

    portrait() {
       return (
           <div>
               <div style={midshowStylePortrait}> 
                   <Midshow col={this.state.currentCol} row={this.state.currentRow} detInfo={this.detInfo}/>
               </div>
               <div>
                    <section style={fieldStylePortrait}>
                        <Field cols={this.state.cols} rows={this.state.rows} rtBtn={this.rtBtn}/>
                    </section>
                    <aside style={sideshowStylePortrait}>
                        <Sideshow col={this.state.currentCol} row={this.state.currentRow} Info={this.state}/>
                    </aside> 
                </div>
           </div>
       )
    }

    landscape() {
        return (
            <div>
                <section style={fieldStyleLandscape}>
                    <Field cols={this.state.cols} rows={this.state.rows} rtBtn={this.rtBtn}/>
                </section>
                <aside style={{float: 'right', width: '70%'}}>
                    <section style={midshowStyleLandscape}>
                        <Midshow col={this.state.currentCol} row={this.state.currentRow} detInfo={this.detInfo}/>
                    </section>
                    <aside style={sideshowStyleLandscape}>
                        <Sideshow col={this.state.currentCol} row={this.state.currentRow} Info={this.state}/>
                    </aside>
                </aside>
            </div>
        )
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
      }
    
    componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    updateDimensions() {
        this.setState({windowHeight: window.innerHeight, windowWidth: window.innerWidth})
    }

    render() {
        return this.state.windowWidth < this.state.windowHeight ? this.portrait() : this.landscape()
    }
}

const fieldStylePortrait = {
    backgroundColor: 'blue',
    float: 'left',
    padding: '20px 20px',
    width: '50%'
}

const fieldStyleLandscape = {
    backgroundColor: 'blue',
    float: 'left',
    padding: '20px 20px',
    width: '30%'
}

const midshowStylePortrait = {
    backgroundColor: 'red',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
}

const midshowStyleLandscape = {
    backgroundColor: 'red',
    color: 'black',
    //alignItems: 'center',
    //justifyContent: 'center',
    float: 'left',
    width: '70%'
}

const sideshowStylePortrait = {
    backgroundColor: 'yellow',
    padding: '20px',
    color: 'black',
    float: 'right',
    width: '50%',
    fontSize: '16px',
    txtAlign: 'center',
}

const sideshowStyleLandscape = {
    backgroundColor: 'yellow',
    padding: '20px',
    color: 'black',
    float: 'right',
    width: '30%',
    fontSize: '16px',
}
export default Monitor
