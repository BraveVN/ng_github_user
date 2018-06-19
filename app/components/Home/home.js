'use strict';

angular
  .module('myApp.home', ['ngRoute'])

  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'components/Home/home.html',
        controller: 'HomeCtrl',
        controllerAs: '$ctrl'
      });
    }
  ])

  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$q', 'UserServices'];

function HomeCtrl($q, UserServices) {
  const topFive = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];

  const $ctrl = this;
  $ctrl.usersData = [];

  $ctrl.init = async () => {
    for (let index = 0; index < topFive.length; index++) {
      const user = topFive[index];
      await UserServices.getUsers(user).then(res => {
        $ctrl.usersData.push(res.data);
      });
    }
  };
}
