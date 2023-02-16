import React from 'react';
import todo from '../../assets/portfolio/todo.png';
import musica from '../../assets/portfolio/musica.png';
import ecommerce from '../../assets/portfolio/ecommerce.png';
import tictactoe from '../../assets/portfolio/tictactoe.jpg';
import roboFriends from '../../assets/portfolio/roboFriends.png';
// import cinema from '../../assets/portfolio/cinema.jpg';
import AmazonClone from '../../assets/portfolio/AmazonClone.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            title: 'React-Todo',
            source: todo,
            link: "https://dof-todo.netlify.app/",
            code: "https://github.com/demiladebdm/React-todo/tree/main"
        },
        {
            id: 2,
            title: 'Music-Player App',
            source: musica,
            link: "#",
            code: "#"
        },
        {
            id: 3,
            title: 'E-commerce WebApp',
            source: ecommerce,
            link: "#",
            code: "#"
        },
        {
            id: 4,
            title: 'Tic-Tac-Toe',
            source: tictactoe,
            link: "https://dof-tic-tac-toe.netlify.app/",
            code: "https://github.com/demiladebdm/Tic-Tac-Toe/tree/master"
        },
        {
            id: 5,
            title: 'Robo Firends',
            source: roboFriends,
            link: "https://daddydof-robofriends-app.netlify.app",
            code: "https://github.com/demiladebdm/robofriends/tree/main"
        },
        {
            id: 6,
            title: 'Amazon-Clone',
            source: AmazonClone,
            link: "https://clone-5ed93.web.app/",
            code: "#"
        }
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 h-full w-full text-white md:h-full py-8'>
        
        <div className='max-w-screen-lg px-4 py-8 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pt-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>


            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2 px-12 sm:px-0 h-full'>
                {
                    portfolios.map(({ id, title, source, link, code }) => (
                        
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <h1>{title}</h1>
                            <img src={source} alt="" className='rounded-md duration-200 hover:scale-105 py-2' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-1 my-4 duration-200 hover:scale-105'><a href={link} target="_blank" rel="noreferrer">Demo</a></button>
                                <button className='w-1/2 px-6 py-1 my-4 duration-200 hover:scale-105'><a href={code} target="_blank" rel="noreferrer">Code</a></button>
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
