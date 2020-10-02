import getCart from './getCart'

export default (id) => async dispatch => {
    try {
        let cart = await JSON.parse(localStorage.getItem("cart_product"))
        if (!cart.includes(id)) {
            cart = [...cart, id]
            await localStorage.setItem("cart_product", JSON.stringify(cart))
        }
        dispatch(getCart())
    }
    catch (e) {

    }
}