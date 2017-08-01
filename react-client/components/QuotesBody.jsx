import React from 'react';
import Quote from './Quote.jsx';

const QuotesBody = (props) => {
  console.log(props)
  return (  
    <div>
       <p className="subtitle"> Are you ready to climb that mountain my brotherin? </p>
      <button onClick={props.handleClick}>A lion sleeps in the heart of every man and woman</button>
        { 
          props.quote.map((quote) => {
            return (<Quote quote={quote} key={quote.ID} />)
          }
        )}
    </div>
  )
};

export default QuotesBody;