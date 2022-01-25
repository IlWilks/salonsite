import logo from './logo.svg';
import { Route, Switch} from 'react-router-dom';
import  Home  from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Service} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
    </>
  );
}

export default App;
