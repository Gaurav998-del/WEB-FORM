import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import HeadTail from './components/HeadTail';
import PageNotFound from './components/PageNotFound';
import StartPage from './components/StartPage'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Signup/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/startpage" element={<StartPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/head-tail" element={<HeadTail/>} />
        <Route path="/*" element={<PageNotFound />} />

    
      </Routes>
    </Router>
  );
};

export default App;
