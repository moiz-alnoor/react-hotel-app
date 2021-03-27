import React from 'react';
import ReactStars from "react-rating-stars-component";
export default function Product(props) {
  const { hotel, onAdd } = props;
  return (
    // list of room data 
    <div>
      <img src={hotel.images[0]} class="card-img-top " alt={hotel.name} />
      <div class="card-body text-center">
        <p class="card-text">Hotel - {hotel.name}</p>
        <p class="card-text">Country - {hotel.country}</p>
        <p class="card-text">Price - <span class="badge bg-warning text-dark"> {hotel.price} USD</span> </p>
    <p className="d-flex justify-content-center">
      
        <ReactStars 
    count={5}
  isHalf={true}
    size={24}
    value={hotel.stars}
    activeColor="#ffd700"
  />
  </p>
       <hr/>
        <button type="button" class="btn btn-primary" onClick={() => onAdd(hotel)}>Book Room</button>
      </div>
    </div>
  );
}