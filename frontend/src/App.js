import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
         <Header/>
       <Routes>
   
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       </Routes>
      <Footer/>
    </div>
  );
}

export default App;
