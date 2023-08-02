import './App.css';
import Register from './Pages/Register';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home';
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route exact path='/home' Component={Home}/>
      <Route path='/' Component={Login}/>
      <Route path='/login' Component={Login}/>
      <Route path='/register' Component={Register}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
