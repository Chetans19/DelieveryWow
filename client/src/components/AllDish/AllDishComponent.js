import React, { Component } from 'react';
import { connect } from 'react-redux';

import getCart from '../../store/actions/getCart'
import addToCart from '../../store/actions/addToCart'
import removeFromCart from '../../store/actions/removeFromCart'

import getProduct from '../../store/actions/getProduct'

import AllDishCard from '../Card/AllDishCard'
import Pagination from '../Pagination/Pagination'

import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class AllDishComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            isAuthenticated: false,

        }
    }

    componentDidMount() {

        if (this.state.isAuthenticated) {
            //get by api
        }
        else {
            let query = new URLSearchParams(this.props.location.search)
            let pagenumber = query.get("page") || 1;

            this.setState({ currentPage: pagenumber })
            this.props.getProduct(this.props.history, pagenumber)
            this.props.getCart()
        }
    }

    componentDidUpdate() {
        let query = new URLSearchParams(this.props.location.search)
        let pagenumber = query.get("page") || 1;
        if (this.state.currentPage != pagenumber) {
            this.setState({ currentPage: pagenumber })
            this.props.getProduct(this.props.history, pagenumber)
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
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
                            {this.props.cart.length ?
                                <div className="cart_count">
                                    {this.props.cart.length}
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
                    < AllDishCard sources={this.props.product['product']} cart_item={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
                    {this.props.product['totalproducts'] <= 12 ? '' : <Pagination totalproducts={Number(this.props.product['totalproducts'])} currentPage={Number(this.state.currentPage)} />}
                </div>
            </>

        );
    }

}

const mapStateToProps = (state) => ({
    cart: state.cart,
    product: state.product
})

export default connect(mapStateToProps, { getCart, addToCart, getProduct, removeFromCart })(withRouter(AllDishComponent));