import { SET_PRODUCT } from '../actiontypes'
import { data } from '../../components/AllDish/MockData'


export default (history, page_number) => async (dispatch) => {
    try {

        let product_count = data.length;

        if (Math.ceil(product_count / 12) < page_number) {
            history.push('./dishes')
            return false
        }
        if (page_number <= 0) {
            history.push('./dishes')
            return false

        }

        let product_values = page_number * 12;

        let product_data = []

        for (let i = product_values - 12; i < product_values && i < data.length; i++) {
            product_data.push(data[i])
        }

        dispatch({
            type: SET_PRODUCT,
            payload: {
                totalproducts: product_count,
                product: product_data
            }
        })

    }
    catch (e) { }
}