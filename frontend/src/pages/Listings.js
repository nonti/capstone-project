import React from 'react'
const ListingPage = () => {
  return (
    <div>
      <div className="img-container">
          <div className="img-content">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-872294280468339009/original/9ac867f1-ec81-498b-b356-4b52c402fb75.jpeg?im_w=720"
              alt="img"
            />
            <button className="update">Update</button>
            <button className="delete">Delete</button>
          </div>
          <div className="img-content-info">
            <p>3 bedroom</p>
            <p>Sandton Hotel</p>
            <p>3 bedroom . 4 bath 2 . guest</p>
            <p>Wifi parking</p>
            <p>Rating price</p>
          </div>
          <hr />
        </div>
    </div>
  )
}

export default ListingPage