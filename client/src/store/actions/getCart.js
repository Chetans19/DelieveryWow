import { SET_ITEMS_TO_CART } from '../actiontypes'

export default () => async (dispatch) => {

    try {
        let cart = await JSON.parse(localStorage.getItem("cart_product"))
        dispatch({
            type: SET_ITEMS_TO_CART,
            payload: cart
        })
    }
    catch (e) {

    }
}