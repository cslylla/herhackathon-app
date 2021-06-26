import './App.css';

import {Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";

import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <Router>
      <HeaderBar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/apply" component={Apply}/>
      <Route path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}
