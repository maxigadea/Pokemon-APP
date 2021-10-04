import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <LandingPage />
    </div>
    </BrowserRouter>
  );
}

export default App;
