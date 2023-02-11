import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-gradient-to-b from-black to-gray-800 px-4 text-white py-10' >

        <div className='flex flex-col px-4 py-8 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pt-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/ff64c9d1-b01b-4dbe-8d2a-a66ba59aaf60" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" 
                        name='name' 
                        placeholder='Enter your name' 
                        className='p-2 bg-transparent border-2 rounded-md focus:outline-none' 
                        required
                    />
                    <input type="text" 
                        name='email' 
                        placeholder='Enter your email address'  
                        className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                        required 
                    />
                    <textarea name='message' rows="10"
                        placeholder='Enter your message' 
                        className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
                        required
                    >
                    </textarea>

                    <button className='text-whte bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>

                </form>
            </div>
        </div>

    </div>
  );
};

export default Contact
