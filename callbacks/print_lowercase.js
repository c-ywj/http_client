var getHTML = require("../http-functions");

var https = require("https");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowercase (html) {
  console.log(html.toLowerCase());
}

getHTML.getHTML(requestOptions, printLowercase);