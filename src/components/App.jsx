import React from 'react';
import Landing from './Landing.jsx';
import Products from './Products.jsx';
import OnlineOrder from './OnlineOrder.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Cart from './Cart.jsx';

function App(){

    return (<div>
    <Navbar />
    <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/products" component={Products} />
            <Route path="/onlineOrder" component={OnlineOrder} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route component={Error}/>
    </Switch>
        </div>);
}

export default App;