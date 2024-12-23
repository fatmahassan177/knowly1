import "bootstrap/dist/css/bootstrap.min.css";
import './Category.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
  const [categories, setCategories] = useState([]); 
  const apiUrl = "https://knowly.runasp.net/api/Category";

  
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      const categoriesData = response.data?.$values || []; 
      setCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setCategories([]); 
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  return (
    <>
    <div className="container-fluid my-5 Courses mt-5">
      <h1>Category</h1>
    </div>

    <div className="container mt-4">
      <div className="row">
        {categories.map((category) => (
          <div className="col-md-6 mb-5" key={category.id}>
            <div className="image-text-card">
              <img
                src={'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1734898860~exp=1734902460~hmac=24161acac4fb6f98bba08baae56efd317ed354246ae5a2a5320ca224682efc46&w=996'} 
                className="img-fluid C-image"
                alt={category.name}
              />
              <div className="text-overlay">
                <p>{category.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default Category;
