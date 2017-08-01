import React from 'react';

const Quote = (props) => {
  console.log('props', props.quote);
  return (
    <div className="quote">
      <h3>{props.quote.title}</h3>
      {props.quote.content}
      <h6>{props.quote.link}</h6>
    </div>
  )
}

export default Quote;