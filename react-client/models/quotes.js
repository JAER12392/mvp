import $ from 'jquery';


export const getQuotes = (amount, callback) => {
  const motivation_URL = `http://localhost:4000/quotes`;
  $.ajax({
    url: `${motivation_URL}`,
    dataType: "json",
    success: (quotes) => {
      callback(quotes);
    },
    error: err => {
      console.log('Error man fix it', err);
    } 
  });
}

export const saveQuote = (quote, callback) => {
  const quote_URL = `http://localhost:4000/quotes`
  $.ajax({
    url: quote_URL,
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(quote),
    success: (quote1) => {
      console.log(quote1)
      callback(quote1)
    },
    error: (err) => {
      console.log(err)
    }
  })
}