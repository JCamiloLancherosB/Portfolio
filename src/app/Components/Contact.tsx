import React from 'react'
// Skills description, images, autoplay, swiper
interface ContactProps {
    phrase: string;
}

const Contact: React.FC<ContactProps> = ({phrase}) => {
    
    return (
        <>

        <form action="" className="font-bold text-green-400 absolute top-5 right-10 text-center">
            <span>¿Que te ha parecido mi portafolio? {phrase}</span>
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