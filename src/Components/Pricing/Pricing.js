import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Awesome Feature',
                'Extra Freature',
                'Unnecessary Feature',
                'Good Feature',
                'Extra Feature'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                'Everything on Medium',
                'Extra Freature',
                'Unnecessary Feature',
                'Good Feature',
                'Extra Feature'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'Everything on premium',
                'Extra Freature',
                'Unnecessary Feature',
                'Good Feature',
                'Extra Feature'
            ]
        },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-500 my-5'>Best Deal of the Town</h2>
            <div className='grid md:grid-cols-3 gap-3 '>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;