import { Route, Switch, useLocation, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Lenders from "./pages/Lenders";
import Advisory from "./pages/Advisory";
import Sme from "./pages/Sme";
import Login from "./pages/Login";
import Investment from "./pages/Investment";
import Borrowing from "./pages/Borrowing";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/lending">
          <Lenders />
        </Route>
        <Route path="/advisory">
          <Advisory />
        </Route>
        <Route path="/sme">
          <Sme />
        </Route>
        <Route path="/invest">
          <Investment />
        </Route>
        <Route path="/borrow">
          <Borrowing />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
