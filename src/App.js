import Welcome from './Welcome.js'
import Signin from './Signin.js'
import Explore from './Explore.js'
import Listing from './Listing.js'
import Cart from './Cart.js'
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Switch>
            <Route path="/explore">
              <Explore/>
            </Route>
            <Route path="/categories">
              <Listing/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/signin">
              <Signin/>
            </Route>
            <Route path="/">
              <Welcome/>
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
