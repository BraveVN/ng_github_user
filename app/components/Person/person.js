'use strict';

angular
  .module('myApp.person', ['ngRoute'])

  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/person', {
        templateUrl: 'components/Person/person.html',
        controller: 'PersonCtrl',
        controllerAs: '$ctrl'
      });
    }
  ])

  .controller('PersonCtrl', PersonCtrl);

PersonCtrl.$inject = ['ShareDataServices'];

function PersonCtrl(ShareDataServices) {
  const $ctrl = this;
  $ctrl.user;

  $ctrl.init = () => {
    $ctrl.user = ShareDataServices.get();
  }
}
