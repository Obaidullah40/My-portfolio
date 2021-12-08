
import './App.css';
import Home from './Component/Home';
import About from './Component/About/About';
import Service from './Component/Services/Service';
import Projects from './Component/Projects/Projects';
import Blogs from './Component/Blog/Blogs';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Skills from './Component/Skills/Skills';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewProject from './Component/ViewProject/ViewProject';
import NavBar from './Component/NavBar/NavBar';
import ViewProject2 from './Component/ViewProject2/ViewProject2';
import ViewProject3 from './Component/ViewProject3/ViewProject3';

function App() {
  return (
    <div className="App">
    <Router>
                <Switch>
                    <Route exact path="/">
                      <NavBar></NavBar>
                        <Home></Home>
                        <About></About>
                        <Service></Service>
                        <Projects></Projects>
                        <Skills></Skills>
                        <Blogs></Blogs>
                        <Contact></Contact>
                        <Footer></Footer>
            </Route>
            <Route path="/projectDetails">
              <ViewProject></ViewProject>
            </Route>
            <Route path="/projectDetails2">
              <ViewProject2></ViewProject2>
            </Route>
            <Route path="/projectDetails3">
              <ViewProject3></ViewProject3>
            </Route>


                </Switch>
            </Router>
    </div>
  );
}

export default App;
