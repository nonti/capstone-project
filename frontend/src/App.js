import { Route, Routes,useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import StandardSearch from './components/SearchResult/standard/StandardSearch';
import AdminPage from './pages/AdminPage';
import Footer from './components/Footer/Footer';
function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={isHomePage ? 'home-background' : 'white-background'}>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/search-luxe" element={<StandardSearch/>} />
        <Route path="/search-standard" element={<StandardSearch/>} />
       <Route path="/admin" element={<AdminPage />} />      
       </Routes>
      <Footer/>

    </div>
  );
}

export default App;
