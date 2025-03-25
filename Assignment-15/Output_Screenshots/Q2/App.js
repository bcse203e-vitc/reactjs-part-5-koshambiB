import React from 'react';
import './App.css';

const ProductItem = ({ product }) => {
    const { name, price, available } = product;
    const itemStyle = {
        backgroundColor: available ? 'lightgreen' : 'lightcoral',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
    };

    return (
        <div style={itemStyle}>
            <h3>{name}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            <p>{available ? 'Available' : 'Unavailable'}</p>
        </div>
    );
};

const ProductCatalog = ({ products }) => {
    return (
        <div className="product-catalog">
            <h2>Product Catalog</h2>
            {products.map((product, index) => (
                <ProductItem key={index} product={product} />
            ))}
        </div>
    );
};

 const products = [
    { name: 'Product 1', price: 29.99, available: true },
    { name: 'Product 2', price: 49.99, available: false },
    { name: 'Product 3', price: 19.99, available: true },
];

const App = () => {
    return (
        <div className="app">
            <ProductCatalog products={products} />
        </div>
    );
};

export default App;
