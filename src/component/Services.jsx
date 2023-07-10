import React, { useState } from 'react'

import Items from './Array'

const Services = ()=>{
    const [items , SetItems] = useState(Items)
    return(
        <div id="services" className='mt-5'>
            <div className="container">
                <div className="heading">
                    <div className="h4 text-success text-uppercase text-center text-md-start">Services</div>
                    <h2 className='text-uppercase fw-bold pt-3 mb-md-4 col col-lg-4'>pet's care services that we are serving</h2>
                </div>


                <div className="row">
                  
                  {
                    items.map((item , index)=>{
                        const {icon , title , desc } = item;
                        return(
                            <div className="col-md-6 col-sm-12" key={index} >

                            <div className="card d-flex flex-row align-items-center bg-secondary-subtle py-2 px-4 my-4">
    
                                <div className='pe-3 text-success'><i className={icon} style={{fontSize:"60px"}}></i></div>
    
                                <div className="card-body">
    
                                    <h5 className="card-title pb-2">{title}</h5>
                                    <p className="card-text">{desc}</p>
                                    <a href="#" className="card-link text-decoration-none text-success"><span>READ MORE <i className="fa-solid fa-angles-right fa-fade"></i></span></a>
    
                                </div>
                            </div>
                        </div>
                        )
                    })
                  }

                </div>
            </div>
        </div>
    )
}

export default Services;