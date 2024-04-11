import React from "react";

function CategoryFilter({ categories, currentCategory, changeCategory }) {
  return (
    <div className='categories'>
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index) => {
        return (
          <button
            className={currentCategory === category ? "selected" : ""}
            key={index}
            onClick={() => changeCategory(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
