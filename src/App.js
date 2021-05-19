// import logo from "./logo.svg";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Detailspage from "./components/Detailspage.jsx";
import Searchpage from "./components/Searchpage.jsx";
import JobIndicator from "./components/JobIndicator.jsx";
import FavouriteJob from "./components/FavouriteJob.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <JobIndicator />
      <Route exact path="/" component={Searchpage} />
      <Route path="/:id" component={Detailspage} />
      <Route path="/favourite" exact component={FavouriteJob} />
    </BrowserRouter>
  );
}

export default App;
