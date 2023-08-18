import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h2>{greeting}</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
