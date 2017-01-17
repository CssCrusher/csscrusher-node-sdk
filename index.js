'use strict';

const requestPromise = require('request-promise');

function minify(data) {
  const options = {
    method: 'POST',
    uri: 'https://api.csscrusher.com/api/minify',
    body: {
       original: data
    },
    json: true 
  };
  return requestPromise(options).then((result) => result.minified);
}

module.exports = {
  minify,
};
