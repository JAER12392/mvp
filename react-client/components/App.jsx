import React from 'react';
import * as quoteModel from '../models/auth.js';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    quotes: [],
  };

}

componentDidMount() {
  this.fetchQuotes();
}

  fetchQuotes() {
    quoteModel.getQuotes((data) => {
    console.log('Hi this is some cool data', data);
      this.setState({
        this.quotes.push(data);
      });
    });

  }





render() {
   return (
      <div>
       <h1> The Heart of a Lion </h1>
        <QuotesBody />
      </div>
    );
  }
}


export default App;