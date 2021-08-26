import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import DetailView from './containers/DetailView';

import Write from './components/Write';




function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route exact path='/write' component={Write} />
                    <Route exact path='/details/:id' component={DetailView} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
