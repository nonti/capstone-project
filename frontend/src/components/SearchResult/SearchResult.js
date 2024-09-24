import React from 'react';
import './standard/StandardSearch.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const SearchResult = ({image, location, title, description, price, star, total}) => {
  return (
    <div className='search-result'>
      <img src={image} alt='' />
      <FavoriteBorderIcon className='search-result-heart' />
      <div className='search-result-info'>
        <div className='search-result-info-top'>
        <p>{location}</p>
          <h3>{title}</h3>
          <p>---</p>
        <p>{description}</p>
      </div>
      <div className='search-result-info-bottom'>
        <div className='search-result-stars'>
          <p>
             ⭐ {star}
          </p>
        </div>
        <div className='search-result-price'>
          <h2>{price}</h2>
          <p>{total}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SearchResult
