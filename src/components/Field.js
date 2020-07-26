import React, { Component } from 'react'

export class Field extends Component {
    render() {
        return (
            <section style={fieldStyle}>
                <div>
                    <button>1</button><button>2</button><button>3</button>
                </div>
                <div>
                    <button>4</button><button>5</button><button>6</button>
                </div>
            </section>
        )
    }
}

const fieldStyle = {
    float: 'left',
    padding: '20px 20px',
}

export default Field
