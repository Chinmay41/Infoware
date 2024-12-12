import React from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface Props {
    product: Product;
    onAddToCart: () => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => (
    <div>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
    </div>
);

export default ProductCard;
