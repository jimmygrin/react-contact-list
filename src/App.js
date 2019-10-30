import React from 'react';
import Individual from "./Individual"
import List from "./List" 
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Contacts from "./randomUsers.json" 

function App(props) {
  return (
    <Router>
      <div>
    
    <Route exact path = "/" component = {List} />
    <Route path = "/Individual/:id" component={Individual} />
     
    </div>
    </Router>
)

}

export default App;
