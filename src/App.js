import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import CourseStructure from "./component/CourseStructure";

function App() {
  return (
    <div className="App">
      <h1>Youtube Playlist</h1>
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/:coursename" component={CourseStructure} />
      </Router>
    </div>
  );
}

export default App;
