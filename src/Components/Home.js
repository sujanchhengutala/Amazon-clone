import React from 'react'
import '../Home.css'
import Product from './Product'


function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg' alt='ww' />
                <div className='home__row'>
                    <Product 
                    id='12321341'
                    title='The Lean Startup. How Constant Innovation Creates Radically Successful Business Paperback' 
                    price={19.99}
                    image='https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY218_.jpg' ratings={4} />

                    <Product 
                    id='49538094' 
                    title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass bowl' 
                    price={100.99}
                    image='https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_SX679_.jpg' ratings={5} />
                </div>

                <div className='home__row'>
                    <Product 
                    id='4903850' 
                    title='Samsung curve monitor with 32 inch disolay' 
                    price={1000.99}
                    image='https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY218_.jpg' ratings={4} />

                    <Product 
                    id='23445930' 
                    title='Apple ipad with stunning looks with stands' 
                    price={49.99}
                    image='https://m.media-amazon.com/images/I/51EVETDOOeL._AC_UY218_.jpg' ratings={5} />

                    <Product 
                    id='3254354345' 
                    title='Apple M1  11-inch Liquid Retina display ' 
                    price={100.99}
                    image='https://m.media-amazon.com/images/I/81Y5WuARqpS._AC_UY218_.jpg' ratings={3} />
                </div>\

                <div className='home__row'>
                    <Product 
                    id='00829332' 
                    title='1800R curvature of the screen provides a truly immersive viewing experience A stylish design featuring a Black body metallic finish and sleek curves' 
                    price={999.99}
                    image='https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg' ratings={5} />

                    {/* <Product 
                    id='3254354345' 
                    title=' Roll over image to zoom in Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)' 
                    price={100.99}
                    image='https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg' ratings={3} /> */}
                </div>
            </div>
        </div>
    )
}

export default Home
