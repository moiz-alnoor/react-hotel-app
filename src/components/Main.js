import React from 'react';
import Hotel from './Hotel';

export default function Main(props) {
  const { data, onAdd } = props;
  return (
    // Mian hotel block ui, for data render in list
    <div class="col-sm-8">
      <div class="row ">
        {data.map((hotel) => (
          <div class="col-4 mb-5">
            <div class="card shadow-none p-3 mb-5 rounded">
              <Hotel key={hotel.id} hotel={hotel} onAdd={onAdd}></Hotel>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}