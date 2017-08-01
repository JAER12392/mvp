import React from 'react';
import * as quoteModel from '../models/quotes.js';
import QuotesBody from './QuotesBody.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
      quotes: []
    };
    this.onClickQuote = this.onClickQuote.bind(this); 
  }

  componentDidMount() {
    this.getQuotes()
  }
  
  getQuotes(number) {
    let context = this;
    quoteModel.getQuotes(number, (data) => {
      var quotesArr = this.state.quote;
      quotesArr.unshift(data.shift());

      this.setState({
        quote: quotesArr,
        quotes: data
      });
    });
  }

//Function that will help me render the information on the page with a click of a button 
  
onClickQuote() {
  var quotesArr = this.state.quote;
  quotesArr.unshift(this.state.quotes.shift());
  this.setState({
    quote: quotesArr
  })
}


render() {
   return (
      <div className="main">
        <h1> The Heart of a Lion </h1>
        <QuotesBody quote={this.state.quote} handleClick={this.onClickQuote}/>
      </div>
    );
  }
}


export default App;