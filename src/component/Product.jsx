import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { productItems } from './Array';

const Product = ( )=> {

    const [items , setItems] = useState(productItems);
    const [winWidth , setWinWidth ] =useState(window.innerWidth);
   
    useEffect(() => {
     
      const handelSize = ()=>{
        setWinWidth(window.innerWidth);
      }
      window.addEventListener('resize',handelSize);
      
      return ()=>{
        window.removeEventListener('resize',handelSize)
      }
    } , []);
    
    return(
        <div id="product" className='py-lg-5 mt-5'>
           <div className="container">

           <div className="heading border-5 border-start border-success ps-4 mb-5">
                <h5 className='text-success text-uppercase'>Product</h5>
                <h2 className='text-uppercase col-lg-6'>Keep your pets happy with the best food</h2>
            </div>

            <div>
                <OwlCarousel
                className='owl-carousel'
                items={winWidth<=450?"1":winWidth>=451 && winWidth<=600?"2" : winWidth>=601 && winWidth<=900? "3":'4'}
                dots
                loop
                autoPlay
                nav
                margin={10}
                >
                  {
                    items.map((item,index)=>{
                        const {img , name , price} = item;
                        return(
                            <div className="item" key={item+index}>
                              <div className='item-overlay'>
                                <button className="btn btn-outline-light text-uppercase">order now</button>
                                <button className="btn mt-3 btn-outline-light text-uppercase">watch later</button>
                                </div>
                            <div>
                            <img src={img} alt="" />
                            <h6>{name}</h6>
                            <div className='text-success'>{price}</div>
                            </div>
                        </div>
                        )
                    })
                  }
                   
                </OwlCarousel>
            </div>
           </div>
        </div>
    )

}

export default Product;