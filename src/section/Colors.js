import React, { Component } from 'react'
import "./Detail.css"

// class Colors extends Component {
function Colors() {
    

    // render() {

const {colors} = this.props
        return (
        <div className="colors">
            {colors.map((color, index) => (
                <button key={index} style={{ background: color }}>0</button>
            ))
            }
        </div>
        )
    }
// }
export { Colors}