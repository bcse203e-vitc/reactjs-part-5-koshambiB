import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products, filter }) => {
  const filteredProducts = products.filter(product => filter === 'All' || product.category === filter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {filteredProducts.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '10px', width: '100%', textAlign: 'left' }}>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
};

const App = () => {
  const [filter, setFilter] = useState('All');

  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'T-shirt', category: 'Clothing' },
    { id: 3, name: 'Couch', category: 'Home Decor' },
    { id: 4, name: 'Headphones', category: 'Electronics' },
    { id: 5, name: 'Jeans', category: 'Clothing' },
  ];

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h1>Product Filter</h1>
      <div style={{ marginBottom: '20px' }}>
        {['All', 'Electronics', 'Clothing', 'Home Decor'].map(category => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            style={{
              margin: '0 10px',
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <ProductList products={products} filter={filter} />
    </div>
  );
};

export default App;
