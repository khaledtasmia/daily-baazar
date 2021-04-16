import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import OrderPlaced from "./components/OrderPlaced/OrderPlaced";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { createContext, useState } from "react";
import CreateAcc from "./components/CreateAcc/CreateAcc";
import Orders from "./components/Orders/Orders";
export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/checkOut/:id">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/orderPlaced/:id">
              <OrderPlaced />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders/>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Redirect from="/login" to="/create" />
            <Route path="/create">
              <CreateAcc></CreateAcc>
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
