import './App.css';
import axios from 'axios'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import PokemonCreate from './components/PokemonCreate';
import Detail from './components/Detail';
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/' component={LandingPage} />
        <Route path= '/home' component={Home} />
        <Route exact path= '/pokemon' component={PokemonCreate} />
        <Route exact path= '/pokemon/:id' component={Detail} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
