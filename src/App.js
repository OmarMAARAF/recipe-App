import "./App.css";
import React, { useEffect, useState } from "react";
import Recipes from "./components/Recipes";
import { InputGroup, InputGroupText, Input } from 'reactstrap';
import Badges from "./components/Badges";
import Popular from "./components/Popular";

 const App = () =>{
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const REQ = `https://api.spoonacular.com/food/products/search?query=${query}&apiKey=690fb2dcfe1346c89680a3ef5bac1520`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const respond = await fetch(REQ);
    const data = await respond.json();
    setRecipes(data.products);
    console.log(data.products);
  };

  function SubmitHandler(e) {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={SubmitHandler}>
        <input
          type="text"
          className="search-bar "
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          search
        </button>
      </form>
      <Popular />
      <Badges query={query} setQuery={setQuery} />
      <div className="recipes">
        {recipes.map((Element) => {
          return (
            <Recipes
              key={Element.id}
              title={Element.title}
              img={Element.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
