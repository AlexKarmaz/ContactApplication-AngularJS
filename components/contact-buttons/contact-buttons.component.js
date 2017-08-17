(function() {
  'use strict';

  angular.module('ContactApp').
  component('contactButtons', {
    controller: "ContactButtons",
    templateUrl: "components/contact-buttons/contact-buttons.html",
    bindings: {
      selected: '<'
    }
  });

})();