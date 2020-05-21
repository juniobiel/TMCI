import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Contato from './pages/Contato';

export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Contato} />
            </Switch>
        </Router>
    );
}