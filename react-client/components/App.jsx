import React from 'react';
import * as quoteModel from '../models/quotes.js';
import QuotesBody from './QuotesBody.jsx';

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
      console.log('Hi this is some cool data', data[0].title);
      this.setState({
        
      });
    });

  }





render() {
   return (
      <div>
       <h1> The Heart of a Lion </h1>
       <QuotesBody quotes={this.state.quotes} />
      </div>
    );
  }
}


export default App;