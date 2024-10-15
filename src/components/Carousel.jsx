import React from 'react';
import {products} from '../utils/constant';


const Carousel = () => {
  return (
    <div>
        <div>
            <img src={products[0].name} alt="" />
        </div>
        <div></div>
    </div>
  )
}

export default Carousel