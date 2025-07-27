import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <style>
        {`
        .notfound-container {
  text-align: center;
  padding: 100px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.notfound-title {
  font-size: 96px;
  margin-bottom: 20px;
  color: #ff4f4f;
}

.notfound-message {
  font-size: 20px;
  margin-bottom: 30px;
  color: #555;
}

.notfound-home-button {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;
}

.notfound-home-button:hover {
  background-color: #0056b3;
}
`}
      </style>
      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="notfound-home-button">
          Go Home
        </Link>
      </div>
    </>
  );
}


export default NotFound;