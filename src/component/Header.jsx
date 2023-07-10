import React from 'react'

const Header = () => {
    return (
        <div id="header" className='border border-right-none mt-2 d-none d-md-block'>
            <div className="container">

                <div className="row py-1 text-success">

                    <div className="col-4 d-flex border-end my-auto">
                        <span className='px-2 m-auto fs-4'>
                            <i className="fa-solid fa-envelope fa-bounce"></i>
                        </span>
                        <div className='' >
                            <h5> Email </h5>
                            <p> <a href="#" className='text-decoration-none text-success text-break'>muhammad.abbas.edu.now@gmil.com</a></p>
                        </div>
                    </div>

                    <div className="col-4 d-flex border-end my-auto">

                        <span className='px-5 my-auto fs-4' >
                            <i className="fa-solid fa-location-dot fa-beat"></i>
                        </span>
                        <div>
                            <div className=''>
                                <h5> OFFICE </h5>
                                <p>149 Street , peshawar ,KPK</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 d-flex my-auto">

                        <span className='my-auto px-5 fs-4'>
                            <i className="fa-solid fa-phone fa-shake"></i>
                        </span>
                        <div>
                            <h5> PHONE </h5>
                            <p>03179734653</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header;