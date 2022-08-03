import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((el, index) => (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterItems(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default Categories;
