import React, { useEffect, useState } from 'react';
import  Loading  from './Loading';
import Tours from './Tours';

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const remove = (id) => {


    const newTours = tours.filter((tour)=>tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchTours();
  },[])

  if(loading){
  return <Loading/>
  }
  if(tours.length === 0) {
    return(
      <main>
         <button className='btn' onClick={fetchTours}>Referesh</button>
      </main>
     
    );
  }
  return <main>
    <Tours tours = {tours} remove = {remove}/>
  </main>;
};

export default App;
