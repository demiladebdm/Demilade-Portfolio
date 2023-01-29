import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white py-40'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Expert React Developer with a passion for creating dynamic and responsive user interfaces. Proficient in React, Redux, and its ecosystem, as well as modern web development technologies such as React Hooks, Context API, and Next.js. Experienced in building high-performance web applications and able to deliver high-quality code with clear and maintainable structure.
            </p>

            <br />

            <p className='text-xl'>
                Having expertise in using Microsoft's .NET framework to develop software applications using C#. Experienced in web and desktop application development, and knowledge of technologies like ASP.NET and databases. I develop and maintain efficient and scalable software applications.
            </p>
        </div>
    </div>
  );
};

export default About
