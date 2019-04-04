import React, {Component} from 'react';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';
import Main from "../../pages/main";
import Products from "../../pages/products";


export default class Menu extends Component{
    render (){
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                </div>
                <Route exact path='/' component={Main} />
                <Route path='/products' component={Products} />
            </Router>
        )
    }
}