import { formatMs } from '@material-ui/core'
import React, { Component } from 'react';
import Products from '../section/Products';
import Detail from '../section/Detail';
import { Route } from "react-router-dom"
import { Cart } from '../section/Cart'
import "./section.css";

class Section extends Component {
    render() {
        return (
            <div>
                <section className="Section">
                    <Route path="/product" component={Products} exact />
                    <Route path="/product/:id" component={Detail} />
                    <Route path="/cart" component={Cart}></Route>
                </section>
            </div >
        )
    }
}

export { Section }