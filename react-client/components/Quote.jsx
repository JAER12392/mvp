import React from 'react';

const Quote = (props) => {

  var content = props.quote.content.split('<p>').join('').split('</p>').join('');
  content = content.replace(/[^A-Za-z]+/g, ' ');

  
  return (
    <div className="quote">
      <h3>{props.quote.title}</h3>
      {content}
      <h6>{props.quote.link}</h6>
    </div>
  )
}

export default Quote;