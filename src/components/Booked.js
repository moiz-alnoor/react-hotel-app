import React from 'react';

// chosen rooms for booked

export default function Booked(props) {

const { bookedRoom, onAdd, onRemove } = props;
  return (
    <div class="col-4">
      {bookedRoom.length ?
        // if  room has selected 
        <div class="row">
          <div class="col-12">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                <div><span class="badge bg-warning text-dark"> {bookedRoom.length}</span> Room Booked </div>
              </a>
              <div class="list-group-item list-group-item-action">
                {bookedRoom.map((room) => (
                  <div key={room.id}>
                    <div class="col">
                      <button class="btn btn-outline-warning m-1" onClick={() => onRemove(room)}>
                        -
                      </button>
                      <span>for {room.qty} night </span>
                      <button class="btn btn-outline-warning m-1" onClick={() => onAdd(room)}>
                        +
                     </button>
                     price is  <span class="badge bg-warning text-dark"> {room.qty * room.price} USD </span>
                    </div>

                  </div>

                ))}
              </div>
            </div>
          </div>
        </div>
        :
        // if not room selected yet    
        <div class="row">
          <div class="col-12">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                <div>Empty ...  </div>
              </a>
            </div>
          </div>
        </div>

      }
    </div>

  )

}