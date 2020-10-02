import React, { Component } from 'react';

import AllDishCard from '../Card/AllDishCard';
import { data } from '../AllDish/MockData';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class AllDishComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cart_count: 0,
            isAuthenticated: false,
            cart_product_list: []
        }
    }

    componentDidMount() {

        if (this.state.isAuthenticated) {
            //get by api
        }
        else {
            let cart = JSON.parse(localStorage.getItem("cart_product")) || null;
            if (cart !== null && cart.length !== 0) {
                this.setState({ cart_count: cart.length });
                this.setState({ cart_product_list: [...this.state.cart_product_list, ...cart] });
            }

        }
    }

    addToCart = (id) => {
        if (!this.state.cart_product_list.includes(id)) {
            this.setState({ cart_count: this.state.cart_count + 1 });
            let new_list = [...this.state.cart_product_list, id];
            this.setState({ cart_product_list: new_list });
            localStorage.setItem("cart_product", JSON.stringify([...this.state.cart_product_list, id]));
        }
    }

    removeFromCart = (id) => {
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

    render() {
        return (
            <>
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
                    <Link to='/cart' >
                        <div className="cart_headnav">
                            {this.state.cart_count ?
                                <div className="cart_count">
                                    {this.state.cart_count}
                                </div> : ""
                            }
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="rgba(255,255,255,1)" /></svg>
                        </div>
                    </Link>

                    {0 ?
                        <div className="user_icon">
                            Praveen...
                        </div> :
                        <div className="user_icon">
                            Login
                        </div>
                    }
                </header>

                <div>
                    <AllDishCard sources={data} cart_item={this.state.cart_product_list} addToCart={this.addToCart} removeFromCart={this.removeFromCart} />
                </div>
            </>

        );
    }

}

export default withRouter(AllDishComponent);