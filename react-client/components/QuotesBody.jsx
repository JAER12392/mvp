import React from 'react';
import Quote from './Quote.jsx';

const QuotesBody = (props) => (

  <div>
    <h3> Are you ready to conquer the world? </h3>

  { 
    props.quotes.map(quote => 
      <Quote quote={quote} /> 
    )}
  }
  </div>

);

export default QuotesBody;