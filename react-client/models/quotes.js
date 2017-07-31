import $ from 'jquery';

const motivationURL = 'http://api.forismatic.com/api/1.0/';

export const getQuotes = (callback) => {
  $.ajax({
    json: 'json',
    dataType: 'json',
    url: `${motivationURL}`,
    contentType: "application/json",
    data: {
    lang: "en",
    method: "getQuote",
    format: 'json'
  
    },
    success: quote => {
      console.log('Hi this is quote', quote);
      callback(quote);
    } 
  });
}

