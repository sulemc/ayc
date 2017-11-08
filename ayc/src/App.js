import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import { Home,
        Studios,
         Schedules,
          Teachers,
          Events,
          Blog,
          Shop,
          Register } from './components';


const App = () => (
    <div>
     <Navigation />
    <Route path="/Home" component={Home} />
    <Route path="/Studios" component={Studios} />
    <Route path="/Schedules" component={Schedules} />
    <Route path="/Teachers" component={Teachers} />
    <Route path="/Events" component={Events} />
    <Route path="/Blog" component={Blog} />
    <Route path="/Shop" component={Shop} />
    <Route path="/Register" component={Register} />  
    </div>
    )

export default App;
