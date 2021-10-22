import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './home/home';
import Search from "./search/Search";


function App() {
  return (
 <>
      <Router>
        <Switch>

          <Route path="/" exact>
              <Home/>
          </Route>

          <Route path="/search">
            <Search/>
          </Route>

        </Switch>
      </Router>
      
  </>
  );
}

export default App;
