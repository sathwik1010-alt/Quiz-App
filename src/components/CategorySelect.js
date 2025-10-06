import React from "react";

const categories = ["Science", "Technology", "Sports"];

function CategorySelect({ onStart }) {
  return (
    <div className="category-container">
      <h2>Select a Category</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <button key={cat} onClick={() => onStart(cat)}>
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategorySelect;