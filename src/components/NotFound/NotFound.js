import React from 'react'

const NotFound = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl'>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div>
                    <p className='mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase'>
                        Error 404
                    </p>
                    <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
                        Oops! The page you're looking for isn't here.
                    </h1>
                    <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
                        You might have the wrong address, or the page may have moved.
                    </p>
                    <button className='w-full mb-2 py-2 px-3 rounded-md  mt-3 bg-orange-200 hover:bg-orange-400 sm:w-auto sm:mb-0'>
                        Back to homepage
                    </button>
                    <button className='w-full mb-2 py-2 px-3 mt-3 mx-2 bg-orange-200 rounded-md hover:bg-orange-400 sm:w-auto sm:mb-0'>
                        Contact us
                    </button>
                </div>
                <div>
                    <div className='w-full h-full rounded-lg'>
                        <img
                            src='https://img.lovepik.com/free-png/20210918/lovepik-404-page-error-png-image_400217866_wh1200.png'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound
