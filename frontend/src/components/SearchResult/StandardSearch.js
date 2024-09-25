import React from 'react';
import './SearchResult.css';
import { Button } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import SearchResult from './SearchResult';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  
  const searchLocation = query.get('location') || 'Your Destination';
  

  return (
    <>
    <div className='searchPage'>
      <div className='search-page-info-standard'>
        <Button variant="outlined">Price <KeyboardArrowDownOutlinedIcon /></Button>
        <Button variant='outlined'>Type of place <KeyboardArrowDownOutlinedIcon /></Button>
        <Button variant='outlined'>Free cancellation</Button>
        <Button variant='outlined'>Wifi</Button>
        <Button variant='outlined'>Kitchen</Button>
        <Button variant='outlined'>Air conditioning</Button>
        <Button variant='outlined'>Washer</Button>
        <Button variant='outlined'>Iron</Button>
        <Button variant='outlined'>Dedicated workspace</Button>
        <Button variant='outlined'>Free parking</Button>
        <Button variant='outlined'>Dryer</Button>
        <Button variant='outlined'><TuneOutlinedIcon />Filter</Button>
      </div>
      <hr/>
      <div className='search-page-results-text'>
        {`200+ stays in ${searchLocation}`}
      </div>
      
      <hr/>
      {/* Replace with actual search results */}
      <SearchResult
        image='https://a0.muscache.com/im/pictures/miso/Hosting-872294280468339009/original/9ac867f1-ec81-498b-b356-4b52c402fb75.jpeg?im_w=720'
        title='Stay at this spacious Edwardian House'
        description='1 guest. 1 bedroom . 1.5 shared bathroom . Wifi Kitchen Free parking'
        star='4.73 (318 reviews)'
        price='R30 / night'
        total='R 117 total'
      />
    </div>
    </>
  );
}

export default SearchPage;
