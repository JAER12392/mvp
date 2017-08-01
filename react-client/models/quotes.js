import $ from 'jquery';


export const getQuotes = (amount, callback) => {
  const motivation_URL = `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=25`;
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

