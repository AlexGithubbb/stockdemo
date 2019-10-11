import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Company from './components/Company';
class App extends Component {
  state = {
    stock1: null,
    stock2: null,
    isLoading: true
  };

  // create companies array
  companies = ['MSFT', 'IBM'];
  // initial fetch
  componentDidMount() {
    this.fetchCompany(this.companies);
  }

  // fetch api function
  fetchCompany(comps) {
    console.log('fetch api && get data');
    const API_KEY = process.env.API_KEY;
    const API_Call1 = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${
      comps[0]
    }&interval=1min&outputsize=compact&apikey=${API_KEY}`;
    const API_Call2 = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${
      comps[1]
    }&interval=1min&outputsize=compact&apikey=${API_KEY}`;
    // use Promise.all to fetch multiple api
    Promise.all([fetch(API_Call1), fetch(API_Call2)])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) =>
        this.setState({
          stock1: data1,
          stock2: data2,
          isLoading: false
        })
      );
  }

  render() {
    const { stock1, stock2, isLoading } = this.state;
    const stocks = [stock1, stock2];
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className='App'>
          <Navbar fetchCompany={() => this.fetchCompany(this.companies)} />
          <h2 className='header'>Stock Market</h2>
        </div>
        <Switch>
          <Route
            path='/'
            exact
            render={props => <Home stocks={stocks} isLoading={isLoading} />}
          />
          <Route path='/about' exact component={About} />
          <Route
            path='/:name'
            exact
            render={props => (
              // <Company {...props} getInfo={() => this.getInfo()} />
              <Company {...props} stocks={stocks} isLoading={isLoading} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
