import React from 'react';
import './SearchPage.css';
import { Button } from '@mui/material';
import SearchResult from '../SearchResult';

const LuxeSearch = () => {

  return (
    <div className='searchPage'>
     <div className='search-page-results-text'>200+ Airbnb Luxe stays in Bordeaux</div>
      <div className='search-page-info-standard'>
        <Button variant='outlined'>Free cancellation</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant='outlined'>Instant Book</Button>
        <Button variant='outlined'>More filters</Button>
      </div>

      <SearchResult
        image='https://a0.muscache.com/im/pictures/miso/Hosting-872294280468339009/original/9ac867f1-ec81-498b-b356-4b52c402fb75.jpeg?im_w=720'
        title='Stay at this spacious Edwardian House'
        description='1 guest. 1 bedroom . 1.5 shared bathroom . Wifi Kitchen Free parking'
        star='4.73 (318 reviews)'
        price='R30 / night'
        total='R 117 total'
      />
    </div>
  );
}

export default LuxeSearch;
