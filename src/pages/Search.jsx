import React from 'react';
import { useParams } from 'react-router-dom';
import ItemsContainer from '../components/ItemsContainer'; // Import ItemsContainer
import items from '../components/db'; // Mock data (ensure you have a data file)
import Header from '../components/Header';
const Search = () => {
    const { category } = useParams(); // Get the category from the URL parameter
  
    // Dynamic filtering logic
    const filteredItems = items.filter((item) => {
      // Handle brand categories (e.g., Apple, Samsung, Google)
      if (item.brand.toLowerCase() === category.toLowerCase()) {
        return true;
      }
  
      // Handle OS categories (e.g., Android, iOS)
      if (item.os && item.os.toLowerCase() === category.toLowerCase()) {
        return true;
      }
  
      // Add additional conditions for future flexibility if needed
      return false;
    });
  
    return (
      <div>
        <Header/>
        <h1>Showing results for {category}</h1>
        {filteredItems.length > 0 ? (
          <ItemsContainer items={filteredItems} /> // Pass filtered items
        ) : (
          <p>No results found for "{category}".</p> // Fallback for unmatched categories
        )}
      </div>
    );
  };
  
  export default Search;