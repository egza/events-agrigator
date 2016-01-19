(function () {
  angular.module('eva').controller('GeneratorController', Generator);

  Generator.$inject = ['generatorService'];

  function Generator (generatorService) {
    var context = this;

    generatorService.getList().then(function (resp) {
      context.generatedList = resp.data;
    });
  }
})();
