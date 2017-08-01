import $ from 'jquery';

const motivation_URL = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=25&callback=";

export const getQuotes = (callback) => {
  $.ajax({
    url: `${motivation_URL}`,
    success: (quotes) => {
      callback(quotes);
    },
    error: err => {
      console.log('Error man fix it', err);
    } 
  });
}

