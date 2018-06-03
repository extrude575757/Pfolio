
import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter,NavLink, Link, Route} from 'react-router-dom';  
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';



const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/" component={Home} exact={true}/>
    <Route path="/contact" component={Contact} />
    <Route path="/Portfolio" component={Portfolio} exact={true}/>
    <Route path="/portfolio/:id" component={PortfolioItem} />
    <Route component={NotFound} />
    </Switch>
    </div> 
    </BrowserRouter>
);

export default AppRouter;