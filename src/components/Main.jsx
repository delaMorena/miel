import React from 'react';
import { Product } from './Product'

export const Main = (props) => {
    const {products, onAdd } = props
    return (
        <main className="block col-2">
            <div > 
                <h2>Productos</h2>
                <div className="row">
                    {products.map((product) => (
                        <Product key={product.id} onAdd={onAdd} product={product}></Product>
                    ))}
                </div>
            </div>
        </main>
    )
}

