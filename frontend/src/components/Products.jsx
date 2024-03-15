import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Sample from '../images/GIFPRODUCTS/SampleVideo.gif';
import gif1 from '../images/GIFPRODUCTS/FLAVABLACKOXBAR1.gif';
import gif2 from '../images/GIFPRODUCTS/FlavaBlackOxbar.gif';
import gif3 from '../images/GIFPRODUCTS/FlavaBlackOxbar.gif';
import gif4 from '../images/GIFPRODUCTS/FlavaBlackOxbar.gif';


// Array of products with brand, description, and GIF
const products = [
    { brand: 'Flava ', description: 'Description 1', gif: Sample },
    { brand: 'Flava Black Oxbar', description: 'Description 2', gif: gif1 },
    { brand: 'Flava Black Oxbar', description: 'Description 3', gif: gif2 },
    { brand: 'Flava Friobar V1 9500', description: 'Description 3', gif: gif3 },
    { brand: 'Flava Friobar V2', description: 'Description 3', gif: gif4 },
  
  
];

function Products() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className='w-full pt-36 px-4' id='products'>
            <div className='max-w-8xl mx-auto container text-white px-4 lg:px-8'>
                <h1 className='text-4xl font-bold text-center'>Products</h1>
                <Slider {...settings} className='mt-14'>
                    {products.map((product, index) => (
                        <div className='rounded-lg p-6 product-box' key={index}>
                            <img
                                src={product.gif}
                                className='rounded w-full h-auto aspect-square'
                                alt={product.brand}
                            />
                            <p className='text-center mt-9'>{product.brand}</p>
                            <p className='opacity-60 text-sm text-center mt-4'>{product.description}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Products;
