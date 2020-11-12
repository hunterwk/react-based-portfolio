import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Main from "./pages/main";
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
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
