angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];

function BooksIndexController( $http ) {
  var vm = this;
  vm.newBook = {};

  var endpoint = "https://super-crud.herokuapp.com/books";

  $http({
    method: 'GET',
    url: endpoint
  }).then(function successCallback(response) {
    console.log("get request called");
    vm.books = response.data.books;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createBook = function() {
    $http({
      method: 'POST',
      url: endpoint,
      data: vm.newBook
    }).then(function successCallback(response) {
      console.log("I'm adding a book");
      vm.books.push(response.data);
      vm.newBook = {};
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  };
}
