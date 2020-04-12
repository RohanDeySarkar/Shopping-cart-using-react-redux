import React from 'react';

import {connect} from "react-redux";
import {
    removeItem,
    increaseItem,
    decreaseItem,
    toggleAmount
} from '../redux/actions';

const CartItem = ({
    img,
    title,
    price,
    amount,
    remove,
    increase,
    decrease,
    toggle
}) => {
    return (
        <div className="cart-item">
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button
                    className="remove-btn"
                    onClick={() => remove()}
                >
                    remove
                </button>
            </div>
            <div>
                <button
                    className="amount-btn"
                    onClick={() => toggle("inc")}
                >
                  +  
                </button>
                <p className="amount">{amount}</p>
                <button
                    className="amount-btn"
                    onClick={() => {
                        if (amount === 1) {
                            return remove()
                        } else {
                            return toggle("dec");
                        }
                    }}
                >
                    -
                </button>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id, amount} = ownProps;

    return {
        remove: () => dispatch(removeItem(id)),
        increase: () => dispatch(increaseItem(id)),
        decrease: () => dispatch(decreaseItem(id)),
        toggle: (toggle) => dispatch(toggleAmount(id, toggle))
    }
};

export default connect(null, mapDispatchToProps)(CartItem);
