import React, { Component } from 'react'
import {useGlobalState} from '../contexts/AuthContexts'
import {Link} from 'react-router-dom'
import {Colors} from '../section/Colors'
import "../section/Detail.css"

// class Cart extends Component {
    function Cart() {
        
    
const context = useGlobalState()
    // render() {
        const {cart} = context
        return (

            <div>
                {
                cart.map(item => (
                    <div className="detail" key={item._id}>
                        <img src={item.src} alt="" />
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price}</span>
                            </div>
                            <span>${item.colors}</span>
                            <Colors colors={item.colors} />
                            <p>{item.description}</p>

                            <Link to="/cart" className="cart">
                                Add to Cart
                                </Link>
                        </div>
                    </div>
                )
                )}
            </div>
        )

    }
// }

export {
    Cart
}
