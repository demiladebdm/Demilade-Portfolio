import React from 'react';
// import HeroImage from '../../assets/heroImage.jpeg';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

import "./Home.css";

const Home = () => {
  return (
    <div name="home" className='home'>

        <div className='homeContainer'>
            <div className='contain'>
                <h2>
                    <span>Demilade Folarin</span> - Front End Developer
                </h2>
                <p>
                    I have diverse set of skills and a proven track record of building seamless digital experiences. Proficient in all layers of development, ready to craft amazing websites and apps.
                </p>

                <div className='linkContain'>
                    <Link to="portfolio" smooth duration={500} className='links'
                    >
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </Link>
                </div>

            </div>

            {/* <div>
                <img src={HeroImage} alt="My profile" className='rounded-2xl mx-auto w-2/3 md:w-full pb-40' />
            </div> */}

        </div>
    </div>
  )
}

export default Home
