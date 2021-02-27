import React, { Component } from 'react';
import './Header.css'
import './Headermobile.css'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import FadeMenu from './menu'
import Signup from '../foam/Signup'
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';


// import React, { Component } from 'react';
const Header = () => {

    return (
        <div className="header fixed flex aic">
            <div className="logo"><a href="#"><img src="https://cdn.freebiesupply.com/logos/thumbs/2x/sweet-candy-logo.png" height="50px" width="60px" /></a> </div>

            <div className="location rel flex aic">
                <div className="fa fa-search ico s24" />
                <input className="lable" placeholder="your location" value="Pakistan" />
                <FadeMenu />
            </div>

            <div className="search flex aic">
                <input placeholder="Find Cars, Moble Phone and More..." className="query" />
                <button className="fa fa-search ico s24 go cfff"></button>
            </div>

            <div className="actions flex aic">
                <Link to="./Login"><button className="login s15" >Login</button></Link>
                <button className="sell color flex aic">
                    <div className="fa fa-plus ico "></div>
                    <h4 className="s16 fontb ">Sell</h4>
                </button>
            </div>
        </div>

    )

}

class Media extends React.Component {
    render() {
        function openNav() {
            document.getElementById('myNav').style.width = "100%"
        }

        function closeNav() {
            document.getElementById('myNav').style.width = "0%"
        }
        return (
            <div className="mobile_navbar">
                <div id="myNav" class="overlay">
                    <a href="javascript:void(0)" class="closebtn" onClick={() => closeNav()}>&times;</a>
                    <div class="overlay-content">
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <span className="span_bar" onClick={() => openNav()}>&#9776;Olx </span>


            </div>)
    }
}


export { Header, Media, }
// class Header extends Component {
//     render() {
//         function myFuncation() {
//               document.getElementById("myDIV").classList.toggle("fa-angle-down");
//             }
//     return (<div className="Header_maindiv">
// <div>
//     <img src="https://www.samaa.tv/wp-content/uploads/2018/11/OLX-logo.png" height="40px" width="40px" />
// </div>
// <div className="Headersearchbar">
// {/* Car,Mobile,Phone and */}
// <span className="span_location_boader">

//      <input type="text" placeholder="Find  area" name="search" className="text_location" />
//      <i id="myDIV" onClick={()=>myFuncation()} className="fa fa-angle-up"></i>
// </span>

// {/* <input type="text" class="form-control" placeholder="Your Email" id="mail" name="email"> */}
//       <input type="text" placeholder="Find  more.." name="search" className="text"   />
//       <button type="submit" className="texticon"><i class="fa fa-search"></i></button>


// </div>
// <div>
//       <button type="submit" className="texticon"><i class="fa fa-search"></i></button>

//       <button type="submit" className="texticon"><i class="fa fa-search"></i></button>
// </div>

//               </div>)}}

// export default Header;