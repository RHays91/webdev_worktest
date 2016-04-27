angular.module('topic')
.directive('topicItem', [
  '$state',
  function ($state) {
    
    return {
      restrict: 'E',
      scope: {
        item: '=',
        mobile: '='
      },
      templateUrl: 'templates/topicItem.html',
      link: function (scope, elem, attrs) {

        // Navigate to Selected Topic Thread
        scope.viewThread = function (id) {
          $state.go('qa.thread', { threadId: id });
        }

      }

    };

}]);
