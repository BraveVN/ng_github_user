'use strict';

angular
  .module('myApp.shareData', [])

  .service('ShareDataServices', ShareData);

ShareData.$inject = [];

function ShareData() {
  var savedData = {};

  function set(data) {
    savedData = data;
  }

  function get() {
    return savedData;
  }

  return {
    set: set,
    get: get
  };
}
