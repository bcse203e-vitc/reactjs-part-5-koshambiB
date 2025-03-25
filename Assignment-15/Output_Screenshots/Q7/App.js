import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductReview.module.css';

const Review = ({ name, rating, comment }) => {
  return (
    <div className={styles.review}>
      <div className={styles.reviewTitle}>{name}:</div>
      <div className={styles.rating}>Rating: {'★'.repeat(rating)}</div>
      <div>{comment}</div>
    </div>
  );
};

Review.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};

const ProductReview = ({ productName, productImage, productDescription }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const addReview = () => {
    const newReview = { name: reviewerName, rating, comment };
    setReviews([...reviews, newReview]);
    setReviewerName('');
    setRating(1);
    setComment('');
  };

  return (
    <div className={styles.productReview}>
      <h1>{productName}</h1>
      <img className={styles.productImage} src={productImage} alt={productName} />
      <p>{productDescription}</p>
      <div>
        <h2>Add a Review</h2>
        <input
          type="text"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          placeholder="Your Name"
        />
        <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
        />
        <button onClick={addReview}>Submit Review</button>
      </div>
      <div>
        <h2>Reviews</h2>
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

ProductReview.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
};

const App = () => {
  return (
    <div>
      <ProductReview
        productName="Amazing Product"
        productImage="https://via.placeholder.com/150"
        productDescription="This is an amazing product that you will love!"
      />
    </div>
  );
};

export default App;
