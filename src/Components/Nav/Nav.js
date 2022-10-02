import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/Home' },
        { id: 2, name: 'Products', path: '/Products' },
        { id: 3, name: 'Order', path: '/Order' },
        { id: 4, name: 'Contact', path: '/Contact' },
        { id: 5, name: 'About us', path: '/About us' },
    ]
    return (
        <nav className='bg-black w-full'>
            <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden'>
                {
                    open ? <XMarkIcon></XMarkIcon> : <Bars3Icon ></Bars3Icon>

                }
            </div>
            <ul className={`bg-black md:flex justify-center absolute duration-500 ease-in md:static w-full ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Navbar
                        key={route.id}
                        route={route}
                    ></Navbar>)
                }
            </ul>
        </nav>
    );
};

export default Nav;