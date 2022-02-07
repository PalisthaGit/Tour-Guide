import React, { useState } from 'react';

const Tour = ({id, image, price, name, info, remove}) => {
    const [readMore, setReadMore] = useState(false);
  return <article className='single-tour'>
        <img src = {image} alt = {name}/>
        <footer>
        <div>
        <h3>{name}</h3>
        <h4 className='tour-price'>{price}</h4>
        </div> 
    
      <p>{readMore ? info : `${info.substring(0,200)}`}...
      <button onClick={()=>setReadMore(!readMore)}>{readMore ? "less" : "more"}</button>
      </p>   
      
      <button onClick={()=> remove(id)}>Not Interested</button>

        </footer>
      
  </article>;
};

export default Tour;
