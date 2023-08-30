import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = 'https://api.thesneakerdatabase.com/v1'; 

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/sneakers/1`) 
      .then((response) => response.json())
      .then((data) => {
        setItem(data.results[0]); 
      })
      .catch((error) => {
        console.error('Error fetching item:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          {item ? <ItemDetail item={item} /> : <p>Carregando...</p>}
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;