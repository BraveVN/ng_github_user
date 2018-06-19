'use strict';

angular
  .module('myApp.person', ['ngRoute'])

  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/person', {
        templateUrl: 'components/Person/person.html',
        controller: 'PersonCtrl'
      });
    }
  ])

  .controller('PersonCtrl', [function() {}]);
