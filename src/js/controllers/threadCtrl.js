angular.module('thread', [])
.controller('thread.ctrl', [
  '$stateParams',
  '$state',
  '$http',
  'ContentCache',
  function ($stateParams, $state, $http, ContentCache) {

    var _this = this;
    this.threadId = $stateParams.threadId;

    this.session;
    this.topic;

    // If Cache is Empty, Request Resource
    // Otherwise pull from Cache
    if ( !ContentCache.getSession(this.threadId) ) {
      $http.get('http://localhost:8081/api/qa/' + _this.threadId)
        .then(function (response) {
          _this.session = response.data;
          _this.topic = response.data.topic;
          ContentCache.setSessions(response.data, _this.threadId);
      });
    }
    else {
      this.session = ContentCache.getSession(this.threadId);
      this.topic = this.session.topic;
    }

    // Return to Topic State
    this.backToTopics = function () {
      $state.go('qa.topic');
    }

}]);
