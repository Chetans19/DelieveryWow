import React, { Component } from 'react'
import { data } from '../AllDish/MockData';

class CartPage extends Component {

    constructor() {
        super()
        this.state = {
            cart_count: 0,
            cart_product_list: [],

        }

        this.removeFromCart = this.removeFromCart.bind(this)
        this.onMouseHover = this.onMouseHover.bind(this)
        this.onMouseOut = this.onMouseOut.bind(this)
    }

    componentDidMount() {
        let cart = JSON.parse(localStorage.getItem("cart_product")) || null
        if (cart !== null && cart.length !== 0) {
            this.setState({ cart_count: cart.length })
            this.setState({ cart_product_list: [...this.state.cart_product_list, ...cart] })
        }

    }

    removeFromCart = (event) => {

        let id = Number(event.target.id);
        if (this.state.cart_count > 0 && this.state.cart_product_list.length > 0) {
            let index = this.state.cart_product_list.indexOf(id);
            if (index > -1) {
                this.setState({ cart_count: this.state.cart_count - 1 });
                let index = this.state.cart_product_list.indexOf(id);
                let new_list = [...this.state.cart_product_list.slice(0, index), ...this.state.cart_product_list.slice(index + 1)];
                this.setState({ cart_product_list: new_list });
                localStorage.setItem("cart_product", JSON.stringify(new_list));
            }
        }
    }


    onMouseHover = (event) => {
        event.target.style.color = "#2874F0"
    }

    onMouseOut = (event) => {
        event.target.style.color = "#303030"
    }

    render() {
        var cart_amount = 0;
        const dishes_template = () => {
            const dishes = data.filter((dish) => this.state.cart_product_list.indexOf(dish.id) > -1)
            return dishes.map((dish) => {
                cart_amount = cart_amount + dish.price
                return (
                    <div className="cart_card" key={dish.id}>
                        <div className="cart_img">
                            <img src={dish.imageLink} alt={dish.name} />
                        </div>
                        <div className="cart_product_description">
                            <div className="heading">{dish.name}</div>
                            <div className="subtext">{dish.restaurant}</div>
                            <div className="card_price">
                                ₹{dish.price}

                            </div>
                            <div id={dish.id} style={{ cursor: "pointer" }} onClick={this.removeFromCart} onMouseOver={this.onMouseHover} onMouseOut={this.onMouseOut}>
                                Remove from cart
                            </div>
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
                                <div className="heading">
                                    ₹{cart_amount}
                                </div>
                                <button className="card_button_remove">
                                    Place Order
                            </button>
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