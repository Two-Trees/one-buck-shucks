import React from "react";
import List from "./components/List";
// import Input from "./components/Input";
// import Dropdown from "./components/Dropdown";
import Day  from "./components/Day";
import Location from "./components/Location";
import "./styles/index.css";


function App() {
  return (
    <div>
      <div className="container">
        <div className="App">
        <div className="shucks">
          <h1>One Buck Shucks</h1>
        </div>
        <div className="drop">
         <Location />
         <Day />
         </div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;