'use strict';

angular
  .module('myApp.user', [])

  .service('UserServices', User);

User.$inject = ['$http', '$q'];

function User($http, $q) {
  const API_URL = 'https://api.github.com/users';

  function getUsers(username) {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: `${API_URL}/${username}`
    }).then(
      function successCallback(response) {
        deferred.resolve(response);
      },
      function errorCallback(response) {
        deferred.reject(response);
      }
    );

    return deferred.promise;
  }

  return {
    getUsers: getUsers
  };
}
