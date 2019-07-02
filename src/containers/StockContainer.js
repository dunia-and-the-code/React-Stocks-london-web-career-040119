import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    //we are now working with the state / data as an argument
    //you can add function passed through too
    const { stocks, buyStocks, filteredStocks } = this.props

    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          //map over stocks and sending each stock to the stocks.js to create card
          //each stock needs and id that we set when pasing it
          //set a name for the singular data

          //this.props.stocks.map(stock => .....)
          //handleClick is general name for function that gets called when you click on a stock card
          //the function that handleclick runs depends on what container we are cliokcing in eg. buyStocks / sellStocks 
          filteredStocks.map(stock => <Stock key={stock.id} stock={stock} handleClick={() => buyStocks(stock)} />)
        }
      </div>
    );
  }

}

export default StockContainer;
