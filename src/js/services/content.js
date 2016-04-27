angular.module('Slice')
.factory('ContentCache', [function () {

  // Content Caching Service
  // Each http request will only be sent once
  // during one lifecycle of the app
  var _topics;
  var _sessions = {};

  function setTopics (topics) {
    _topics = topics;
  }

  function getTopics () {
    return _topics;
  }

  function setSessions (sessions, qaId) {
    _sessions[qaId] = sessions;
  }

  function getSession (qaId) {
    if ( !!_sessions[qaId] ) {
      return _sessions[qaId];
    }
    return null;
  }

  return {
    setTopics: setTopics,
    getTopics: getTopics,
    setSessions: setSessions,
    getSession: getSession
  };

}]);
