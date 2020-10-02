import * as actionTypes from '../actiontypes'

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCT: {
            return ({ ...state, ...action.payload })
        }
        default:
            return state
    }
}