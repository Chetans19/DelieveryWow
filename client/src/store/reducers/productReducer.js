import * as actionTypes from '../actiontypes'

const initalstate = {
    totalproducts: 0,
    product: []
}

export default (state = initalstate, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCT: {
            return { ...action.payload }
        }
        default: {
            return state
        }
    }
}