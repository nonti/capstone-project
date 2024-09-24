import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import StandardSearch from './components/SearchResult/standard/StandardSearch';
import AdminPage from './pages/AdminPage';
function App() {
  return (
    <div className="app">
      
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/search-luxe" element={<StandardSearch/>} />
        <Route path="/search-standard" element={<StandardSearch/>} />
       <Route path="/admin" element={<AdminPage />} />      
       </Routes>
    </div>
  );
}

export default App;
