import React from 'react';

const AllDishCard = ({ sources, cart_item, addToCart, removeFromCart }) => {

    return (
        <div className="all_dish_card">
            {sources.map((source) => {
                return (<div className="card_style" key={source.id}>
                    <div className="card_wish_list">
                        <svg xmlns="http://www.w3.org/2000/svg" className="_2oLiqr" width="24" height="24" viewBox="0 0 24 24"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#CCCCC8;" className="_35Y7Yo" stroke="#FFF" fillRule="evenodd" opacity=".9"></path></svg>
                    </div>
                    <img src={source.imageLink} alt={source.name} />
                    <div className="card_details_container">
                        <div className="card_dish_name">
                            {source.name}
                        </div>
                        <div className="card_restaurant">
                            {source.restaurant}
                        </div>
                        <div className="cart_price_button">
                            <div className="card_price">
                                ₹{source.price}
                            </div>
                            {cart_item.includes(source.id) ?
                                <div >
                                    <button className="card_button_remove" onClick={() => removeFromCart(source.id)}>Remove -</button>
                                </div>
                                :
                                <div >
                                    <button className="card_button_active" onClick={() => addToCart(source.id)}>Add +</button>
                                </div>
                            }
                        </div>

                    </div>
                </div>);
            })}
        </div>
    );

}

export default AllDishCard