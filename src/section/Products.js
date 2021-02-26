import { ListItemSecondaryAction } from '@material-ui/core';
import React from 'react'
import { Component } from 'react';
import { contextType } from 'react-modal';
import { Link } from 'react-router-dom';
import { useGlobalState, useGlobalStateUpdate } from '../contexts/AuthContexts'
import "./product.css"


// class Products extends Component {
    function Products() {
        
    const context = useGlobalState();
    // render() {
        const { products } = context
                return (
            <div id="product">

                {
                    products.map(product => (
                        <div className="card" key={product._id}>

                            <Link to={`/product/${product._id}`}>
                                <img src={product.src} alt="" />
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                                </h3>
                                <span>${product.price}</span>
                                <p>{product.description}</p>
                                <p>{product.colors}</p>

                                <button onClick={()=> this.context.addCart(product._id)}>Add to Cart</button>
                            </div>

                        </div>

                    ))
                }
            </div>
        )
    }
// }
export default Products