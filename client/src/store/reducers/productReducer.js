import * as actionTypes from '../actiontypes'

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCT: {
            return action.payload
        }
        default: {
            console.log(Array.isArray(action.payload))
            return state
        }
    }
}