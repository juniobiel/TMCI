import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );
}