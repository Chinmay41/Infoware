import React from 'react';

interface CartItemProps {
    item: {
        id: number;
        title: string;
        price: number;
        image: string;
    };
    onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img src={item.image} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
        <div>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
        </div>
        <button onClick={onRemove} style={{ marginLeft: 'auto' }}>
            Remove
        </button>
    </div>
);

export default CartItem;
