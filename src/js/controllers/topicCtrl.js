angular.module('topic', [])
.controller('topic.ctrl', [
  '$http',
  'ContentCache',
  function ($http, ContentCache) {
  
    var _this = this;
    this.topics;

    // If Cache is Empty, Request Resource
    // Otherwise pull from Cache
    if ( !ContentCache.getTopics() ) {
      $http.get('http://localhost:8081/api/qa')
        .then(function (response) {
          _this.topics = response.data.results;
          ContentCache.setTopics(response.data.results);
      });
    }
    else {
      this.topics = ContentCache.getTopics();
    }

}]);
