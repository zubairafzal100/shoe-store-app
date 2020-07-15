import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Product from './Components/Product';
import ProductItems from './Components/ProductItems';
import About from './Components/About';
import PageError from './Components/NotFound';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function RoutesConfig() {
    return (
        <Router>
            <Header />

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/product"><Product /></Route>
                <Route path="/product/:id"><ProductItems /></Route>
                <Route path="/about"><About /></Route>
                <Route path='*'>
                    <PageError />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default RoutesConfig;
