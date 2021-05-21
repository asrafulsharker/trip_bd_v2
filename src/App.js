import logo from './logo.svg';
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
function App() {
  return (
    <div className="App ">
      <TopNav/>
      <Nav1/>
      <Home/>
      <Explore/>
      <Featured/>
      <Guides/>
      <Testimonials/>
      <Trending/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
