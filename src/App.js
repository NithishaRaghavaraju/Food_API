import React from 'react';
import AllRoutes from './Allroutes';
import {BrowserRouter as Router} from "react-router-dom"

function App() {

  return (
    <div>
       <Router>
      <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
