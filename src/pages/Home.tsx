import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { fetchProducts } from '../api/productsApi';
import ProductCard from '../components/productCard';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]); // Explicitly type products
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProducts()
            .then((data: Product[]) => setProducts(data)) // Type the response
            .catch(console.error);
    }, []);

    return (
        <div className="container">
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={() => dispatch(addToCart(product))}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
