import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b py-8 from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pt-20'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <div className='text-xl py-10'>
                <p className='mt-10'>
                    Expert React Developer with a passion for creating dynamic and responsive user interfaces. Proficient in React, Redux, and its ecosystem, as well as modern web development technologies such as React Hooks, Context API, and Next.js. Experienced in building high-performance web applications and able to deliver high-quality code with clear and maintainable structure.
                </p>

                <br />

                <p>
                    Having expertise in using Microsoft's .NET framework to develop software applications using C#. Experienced in web and desktop application development, and knowledge of technologies like ASP.NET and databases. I develop and maintain efficient and scalable software applications.
                </p>
            </div>
        </div>
    </div>
  );
};

export default About
