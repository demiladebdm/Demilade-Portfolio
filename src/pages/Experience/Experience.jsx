import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import reactImage from '../../assets/react.png';
import nextjs from '../../assets/nextjs.png';
import csharp from '../../assets/csharp.png';
import dotnet from '../../assets/dotnet.png';
import github from '../../assets/github.png';
import tailwind from '../../assets/tailwind.png';
import bootstrap from '../../assets/bootstrap.png';
import firebase from '../../assets/firebase.png';

const Experience = () => {

    const techs = [
        {
            id: 1,
            source: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            source: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            source: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            source: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            source: nextjs,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 6,
            source: csharp,
            title: 'C#',
            style: 'shadow-purple-400'
        },
        {
            id: 7,
            source: dotnet,
            title: 'ASP.NET',
            style: 'shadow-blue-400'
        },
        {
            id: 8,
            source: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 9,
            source: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 10,
            source: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-400'
        },
        {
            id: 11,
            source: firebase,
            title: 'Firebase',
            style: 'shadow-yellow-400'
        },
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-full py-8'>
        <div className='max-w-screen-lg mx-auto px-4 py-8 flex flex-col justify-center w-full h-full text-white'>
            <div className='pt-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center pt-2 pb-8 px-12 sm:px-0 h-screen'>
                {techs.map(({ id, source, title, style }) => (

                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={source} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>

                ))}
            </div>
        </div>
    </div>
  );
};

export default Experience
