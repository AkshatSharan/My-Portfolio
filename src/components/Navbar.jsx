import Menu from '../assets/Menu.svg'
import Close from '../assets/Close.svg'
import { useState } from 'react'

const Navitems = ({ handleMenuClick }) => {
    return (
        <ul className='flex gap-7 items-center max-md:flex-col'>
            <li className='nav-item' onClick={handleMenuClick}><a href='#skills'>Skills</a></li>
            <li className='nav-item' onClick={handleMenuClick}><a href='#experience'>Experience</a></li>
            <li className='nav-item' onClick={handleMenuClick}><a href='#projects'>Projects</a></li>
            <li className='nav-item' onClick={handleMenuClick}><a href='#contact'>Contact</a></li>
            <li className='nav-item' onClick={handleMenuClick}><a href="/Akshat_Sharan_Resume.pdf" download="Akshat_Sharan_Resume.pdf"><button className='site-button'>Resume</button></a></li>
        </ul>
    )
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='fixed z-11 top-0 sm:py-6 sm:px-10 py-3 px-7 flex w-full justify-between items-center backdrop-blur-xl'>
            <h1 className='font-main text-5xl text-white'><a className='font-main' href='#main'>A.</a></h1>

            <nav className='max-md:hidden'>
                <Navitems handleMenuClick={handleMenuClick} />
            </nav>

            <div className='md:hidden h-fit'>
                {isMenuOpen ?
                    <img src={Close} className='h-9' onClick={handleMenuClick} />
                    :
                    <img src={Menu} className='h-9' onClick={handleMenuClick} />
                }

                {isMenuOpen &&
                    <nav className='absolute flex right-0 top-[96px] h-[calc(100vh-96px)] items-center bg-gray-100 w-1/2 justify-center'>
                        <Navitems handleMenuClick={handleMenuClick} />
                    </nav>
                }
            </div>
        </div>
    )
}

export default Navbar