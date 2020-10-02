import getCart from './getCart'

export default (id) => async dispatch => {
    try {
        let cart = await JSON.parse(localStorage.getItem("cart_product"))
        if (cart.includes(id)) {
            let index = cart.indexOf(id)
            cart = [...cart.slice(0, index), ...cart.slice(index + 1)]
            await localStorage.setItem("cart_product", JSON.stringify(cart))
        }
        dispatch(getCart())
    }
    catch (e) {

    }
}