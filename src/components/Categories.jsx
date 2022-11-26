import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../redux/ads/adsSlice";

const Categories = () => {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleCategories = (category) => {
    setCategory(category);

    if (!category) {
      return;
    }

    dispatch(filterByCategory(category));
  };

  return (
    <ul className="categories_navlinks">
      <li className="navlink" onClick={() => handleCategories("Books")}>
        Books
      </li>
      <li className="navlink" onClick={() => handleCategories("Lab Coat")}>
        Lab Coat
      </li>
      <li className="navlink" onClick={() => handleCategories("Apron")}>
        Apron
      </li>
      <li className="navlink" onClick={() => handleCategories("Calculator")}>
        Calculator
      </li>
      <li className="navlink" onClick={() => handleCategories("Hostel Stuff")}>
        Hostel Stuff
      </li>
      <li className="navlink" onClick={() => handleCategories("Tablets")}>
        Tablets
      </li>
      <li className="navlink" onClick={() => handleCategories("Laptops")}>
        Laptops
      </li>
      <li className="navlink" onClick={() => handleCategories("Others")}>
        Others
      </li>
    </ul>
  );
};

export default Categories;
