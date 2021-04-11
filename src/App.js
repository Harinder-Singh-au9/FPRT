import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import "./bootstrap.min.css";
import Home from "./components/Home";
import About from "./pages/About";
import Form from "./pages/Form";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/about'><About /></Route>
        <Route path = "/createform"><Form/></Route>
      </Switch>
    </Router>
  );
}

export default App;
