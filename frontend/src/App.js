import React from 'react';
import { Routes, Route } from 'react-router-dom' ;
import Home from './pages/Home';
import Header from './components/Header';
import Signin from './pages/Signin';
import SignUp from './pages/Signup';
// import Search from './pages/Search';
// import CreateListing from './pages/CreateListing';
// import Listing from './pages/Listing';
// import ListingDetails from './pages/ListingDetails';
// import Reservations from './pages/Reservations';
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        {/* <Route path='/search' element={<Search />} /> */}
        {/* <Route path='/create-listing' element={<CreateListing />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/listing-details' element={<ListingDetails />} /> */}
      </Routes>
    </div>
  )
}

export default App