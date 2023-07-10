import React , {useState , useEffect} from "react";
import OwlCarousel from 'react-owl-carousel';

import { profissionals } from "./Array";


const Members = () => {

    const [members , setMembers] = useState(profissionals);
    const [winSize , setWinSize]  = useState(window.innerWidth);

    useEffect(()=>{
        const sizeHandler = ()=>{
            setWinSize(window.innerWidth);
        }

        window.addEventListener('resize',sizeHandler);

        return ()=>{
            window.removeEventListener('resize',sizeHandler)
        }
    },[])

    return (
        <div id="members" className="my-4">
            <div className="container">
                <div className="heading mb-5 border-start border-5 border-success ps-4">
                    <h5 className="text-uppercase text-success">team members </h5>
                    <h1 className='text-uppercase'>pet care profissionals</h1>
                </div>

                <OwlCarousel

                    className="owl-carousel"
                    items={winSize<=450?"1":winSize>=451 && winSize<=600?"2" : winSize>=601 && winSize<=900? "3":'4'}
                    margin={20}
                    loop={true}
                    nav
                    autoPlay={true}
                >

                    {
                        profissionals.map((item , index) => {
                            const { img, name, desig } = item;
                            return (

                                <div className="item" key={index} >

                                    <img src={img} alt="" />
                                    <h5 className="text-success text-uppercase text-center pt-2">{name}</h5>
                                    <h6 className="text-success text-uppercase text-center">{desig}</h6>
                                    <div className="team-overlay">
                                        <a href="#">f</a>
                                        <a href="#">t</a>
                                        <a href="#">G</a>
                                    </div>
                                </div>

                            )
                        })
                    }
                </OwlCarousel>

            </div>
        </div>
    )
}

export default Members;