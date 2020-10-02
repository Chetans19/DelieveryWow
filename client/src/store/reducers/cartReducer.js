import * as actionTypes from '../actiontypes'

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SET_ITEMS_TO_CART: {
            console.log({ ...state, ...action.payload })
            return action.payload
        }
        default:
            return state
    }
}