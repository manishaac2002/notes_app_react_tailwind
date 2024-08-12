import React from 'react'

const header = () => {
    return (
        <section className=" rounded-2xl m-2 p-5  mb-10 bg-gray-100">

            <div className="container mx-auto ">

                <div className=" flex ">

                    <a className="text-3xl font-semibold pr-5  mr-5" href="index.html">Notes App</a>

                    <div className="flex ml-auto">

                        <button className=" flex ml-auto text-medium font-bold bg-white shadow-md px-3 py-2 rounded hover:bg-black hover:text-white">
                            <span className=" pr-1 hidden lg:block">Write</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </button>

                        <button className=" flex ml-8 text-medium font-bold bg-white shadow-md px-3 py-2 rounded hover:bg-black hover:text-white">
                            <span className=" pr-1 hidden lg:block">Read</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default header