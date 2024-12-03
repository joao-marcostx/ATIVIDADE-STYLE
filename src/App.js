
import './App.css';
import Login from './Pages/Login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
