import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increaseCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
      <button onClick={handleAdd} disabled={count > stock}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ItemCount;
