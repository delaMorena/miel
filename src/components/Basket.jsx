import React from "react";

export const Basket = (props) => {
  const { cardItems, onAdd, onRemove } = props;
  const itemPrice = cardItems.reduce(
    (accumulator, current) => accumulator + current.price * current.qty,
    0
  );
  const iva = itemPrice * 0.21;
  const shippingPrice = itemPrice > 80 ? 0 : 10;
  const totalPrice = itemPrice + iva + shippingPrice;
  return (
    <aside className="block basket col-1">
      <h2>Cesta</h2>
      <div>
        {cardItems.length === 0 && <div className= "insideCart"> Cesta vacía </div>}
      </div>

      {cardItems.map((item) => (
        <div className="row insideCart" key={item.id}>
          <div>{item.name}</div>
          <div>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div>
            {item.qty} x {item.price.toFixed(2)}€
          </div>
        </div>
      ))}

        {cardItems.length !== 0 && (
          <>
          <hr></hr>
            <div className="row"> 
              <div className="col-2 text-left ">Precio artículo</div>
              <div className="col-1 text-right">{itemPrice.toFixed(2)}€</div>
            </div>
            <div className="row"> 
              <div className="col-2 text-left ">IVA</div>
              <div className="col-1 text-right">{iva.toFixed(2)}€</div>
            </div>
            <div className="row"> 
              <div className="col-2 text-left ">Gastos de envío</div>
              <div className="col-1 text-right">{shippingPrice.toFixed(2)}€</div>
            </div>
            <div className="row"> 
              <div className="col-2 text-left "><strong>Total</strong></div>
              <div className="col-1 text-right"><strong>{totalPrice.toFixed(2)}€</strong></div>
            </div>
            <hr />
            <div className="row">
              <button className="checkOutButton" onClick={() => alert('No checkout implemented yet')}>
                Realizar pago
              </button>
            </div>
          </>
      )}
    </aside>
  );
};
