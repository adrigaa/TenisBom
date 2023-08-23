import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greeting }) => {
  const handleAddToCart = (quantity) => {
    // Implemente a lógica para adicionar o item ao carrinho aqui
    console.log(`Adicionar ${quantity} itens ao carrinho`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h2>{greeting}</h2>
          {/* Inclua o componente ItemCount aqui */}
          <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
