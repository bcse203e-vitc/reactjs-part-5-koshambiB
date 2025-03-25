import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simulated API response
    const fetchNews = () => {
      const fakeApiResponse = {
        articles: [
          { id: 1, title: 'Breaking News: Market Surge', description: 'The stock market experienced a significant surge today.', author: 'John Doe', featured: true },
          { id: 2, title: 'Weather Update: Sunny Days Ahead', description: 'Expect sunny weather for the rest of the week.', author: 'Jane Smith', featured: false },
          { id: 3, title: 'Technology: New Smartphone Released', description: 'The latest smartphone model has been released today.', author: 'Alice Johnson', featured: true },
          { id: 4, title: 'Sports: Local Team Wins Championship', description: 'The local team won the championship in a thrilling game.', author: 'Bob Brown', featured: false },
        ],
      };
      setArticles(fakeApiResponse.articles);
    };

    fetchNews();
  }, []);

  return (
    <div className="container">
      <h1>News Feed</h1>
      <div className="news-feed">
        {articles.map(article => (
          <div
            key={article.id}
            className="news-article"
            style={article.featured ? { backgroundColor: '#f0f8ff', border: '2px solid #007bff' } : {}}
          >
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p className="author">By {article.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
