import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './component/common/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
    </div>
  );
}

export default App;
