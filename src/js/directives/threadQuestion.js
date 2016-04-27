angular.module('thread')
.directive('threadQuestion', [
  '$state',
  function ($state) {

    return {
      restrict: 'E',
      scope: {
        question: '=',
        receiver: '=',
        mobile: '='
      },
      templateUrl: 'templates/threadQuestion.html'
    };
    
}]);
