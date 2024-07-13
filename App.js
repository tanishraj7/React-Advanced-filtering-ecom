import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
//getting the db
import products from "./db/data";
import Cards from "./Components/Cards";
import { useState } from "react";

function App() {

  const [selectedCategory, setSelectedCategory]= useState(null);
  const [query,setQuery]= useState("");
  //input filter
  

  const handleInputChange= event=>{
    setQuery(event.target.value)
  }

  const filteredItems=  products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //radio filter
  const handleChange= event=>{
    setSelectedCategory(event.target.value)
  };

  //buttons filter
  const handleClick= event=>{
    setSelectedCategory(event.target.value)
  };

  //final filtering----

  function filteredData(query, selected, products){
     let filteredProducts= products;
//for input
     if(query){
      filteredProducts= filteredItems
     };
     //for checkmarks

     if(selected){
      filteredProducts= filteredProducts.filter(
        ({company, color, category, newPrice, title}) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected 
      );
     }

     return filteredProducts.map(
      ({img, title, prevPrice, newPrice, star, reviews})=>(
        <Cards
        key={Math.random()}
        img={img}
        title={title}
        prevPrice={prevPrice}
        newPrice={newPrice}
        star={star}
        reviews={reviews}
        />
      )
     );
  }
  //now result of filter
  const result= filteredData(products,selectedCategory,query);
  //if we wrote query or selected category at first it will show null error as they are pre defined



  return (<>
  <Sidebar handleChange={handleChange}/>
  <Navigation query={query} handleInputChange={handleInputChange}/>
  <Recommended handleClick={handleClick}/>
  <Products result={result}/>
  </>
  );
}

export default App;
