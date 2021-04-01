import React from 'react'

export const Product = (props) => {
    const { product, onAdd } = props;
    return (
      <div >
        <div className="card">
          <img className="small" src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <div>{product.price}€</div>
          </div>
        <div>
          <button className="addToCart" onClick={() => onAdd(product)}>Añadir a la cesta</button>
        </div>
      </div>
    );
}
