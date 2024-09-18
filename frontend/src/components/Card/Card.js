import React from 'react'
import './Card.css'
const Card = ({ src, title, distance }) => {
  return (
    <div className="card">
      <img src={src} alt={title} />
      <div className="card-info">
        <p>{title}</p>
        <h4>{distance}</h4>
      </div>
    </div>
  )
}

export default Card;