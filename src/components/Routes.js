import React from 'react';
import { 
    BrowserRouter,
    Switch,
    Route 
} from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} ></Route>
            <Route exact path="/about" component={About} ></Route>
            <Route exact path="/contact" component={Contact} ></Route>

        </Switch>
    </BrowserRouter>
)

export default Routes