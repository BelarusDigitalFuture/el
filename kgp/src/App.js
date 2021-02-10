import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Welcome from "./Welcome";
import KidDetails from "./KidDetails";
import Kindergartens from "./Kindergartens";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <Switch>
                  <Route exact path="/" component={Welcome} />
                  <Route path="/kidDetails" component={KidDetails} />
                  <Route path="/kindergartens" component={Kindergartens} />
                  <Route path="/confirmation" component={Confirmation} />
              </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;
