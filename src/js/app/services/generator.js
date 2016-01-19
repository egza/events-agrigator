(function () {
  angular.module('eva').service('generatorService', ['$http', generator]);

  function generator ($http) {
    return {
      getList: function () {
        return $http.get('/generator/list');
      }
    };
  }
})();
