(function() {
  'use strict';

  angular.module('ContactApp').
  component('contactsTable', {
    controller: "ContactsTable",
    templateUrl: "components/contacts-table/contacts-table.html",
     bindings: {
      selected: '<'
    }
  });

})();