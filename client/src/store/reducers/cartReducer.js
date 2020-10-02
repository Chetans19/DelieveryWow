import * as actionTypes from '../actiontypes'

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.SET_ITEMS_TO_CART: {
            return action.payload
        }
        default: {

            return state
        }
    }
}