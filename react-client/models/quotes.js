import $ from 'jquery';

const motivation_URL = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";

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

// export const getQuotes = (callback) => {
//   $.ajax( {
//     url: 'http://quotesondesign.com/wp-json/posts',
//     success: function(data) {
//       callback(data);
//     },
//     error: function(err) {
//       console.error(err);
//     }
//   });
// }

// export const getQuotes = callback => {
//   $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=3&callback=", function(a) {
//     callback(a);
//   });
// }