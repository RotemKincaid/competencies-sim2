import React from "react";
import Header from "./Components/Header/Header";
// import House from "./Components/House/House";
// import Wizard from "./Components/Wizard/Wizard";
// import Dashboard from "./Components/Dashboard/Dashboard";
import routes from "./routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      {/* <House /> */}
    </div>
  );
}

export default App;
