import React, { Component } from 'react';
import Content from './content';
import Footer from './footer';
import Header from './header';
// import Home from './home';
// import Menu from './menu';

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>   
                <Footer/>
            </div>
        );
    }
}

export default Main;