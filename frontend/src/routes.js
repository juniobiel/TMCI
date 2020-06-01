import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Construcao from './pages/Construcao';

export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Construcao} />
            </Switch>
        </Router>
    );
}