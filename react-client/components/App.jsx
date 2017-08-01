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
    let context = this;
    quoteModel.getQuotes((data) => {
      this.setState({
        quotes: data
      });
    });
  }



render() {
   return (
      <div className="main">
        <h1> The Heart of a Lion </h1>
        <QuotesBody quotes={this.state.quotes} />
      </div>
    );
  }
}


export default App;