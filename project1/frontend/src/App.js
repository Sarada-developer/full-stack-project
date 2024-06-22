import logo from './logo.svg';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import Add_user from './components/add_user'; 

function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
     <Switch>
               <Route exact path="/" component={Home}/>
               <Route path="/add_user" component={Add_user}/>
           </Switch>

     </Router>
    </div>
  );
}

export default App;

