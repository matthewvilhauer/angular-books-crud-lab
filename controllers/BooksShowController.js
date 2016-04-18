angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;

  var endpoint = "https://super-crud.herokuapp.com/books";

  $http({
    method: 'GET',
    url: endpoint+"/"+$routeParams.id
  }).then(function successCallback(response) {
    console.log(response);
    vm.book = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
  vm.editBook = function () {
    $http({
      method: 'PUT',
      url: endpoint+"/"+$routeParams.id,
      data: vm.book
    }).then(function successCallback(response) {
      console.log("edited book successfully!");
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  };
  vm.deleteBook = function () {
    $http({
      method: 'DELETE',
      url: endpoint+"/"+$routeParams.id,
    }).then(function successCallback(response) {
      $location.path("/");
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  };
}
