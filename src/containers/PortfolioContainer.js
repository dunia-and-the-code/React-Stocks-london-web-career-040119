import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
const {portfolio, sellStocks} = this.props

    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
                                              //add p to to key so it differes from the stocks id in stockscontainer
            portfolio.map(stock => <Stock key={"p" + stock.id} stock={stock} handleClick={() => sellStocks(stock)} />)  
          }
      </div>
    );
  }

}

export default PortfolioContainer;
