import React, { Component } from 'react';
import { Media } from '../component/Header';
import { Header } from '../component/Header'
import { MultiCard } from '../card/Card'
import { Banner } from "../banner/Banner"
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { DataProvider } from "../contexts/AuthContexts"
import { Section } from "./Section"
import Signup from '../foam/Signup'


class Home extends Component {
    render() {
        return (
            <DataProvider>

                <div className="Home_Page">
                    <div>
                        {/* Header pc*/}
                        <Header />
                    </div>
                    <div>
                        {/*miobile pc*/}
                        <Media />
                    </div>



                    {/* Card */}
                    <div>
                        <Banner />
                        <Signup />
                    
                    </div>
                    <div>
                        {/* Card */}
                        {/* <MultiCard /> */}
                        <Section />
                        {/* <h1>x</h1> */}
                    </div>
                    {/* <Section /> */}
                </div>
            </DataProvider>

        );
    }
}

export default Home;