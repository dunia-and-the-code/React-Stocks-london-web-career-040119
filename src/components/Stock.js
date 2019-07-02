import React from 'react'
import getStocks from '../containers/Api';

//feed indvidual stock as a perameter in curly brakets as its an object
//we could pass in props instead
const Stock = ({stock, handleClick}) => (
  <div>

    <div className="card">
      <div className="card-body" onClick={handleClick} >
        <h5 className="card-title">{
            //Company Name
            stock.name
          }</h5>
        <p className="card-text">
          {
          //curly brackets to insert javascript into jsx. It is still an object 
            //ticker: stock price
            stock.ticker
          }
          <br/>
          {
            stock.price
          }
          <br/>
          {
            stock.type
          }
          </p>
      </div>
    </div>


  </div>
);

export default Stock
