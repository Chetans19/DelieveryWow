import * as actionTypes from '../actiontypes'

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCT: {

            return [...action.payload]
        }
        default: {
            return state
        }
    }
}