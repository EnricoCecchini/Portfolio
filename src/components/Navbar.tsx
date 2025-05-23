import { v4 as uuidv4 } from "uuid";


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
            <div className='navbar w-full p-4 mb-8 bg-gradient-to-r from-stone-900 via-stone-700 to-stone-900'>
                <div className='flex flex-row w-full justify-center flex-wrap gap-x-4'>
                    {
                        sections.map((item) => {
                            return (
                                <a
                                    key={uuidv4()}
                                    className='text-xl hover:underline hover:text-gray-200 hover:animate-bounce'
                                    href={`${item.link}`}
                                >
                                    {item.name}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar