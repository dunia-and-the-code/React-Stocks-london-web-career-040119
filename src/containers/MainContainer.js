import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import getStocks from '../containers/Api'

class MainContainer extends Component {
  //set state
  state = {
    //setting intitial state ready for data, according to the format its in
    stocks: [],
    portfolio: [],
    filteredStocks: []
  }

  //normal javascript function to call the fetch function
  callGetStocksFetch = () => {
    getStocks()
      //.then after function called and using recieved data to setSetate
      .then(data => this.setState({ stocks: data, filteredStocks: data }))
  }

  //call function when page loads
  componentDidMount() {
    //this - used with classes to work on the function we're in (it reffers to the scope of current function)
    this.callGetStocksFetch()
  }

  //we are checking that we are following the right path as we send the function through to stocks.js
  buyStocks = (stock) => {
    // debugger here to check correct stock being passed down
    // console.log('hello')
    // console.log(stock.id)

    const { portfolio, stocks } = this.state
    //we have access to this state because we set the state in componentDidMount

    const myPortfolio = portfolio.slice()
    //debugger to check what in Myportfolio
    //make a copy of portfolio inorder to change the original portfolio state
    const check = portfolio.filter(portStock => portStock.id === stock.id)[0]
    const myStock = stocks.filter(stockX => stockX.id === stock.id)[0] //0 grabs the first object as filters an array
    //debugger


    if (check) {
      alert("Stock already in portfolio")
    } else {
      myPortfolio.push(myStock)
      this.setState({ portfolio: myPortfolio })
    }

    // debugger
  }
  //pass down through the stocksContainer


  sellStocks = (stock) => {
    // console.log('buy')

    const { portfolio } = this.state

    const myPortfolio = portfolio.slice()

    // filter over myPortfolio and we create a new array full of every stock that doesnt match the id of the stock we passed down
    const updatedPortfolio = myPortfolio.filter(stockX => stockX.id !== stock.id)
    // debugger

    this.setState({ portfolio: updatedPortfolio })
  }

  sortAlphabetically = () => {
    // console.log('abc')
    const { stocks } = this.state

    this.setState({ stocks: stocks.sort((a, b) => a.name.localeCompare(b.name)) })

  }

  sortByPrice = () => {
    // console.log('abc')
    const { stocks } = this.state

    this.setState({ stocks: stocks.sort((a, b) => a.price - b.price) })

  }

  //pass in selector type 
  sortByType = (type) => {
    // console.log('abc')
    // debugger
    const {stocks} = this.state

    const stockType = stocks.filter(stock => stock.type === type)
    // debugger
    if (type === 'All') {
      this.setState({filteredStocks: stocks})
    }else{
      this.setState({filteredStocks: stockType})
    }
  }


  render() {
    //set this.state as the stocks array to avoid repeating this.
    const { stocks, portfolio,filteredStocks } = this.state

    return (
      <div>
        <SearchBar sortAlphabetically={this.sortAlphabetically} sortByPrice={this.sortByPrice} sortByType={this.sortByType} />

        <div className="row">
          <div className="col-8">

            <StockContainer stocks={stocks} buyStocks={this.buyStocks}  filteredStocks={filteredStocks} />

          </div>
          <div className="col-4">

            <PortfolioContainer portfolio={portfolio} sellStocks={this.sellStocks} />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
