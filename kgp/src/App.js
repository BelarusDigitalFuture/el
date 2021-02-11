import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Welcome from "./Welcome";
import KidDetails from "./KidDetails";
import Kindergartens from "./Kindergartens";
import Confirmation from "./Confirmation";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminView from "./AdminView";
import DistributionView from "./DistributionView";

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
                  <Route path="/admin" component={AdminView} />
                  <Route path="/distribution" component={DistributionView} />
              </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;
