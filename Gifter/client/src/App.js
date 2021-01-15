import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { PostList } from "./components/PostList";
import ApplicationViews from "./components/ApplicationViews";

function App() {
  return (
    // <div className="App">
    //   <PostList />
    // </div>
    <div className="App">
      <Router>
        <ApplicationViews />
      </Router>
    </div>
  );
}

export default App;