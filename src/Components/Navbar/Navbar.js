import React from 'react';

const Navbar = ({ route }) => {
    // console.log(route)
    return (
        <li className='mx-10'><a href={route.path}>{route.name}</a></li>
    );
};

export default Navbar;