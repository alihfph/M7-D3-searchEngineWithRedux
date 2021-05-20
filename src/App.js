// import logo from "./logo.svg";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detailspage from "./components/Detailspage.jsx";
import Searchpage from "./components/Searchpage.jsx";
import JobIndicator from "./components/JobIndicator.jsx";
import FavouriteJob from "./components/FavouriteJob.jsx";
import Navbar from "./components/navbar.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <JobIndicator />
      <Switch>
        <Route exact path="/" component={Searchpage} />
        <Route path="/favourites" exact component={FavouriteJob} />
        <Route path="/:id" component={Detailspage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
