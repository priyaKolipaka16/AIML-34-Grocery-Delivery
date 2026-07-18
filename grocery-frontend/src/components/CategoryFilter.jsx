import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

function CategoryFilter() {

  const { category, setCategory } = useContext(CategoryContext);

  const categories = [
    "All",
    "Fruits",
    "Dairy",
    "Bakery",
    "Grains",
    "Snacks",
  ];

  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={category === cat ? "active" : ""}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;