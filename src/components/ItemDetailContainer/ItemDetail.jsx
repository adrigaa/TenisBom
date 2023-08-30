import React from 'react';

function ItemDetail({ item }) {
  return (
    <div>
      <img src={item.imageUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Preço: R${item.price.toFixed(2)}</p>
    </div>
  );
}

export default ItemDetail;