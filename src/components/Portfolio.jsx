import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import musica from '../assets/portfolio/musica.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import tictactoe from '../assets/portfolio/tictactoe.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import cinema from '../assets/portfolio/cinema.jpg';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            source: arrayDestruct
        },
        {
            id: 2,
            source: musica
        },
        {
            id: 3,
            source: navbar
        },
        {
            id: 4,
            source: tictactoe
        },
        {
            id: 5,
            source: reactSmooth
        },
        {
            id: 6,
            source: cinema
        }
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen py-40'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({ id, source }) => (
                        
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={source} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>

    </div>
  );
};

export default Portfolio
