import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

const SearchResult = ({image, location, title, description, price, star, total}) => {
  return (
    <div className='search-result'>
      <img src={image} alt=''/>
      <FavoriteBorderIcon className='search-result-heart' />
      <div className='search-result-info'>
        <div className='search-result-info-top'>
        <p>{location}</p>
        <Link to={`/listing-info/${title}`} className='search-result-title'>
        <h3>{title}</h3>
        </Link>
          
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
