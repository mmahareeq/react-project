import React,{useState} from 'react';
import './App.css';

import List from './List.js';
import data from './data.js';
function App() {
  const [people,setPeople] = useState(data)
  return (
    <div className="App">
      <section className="container">
      <h2> {people.length} birthdays today</h2>
      <List people={people} />
      <button className='btn-clear' onClick={()=>setPeople([])}>Clear All</button>
      </section>
    </div>
  );
}

export default App;
