import React, { Component } from 'react'
import { data } from '../AllDish/MockData';

class CartPage extends Component {

    constructor() {
        super()
        this.state = {
            cart_count: 0,
            cart_product: [],
            cart_product_count: {}
        }
    }

    componentDidMount() {
        let cart = JSON.parse(localStorage.getItem("cart_product")) || null
        if (cart !== null && cart.length !== 0) {
            this.setState({ cart_count: cart.length })
            this.setState({ cart_product: [...this.state.cart_product, ...cart] })
        }

    }
    render() {
        const dishes_template = () => {
            const dishes = data.filter((dish) => this.state.cart_product.indexOf(dish.id) > -1)
            return dishes.map((dish) => {
                return (
                    <div className="cart_card" key={dish.id}>
                        <div className="cart_img">
                            <img src={dish.imageLink} alt={dish.name} />
                        </div>
                        <div>
                            <div className="heading">{dish.name}</div>
                            <div className="subtext">{dish.restaurant}</div>
                            <div className="card_price">
                                ₹{dish.price}

                            </div>
                            <button className="card_button_remove">
                                Remove
                            </button>
                        </div>
                    </div>
                )
            })
        }

        return (
            <React.Fragment>
                <header>
                    <div className="menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255,255,255,1)" /></svg>
                    </div>
                    <div className="logo">
                        DelieveryWow
                    </div>
                    <div className="searchbar">
                        <form>
                            <input type="text" className="header_input" placeholder="Search for Dishes" />
                        </form>
                    </div>


                    {0 ?
                        <div className="user_icon">
                            Praveen...
                        </div> :
                        <div className="user_icon">
                            Login
                        </div>
                    }
                </header>

                <div className="cart">
                    <div className="cart_heading">
                        My Cart ({this.state.cart_count})
                    </div>
                    {this.state.cart_count ?
                        <>
                            <div className="product_list">
                                {dishes_template()}
                            </div>

                            <div className="price_list">

                            </div>
                        </> :
                        <div>
                            Cart is Empty
                        </div>}

                </div>
            </React.Fragment >
        );
    }
}

export default CartPage