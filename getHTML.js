var https = require("https");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printHTML (html) {
  console.log(html);
}

function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      callback(data);
    });

    response.on('end', function () {
      console.log('Response stream completed!');
    });

  });

}

getHTML(requestOptions, printHTML);