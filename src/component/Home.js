import React, { useContext, useState } from 'react';
import faker from '@faker-js/faker'
import SingleProduct from './SingleProduct';

faker.seed(100)

export const Home = () => {
//Random Data

    const productDetails = [...Array(5)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image()
    }))

    const [products] = useState(productDetails);


    return (
        <>
            {/* map out single items */}
            <div className='image__container'>
                {products.map((products) => <SingleProduct prod={products} key={products.id} />)}
            </div>
        </>
    )
};
