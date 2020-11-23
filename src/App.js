import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Main from "./pages/main";
import Contact from "./pages/contact";
import AboutMe from "./pages/aboutme";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Router>
        <Switch>
          <Link to path="/">
            <Main />
          </Link>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
