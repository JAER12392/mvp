import React from 'react';
import * as quoteModel from '../models/quotes.js';
import QuotesBody from './QuotesBody.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
      quotes: []
    };
    this.onClickQuote = this.onClickQuote.bind(this); 
    this.onSubmit = this.onSubmit.bind(this); 
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
  var newQuote = this.state.quotes.shift()

  quoteModel.saveQuote(newQuote, (quote1) => {
    quotesArr.unshift(quote1)
    this.setState({
      quote: quotesArr
    });
  })
}

onSubmit(e) {
  e.preventDefault()
  var quotesArr = this.state.quote;
  
  quoteModel.saveQuote({
    content: e.target.content.value,
    title: e.target.title.value,
    link: e.target.link.value
  }, (quote1) => {
    quotesArr.unshift(quote1)
    this.setState({
      quote: quotesArr
    });
  })
}


render() {
   return (
      <div className="main">
        <h1> The Heart of a Lion </h1>
        <QuotesBody quote={this.state.quote} handleClick={this.onClickQuote}/>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="content" />
          <br />
          <input type="text" name="title" />
          <br />
          <input type="text" name="link" />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default App;