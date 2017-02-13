var getHTML = require("../http-functions");

var https = require("https");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUppercase (html) {
  console.log(html.toUpperCase());
}

getHTML.getHTML(requestOptions, printUppercase);