'use client'
import React, { useState } from "react";

export default function Home() {
  const items = [
    { id: 1, category: 'electronics', name: 'laptop' },
    { id: 2, category: 'electronics', name: 'mobile phone' },
    { id: 3, category: 'electronics', name: 'tablet' },
    { id: 4, category: 'furniture', name: 'table' },
    { id: 5, category: 'furniture', name: 'desk' },
    { id: 6, category: 'furniture', name: 'chair' },
    { id: 7, category: 'stationary', name: 'books' },
    { id: 8, category: 'stationary', name: 'pen' },
    { id: 9, category: 'clothing', name: 'shirt' },
    { id: 10, category: 'clothing', name: 'trousers' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const UniqueCategory = ['All', ...new Set(items.map(item => item.category))];
  
  const filteredItem = items.filter(item => 
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Filter Items by Category</h1>
      
      {/* Category buttons */}
      <div className="mb-6">
        {UniqueCategory.map((category, index) => (
          <button 
            key={index} 
            onClick={() => setSelectedCategory(category)}
            className={`me-2 mb-2 px-5 py-2.5 rounded-lg font-medium text-sm 
              ${selectedCategory === category 
                ? "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800" 
                : "bg-white border border-black hover:bg-gray-100"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display filtered items */}
      {filteredItem.length > 0 ? (
        <ul className="list-disc pl-5">
          {filteredItem.map(item => (
            <li key={item.id} className="text-lg">{item.name}</li>
          ))}
        </ul>
      ) : (
        <p className="text-red-500">No items found in this category.</p>
      )}
    </div>
  );
}
