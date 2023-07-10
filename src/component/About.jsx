import React, { useState } from 'react'
import img from '../imgs/cat-ball.jpg'
const About = () => {
    const mission = 'our mission is to Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quis, vero cum labore voluptatum magni tenetur porro eos veritatis illo, sint mollitia suscipit qui nam. Delectus tempora, obcaecati beatae necessitatibus animi laboriosam quisquam dolores dolor non ipsum ratione expedita amet!';

    const vission = 'our vission is to Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quis, vero cum labore voluptatum magni tenetur porro eos veritatis illo, sint mollitia suscipit qui nam. Delectus tempora, obcaecati beatae necessitatibus animi laboriosam quisquam dolores dolor non ipsum ratione expedita amet!'

    const activeBtn = 'btn  btn-success w-100 text-uppercase'
    const unActiveBtn = 'btn border-0 btn-light w-100 text-uppercase'


    const [aboutText, setAboutText] = useState(mission);
    const [Mstyle , setMStyles] = useState(activeBtn);
    const [Vstyle , setVstyle] = useState(unActiveBtn);

    const clickHandler = (msg) => {
        msg === 'mission' ? setAboutText(mission) : setAboutText(vission);

        if(msg === 'mission'){
            setMStyles(activeBtn);
            setVstyle(unActiveBtn);
        }
        else{
            setMStyles(unActiveBtn);
            setVstyle(activeBtn);
        }
    }

    return (
        <div id="about" className=' mt-3 mt-lg-5 mt-md-4'>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6">
                        <img src={img} className='w-100' alt="" />
                    </div>

                    <div className="col-lg-6">

                        <div className="heading">
                            <div className="h4 text-success text-uppercase text-center text-lg-start position-relative">About</div>
                            <h2 className='text-uppercase text-center text-lg-start pt-5 mb-md-4 '>
                                we are extreamly hard working to keep your pets helthy
                            </h2>
                        </div>
                        <div>
                            <div className="row no-gutter">

                                <div className="col-6" >
                                    <button className={Mstyle} onClick={() => clickHandler('mission')}>Our mission</button>
                                </div>

                                <div className="col-6">
                                    <button className={Vstyle} onClick={clickHandler}>our vission</button>
                                </div>

                            </div>

                            <div className=" p-3 mt-3 lead bg-secondary-subtle">
                                <p>{aboutText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;