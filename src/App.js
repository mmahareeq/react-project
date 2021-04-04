
import './App.css';
import Header from './components/header.js';

import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';
import {
  AppContext} from './Context'
function App() {
  return (
    <div className="App-app">
      <AppContext>
     <Router>
        <Header/>
        <Switch>
          
          <Route path="/About"  component={About}/>
          <Route path="/"  component={Home}/>
           
        </Switch>
      </Router>
      </AppContext>
    </div>
  );
}

export default App;
