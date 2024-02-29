import React from 'react'
// Skills description, images, autoplay, swiper

const Contact = () => {

    return (
        <>

        <form action="" className="font-bold text-green-400 absolute top-5 right-10 text-center">
            Ingresa tus datos
            <div className="mb-2">
                <input 
                    type="text" 
                    placeholder='Your name' 
                    name='name' 
                    className='w-200 placeholder-green-200 rounded-lg text-center'
                    required
                />
            </div>
            <div className="mb-2">
                <input 
                    type="text" 
                    placeholder='Your email' 
                    name='email' 
                    className='w-200 placeholder-green-200 rounded-lg text-center'
                    required
                />
            </div>
            <div className="mb-2">
                <input 
                    type="text" 
                    placeholder='Your message' 
                    name='message' 
                    className='w-200 placeholder-green-200 rounded-lg text-center'
                    required
                />
            </div>

            <button className='font-bold bg-blue-200 w-full p-2 rounded-lg'>
                    Send message
            </button>

        </form>
        {/* <div>Contact me soon...</div> */}
        </>  
    )

}

export default Contact