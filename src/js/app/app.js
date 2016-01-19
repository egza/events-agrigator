(function () {
  angular.module('eva', [])
          .config(['$sceProvider', function ($sceProvider) {
            $sceProvider.enabled(false);
          }])
          .run(['$rootScope',
                '$document',
                '$timeout',
                function ($rootScope, $document, $timeout) {

            watchDigest();

            function watchDigest () {
              var unregister = $rootScope.$watch(function(){
                console.log('digest-end');
                unregister();

                $timeout(function(){
                  $rootScope.$emit('digest-end');
                  watchDigest();
                },0,false);
              });
            }

          }]);
})();
