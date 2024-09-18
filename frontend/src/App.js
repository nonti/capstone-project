import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
         <Header/>
       <Routes>
   
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       </Routes>
      
    </div>
  );
}

export default App;
