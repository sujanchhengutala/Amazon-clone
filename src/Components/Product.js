import React from 'react'
import '../Product.css'
import { useStateValue } from './StateProvider'


function Product({ id, title, image, price, ratings }) {
    const [{ basket }, dispatch] = useStateValue()   //==>>>here basket is taken out by destructuring  state
    const addToBasket = (e) => {
       
        dispatch(
            {
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    ratings: ratings
                }
            }
        )
    }

    return (

        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(ratings).fill().map((_, i) => <p>⭐️</p>)}


                </div>
            </div>
            <img src={image} alt='' />
            <button onClick={ addToBasket }>Add to Basket</button>
        </div>
    )
}

export default Product
