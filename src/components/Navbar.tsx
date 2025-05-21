import React from 'react'

function Navbar() {
    const sections = [
        {name: "About", link: "#about"},
        {name: "Skills", link: "#skills"},
        {name: "Experience", link: "#experience"},
        {name: "Education", link: "#education"},
        {name: "Projects", link: "#projects"},
        {name: "Contact", link: "#contact"},
    ]

    return (
        <>
            <div className='navbar w-full border-1 p-4'>
                <div className='flex flex-row w-full justify-center flex-wrap gap-x-4'>
                    {
                        sections.map((item) => {
                            return (
                                <>
                                    <div
                                        className='text-xl hover:underline hover:text-gray-200 hover:animate-bounce'
                                    >
                                        <a href={`${item.link}`}>{item.name}</a>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar