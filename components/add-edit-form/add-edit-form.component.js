(function() {
  'use strict';

  angular.module('ContactApp').
  component('addEditForm', {
    controller: "AddEditForm",
    templateUrl: "components/add-edit-form/add-edit-form.html",
     bindings: {
      contact: '=',
      myForm: '=',
      isValid: '='
    }
  });
})();