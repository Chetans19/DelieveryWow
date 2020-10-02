import { SET_PRODUCT } from '../actiontypes'
import { data } from '../../components/AllDish/MockData'


export default (page_number) => async (dispatch) => {
    try {

        let product_values = page_number * 12;

        let product_data = []

        for (let i = product_values - 12; i < product_values && i < data.length; i++) {
            product_data.push(data[i])
        }

        console.log("As")
        dispatch({
            type: SET_PRODUCT,
            payload: product_data
        })
    }
    catch (e) { }
}