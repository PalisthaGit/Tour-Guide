import React from 'react';
import Tour from './Tour';

const Tours = ({tours, remove}) => {
  return <section>
    <div>
    <h1 className='title'>Our Tours</h1>
       <div className='underline'></div>
    </div>
          
   {
     tours.map((tour)=> {
     
       return <>
  
       <div key= {tour.id}>
       <Tour {...tour} remove = {remove}/>
       </div>
      
       </>
     })
   }

  </section>;
};

export default Tours;
