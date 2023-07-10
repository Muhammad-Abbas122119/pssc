import React from 'react'


const Navbar = () => {
    return (
        <div id='my-navbar'>
            <div className="row w-100">
                <div className="col">

                    <nav className="navbar navbar-expand-lg">

                        <div className="navbar-brand text-success px-5">
                            <span><i className="fa-solid fa-hippo h3" ></i></span>
                            <span className='text-uppercase h2'>pssc</span>
                        </div>

                        <button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target='#my-navbar-menu'>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id='my-navbar-menu' >
                            <ul className="navbar-nav align-items-lg-center px-5 px-lg-0">

                                <li className="nav-item h5">
                                    <a href="#home" className="nav-link">HOME</a>
                                </li>

                                <li className="nav-item h5">
                                    <a href="#services" className="nav-link">SERVICES</a>
                                </li>

                                <li className="nav-item h5">
                                    <a href="#about" className="nav-link">ABOUT</a>
                                </li>

                                <li className="nav-item h5">
                                    <a href="#product" className="nav-link">PRODUCT</a>
                                </li>

                                <li className="nav-item h5 dropdown">

                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle='dropdown'>PAGES</a>

                                    <div className="dropdown-menu">

                                        <a href="#members" className="dropdown-item">Team</a>
                                        <a href="#testimonial" className="dropdown-item">Testimonial</a>
                                        <a href="#" className='dropdown-item'>Blog</a>

                                    </div>

                                </li>

                                <li className="nav-item h5 btn-nav-contact bg-success d-none d-lg-block">

                                    <a href="#footer-navbar" className="nav-link text-white">CONTACT <span><i className="fa-solid fa-arrow-right"></i></span></a>

                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
         </div>
    )
}

export default Navbar;