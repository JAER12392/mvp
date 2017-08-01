import React from 'react';
import Quote from './Quote.jsx';

const QuotesBody = (props) => {
  return (  
    <div>
      <h3 className="subtitle"> Are you ready to conquer the world? </h3>
      <button>LyfeGainz</button>
        { 
          props.quotes.map((quote) => {
            return (<Quote quote={quote} key={quote.ID} />)
          }
        )}
    </div>
  )
};

export default QuotesBody;