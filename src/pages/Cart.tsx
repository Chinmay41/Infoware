import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeFromCart } from '../store/cartSlice';
import CartItem from '../components/cartItem';

const Cart: React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    return (
        <div className="container">
            {items.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onRemove={() => dispatch(removeFromCart(item.id))}
                />
            ))}
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;
