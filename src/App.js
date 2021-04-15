import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Booked';

const App = () => {
const [data, setData] = useState();
  // get hotel data from api
  const getData = () =>
    fetch(`https://fake-hotel-api.herokuapp.com/api/hotels?count=9`)
      .then((res) => res.json())
  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])
  // add room to booked
  const onAdd = (hotel) => {
    const exist = bookedRoom.find((x) => x.id === hotel.id);
    if (exist) {
      setBookedRoom(
        bookedRoom.map((x) =>
          x.id === hotel.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBookedRoom([...bookedRoom, { ...hotel, qty: 1 }]);
    }
  };
  // remove room from booked 
  const onRemove = (hotel) => {
    const exist = bookedRoom.find((x) => x.id === hotel.id);
    if (exist.qty === 1) {
      setBookedRoom(bookedRoom.filter((x) => x.id !== hotel.id));
    } else {
      setBookedRoom(
        bookedRoom.map((x) =>
          x.id === hotel.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const [bookedRoom, setBookedRoom] = useState([]);
  // all  builing blogs component 
  return (data ?
    <div>
      <Header countRooms={bookedRoom.length}></Header>
      <div class="container-fluid">
        <div class="row mt-5">

          <Main data={data} onAdd={onAdd}></Main>
          <Basket bookedRoom={bookedRoom} onAdd={onAdd} onRemove={onRemove}></Basket>
        </div>
      </div>
    </div>
    // css loader
    : <div className="cssLoader">   
    <Loader
      type="Puff"
      color="#00BFFF"
      height={200}
      width={200}/></div>
  );
}


export default App;
