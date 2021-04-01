import React from "react";
// import MoviesDetails from "./pages/MoviesDetails";
// import LandingPage from "./pages/LandingPage";
import { useState } from 'react';

import { Basket } from '../components/Basket';
import { Navbar } from '../components/Navbar';
import { Main } from '../components/Main';
import data from '../data';



export const ShoppingCart = () => {
  const { products } = data; 
  const [cardItems, setCardItems] = useState([]);
// en la fn onAdd el parámetro es el producto que se va a añadir a la cesta
  //en la cte exist (variable que checke cardItems) haz un map para encontrar un productoX (?) cuyo id coincida con el que acabo de pinchar (product.id)
        // if. Si existe este producto actualiza el valor cardItems de la siguiente forma:
          //1º chequea si ya hay alguno de este tipo de producto (con el mismo id)
            //SI HAY hay, haz un mapeo de los cardItems. si encuentra un producto con el mismo id que desplique todos los valores que haya encontrado 
              //y los convierta en un objeto y añada una clave qty a la que sume 1. Si no había ninguno antes, que actualice cardItems al productX que se está comparando
            //ELSE (existe es false) actualiza cardItems. Primero lo despliega y luego añande el producto clickado tb desplegado y 
            //con forma de objeto con qty igual a 1
  const onAdd = (product) => {
    const exist = cardItems.find(productX => productX.id === product.id);
    if (exist) {
      setCardItems(cardItems.map((productX) => productX.id === product.id ? {...exist, qty: exist.qty + 1} : productX ));
    }else {
      setCardItems([...cardItems, { ...product, qty: 1 }])
    }
  }
  const onRemove =(product) => {
    const exist = cardItems.find(productX => productX.id === product.id);
    if (exist.qty === 1 ) {
      setCardItems(cardItems.filter(productX => productX.id !== product.id))
    }else {
      setCardItems(cardItems.map((productX) => productX.id === product.id ? {...exist, qty: exist.qty - 1} : productX ));
    }
  }
    
  
  return (
    <div className="App">
      <Navbar countCardItems={cardItems.length}/>
      <div className="row">
        <Main onAdd={onAdd} products={products}/>
        <Basket onAdd={onAdd} onRemove={onRemove} cardItems={cardItems}></Basket>
      </div>
      
      
    </div>
  );
}
export default ShoppingCart;


