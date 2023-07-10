import React from 'react'

import bgRabit from '../imgs/rabit.jpg'


const Home = () =>{
    return(
        <div id="home">
           <div className="container">
           <h1 className="text-uppercase text-success " > 
                Pet setting
            </h1>

            <h2 className='text-white text-uppercase fw-bold ' style={{letterSpacing:'4px'}}>
                Make your pets healthy
            </h2>

            <p className="lead ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio dolore doloremque tempore eligendi nemo quo, esse, dignissimos at porro quod distinctio eum, nesciunt architecto incidunt explicabo minima? Ea, consequuntur natus?
            </p>

           <div className="btns pt-4">
           <button className='read-more text-capitalize'>
                Read more
            </button>

            <button className='btn-play text-success'><i className="fa-solid fa-video" style={{marginLeft: '-8px',fontSize:"x-large"}}></i></button>
            <span className='text-white ms-4 fw-bold '>Watch Video</span>
           </div>

           </div>

        </div>
    )
}

export default Home;