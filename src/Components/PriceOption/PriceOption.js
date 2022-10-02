import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
    return (
        <div className='bg-indigo-500 m-3 rounded-md p-3'>
            <div>
                <h3><span className='text-5xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-200'>/mon</span></h3>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            {
                option.features.map((feature, idx) => <Feature feature={feature} key={idx}></Feature>)
            }
            <button className='bg-green-500 w-full rounded py-2 text-white'>Buy Now</button>
        </div>
    );
};

export default PriceOption; 