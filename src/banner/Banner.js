import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import "./Banner.css"
// import { DataContext } from '../contexts/AuthContexts'
import { useGlobalState, useGlobalStateUpdate } from '../contexts/AuthContexts'
// import Section from '../const/Section'

import React, { Component } from 'react'

//  class Banner extends Component {
     function Banner (){
        const context = useGlobalState()    
    // render() {
        const { cart } = context
        return (
            <div>
                 <br />
            {/* <Card> */}
                <div className="nav-cart">

                    <Link to="/cart">
                        <span>{cart.length}</span>
                        <i class="fa fa-shopping-cart" ></i>
                    </Link>
{/* <Section /> */}
                </div>
                {/* <h1>Banner</h1> */}

            {/* </Card> */}
            </div>
        )
    }
// }

export {
    Banner
}

// function Banner() {
//     return (
//         <div>
           
//         </div>
//     )
// }

// import { useGlobalState, useGlobalStateUpdate } from "./../../context/globalContext"

// const Dashboard = () => {

//     const globalState = useGlobalState()
//     const setGlobalState = useGlobalStateUpdate()



//     return (<div>

//         <h1>Dashboard</h1>
//         <button onClick={() => {
//             setGlobalState(prev => ({ ...prev, darkTheme: !prev.darkTheme }))
//         }}

//         >toggle</button>
//         {"===>" + JSON.stringify(globalState)}

//         <p>this is a protexted route</p>

//     </div>)
// }
// export default Dashboard;