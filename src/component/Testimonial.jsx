import React, { useState } from 'react'

import {testimonail} from './Array'

const Testimonial = () => {

const [items , setItems] = useState(testimonail); 
    return (
        <div id="testimonial" className='pt-5 mb-5'>

            <div className="container">
                <div className="carousel slide m-md-auto col-md-8 col-lg-6 float-lg-end bg-white p-4" data-bs-ride='carousel' id='my-carousel'>

                    <div className="carousel-inner">

                      {
                        items.map((item,index)=>{
                            const {img , p, name,prof} =item;

                            return(
                                <div className={index===0?'carousel-item active text-center':'carousel-item text-center'} key={index}>
                                <img src={img} alt="" />
                                <div className="">
                                    <p>{p}</p>
    
                                    <span className='bottom-line'></span>
                                    <h4 className="mt-4">{name}</h4>
                                    <h6>{prof}</h6>
                                </div>
    
                            </div>
                            )
                        })
                      }

                    </div>

                    <button className="carousel-control-next" data-bs-target='#my-carousel' data-bs-slide='next'>
                        <span className="carousel-control-next-icon"></span>
                    </button>

                    <button className="carousel-control-prev" data-bs-target='#my-carousel' data-bs-slide='prev'>
                        <span className="carousel-control-prev-icon text-success"></span>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Testimonial;