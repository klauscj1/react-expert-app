import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  //   const categories = ["One Puch", "Samuari X", "Dragon ball"];

  const [categories, setCategories] = useState(["One Puch"]);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((cat) => (
          <GifGrid key={cat} category={cat} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
