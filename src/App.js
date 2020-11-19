import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Main from "./pages/main";
import Contact from "./pages/contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router >
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
