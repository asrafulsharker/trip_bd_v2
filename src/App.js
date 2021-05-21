import './App.css';
import {Navbar,NavDropdown,Nav,FormGroup,Form,FormControl,Button} from 'react-bootstrap';
import Nav1 from './components/Nav/Nav';
import TopNav from './components/Nav/TopNav';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Featured from './components/Featured/featured';
import Guides from './components/Guides/Guides';
import Testimonials from './components/Testimonials/Testimonials';
import Trending from './components/Trending/Trending';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import Login from './components/Auth/Login/Login';
import Join from './components/Auth/Join/Join';

import {Switch , Route} from "react-router-dom";
function App() {
  return (
    <div className="App ">
      <TopNav/>
      <Nav1/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/explore" exact component={Explore}/>
        <Route path="/featured" exact component={Featured}/>
        <Route path="/guides" exact component={Guides}/>
        <Route path="/testimonial" exact component={Testimonials}/>
        <Route path="/trending" exact component={Trending}/>
        <Route path="/contact" exact component={Contact}/>

        <Route path="/login" exact component={Login}/>
        <Route path="/join" exact component={Join}/>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
