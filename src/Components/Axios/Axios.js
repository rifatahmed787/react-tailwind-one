import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Axios = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>console.log(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            // .then(data => setPhones(data.data.data))
            .then(data => {
                const phoneLoaded = data.data.data;
                const phoneData = phoneLoaded.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]); //এখানে স্লাগ কে ’-’ দ্বারা দুই ভাগে ভাগ করছে , প্রথম ভাগ হলো ০ এবং দ্বিতীয় ভাগ হলো ১;
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlePhone;
                })
                // console.log(phoneData)
                setPhones(phoneData) //after processing data
            })
    }, [])

    return (
        <div className='mb-5 ml-10'>
            <h1 className='text-3xl font-bold'>Phone chart</h1>
            <BarChart width={500} height={300} data={phones}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Axios;