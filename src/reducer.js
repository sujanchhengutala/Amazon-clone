export const initialState = {
    basket: [],
}
export const getBasketTotal = (basket) => basket?.reduce((amount, item)=> item.price + amount , 0)


const reducer = (state, action) => {
    if (action.type = 'ADD_TO_BASKET'){
        const newBasket = [...state.basket, action.item]
    return {
        ...state,
        basket : newBasket,
       }
}
else{

}
}
export default reducer
