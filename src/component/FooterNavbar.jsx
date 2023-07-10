import React from 'react'

const FooterNavbar = () => {
    return (

        <div id="footer-navbar" className='py-5'>
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-md-6 col links">

                        <h5 className="text-success fw-bold pb-2 text-uppercase">Quick Links</h5>

                        <div className='pb-2'>
                            <span className='text-success pe-2'>&rarr; </span><a href="#" className=" text-white">Home</a>
                        </div>
                        <div className='pb-2'>
                            <span className='text-success pe-2'>&rarr; </span><a href="#" className=" text-white">About Us</a>
                        </div>
                        <div className='pb-2'>
                            <span className='text-success pe-2'>&rarr; </span><a href="#" className=" text-white">Our Services</a>
                        </div>
                        <div className='pb-2'>
                            <span className='text-success pe-2'>&rarr; </span><a href="#" className=" text-white">Team Members</a>
                        </div>
                        <div className='pb-2'>
                            <span className='text-success pe-2'>&rarr; </span><a href="#" className=" text-white">Contact Us</a>
                        </div>

                    </div>


                    <div className="col-lg-3 col-md-6 col text-white">
                        <h5 className='text-success fw-bold pb-2 text-uppercase'>get in touch</h5>

                        <p style={{ fontWeight: '550' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti doloribus tenetur dolorem rerum dolorum.</p>

                        <div className='row address'>

                            <div className="col">
                                <span className="pe-2"><i className="fa-solid fa-location-dot text-success"></i></span>
                                Street #333, Pabbi Peshawar , Pakistan
                            </div>

                            <div className="col py-2 overflow-elip "style={{wordWrap:'break-word'}}>

                                <a href='#' className='text-decoration-none text-white'>
                                    <span className="pe-2"> <i className="fa-solid fa-envelope text-success "></i></span>
                                    muhammad.abbas.edu.now@gmail.com
                                </a>
                            </div>

                            <div className="col">
                                <span className='pe-2'><i className="fa-solid fa-phone text-success"></i></span>
                                +923219767115
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-6 col popular-links">

                        <h5 className='text-success fw-bold text-uppercase'>popular links</h5>
                        <div className='pb-2'>
                            <span className='text-success pe-2'>&rarr; </span><a href="#" className=" text-white">About Us</a>
                        </div>

                        <div className='pb-2'>
                            <span className='text-success pe-2'>&rarr; </span><a href="#" className=" text-white">Our Services</a>
                        </div>

                        <div className='pb-2'>
                            <span className='text-success pe-2'>&rarr; </span><a href="#" className=" text-white">Home</a>
                        </div>
                        <div className='pb-2'>
                            <span className='text-success pe-2'>&rarr; </span><a href="#" className=" text-white">Contact Us</a>
                        </div>
                        <div className='pb-2'>
                            <span className='text-success pe-2'>&rarr; </span><a href="#" className=" text-white">Team Members</a>
                        </div>
                    </div>


                    <div className="col col-md-4 col-lg-3">

                        <h5 className='text-uppercase text-success pb-2 fw-bold'>news letters</h5>

                        <div>

                            <div className="input-group ">
                                
                            <input type="email" className='form-control' placeholder='ABC@email.com'/>
                            <button className='btn btn-lg btn-success'>Sign Up</button>

                            </div>

                            <div>
                                <h6 className="text-success mt-5 h5 text-center mb-3">Follow Us</h6>
                                <div className='follow-us'>
                                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                    <a href="#"><i className='fa-brands fa-twitter'></i></a>
                                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='text-white lead mt-4 text-center'>
                    <a href="#" className='px-2 text-success text-decoration-none'>Terms & Conditions</a>
                     | 
                     <a href="#" className='px-2 text-success text-decoration-none'>Privacy Policy</a> 
                     | 
                     <a href="#" className='px-2 text-success text-decoration-none'>Customer Support</a>
                     | 
                     <a href="#" className='px-2 text-success text-decoration-none'>Payments</a> 
                     | 
                     <a href="#" className='px-2 text-success text-decoration-none'>Help</a>
                      | 
                      <a href="#" className='px-2 text-success text-decoration-none'>FAQs</a>
                </div>
            </div>
        </div>
    )
}

export default FooterNavbar;