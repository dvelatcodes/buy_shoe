import React from 'react';
import {products} from '../utils/constant';


const Carousel = () => {
  return (
    <div className='w-[40vw]'>
        <div className='w-full'>
            <img src={products[0].name} alt="" className='w-full'/>
        </div>
        <div></div>
    </div>
  )
}

export default Carousel