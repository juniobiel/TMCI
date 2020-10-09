import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/OurServices';

export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
            </Switch>
        </Router>
    );
}