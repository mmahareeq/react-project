
import './App.css';
import Header from './components/header.js';

import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import {AppProvider} from './Context.js';
import About from './About.js';
import Home from './Home.js';
import Cocajtaillist from './components/Cocajtaillist'

function App() {
  return (
    <div className="App-app">
      <AppProvider>
     <Router>
        <Header/>
        
        
        
        <Switch>
          
          <Route path="/About"  component={About}/>
          <Route path="/"  component={Home}/>
           
        </Switch>
      </Router>
     </AppProvider>
    </div>
  );
}

export default App;
