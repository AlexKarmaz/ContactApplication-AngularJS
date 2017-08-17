(function(){
    'use strict';

    angular.module('ContactApp')
        .controller('EditContact', EditContact)

        EditContact.$inject = ['ContactService','$routeParams','$location'];

    function EditContact(ContactService,$routeParams,$location) {
        var $ctrl = this;

        $ctrl.contactId = ($routeParams.contactId) ? parseInt($routeParams.contactId) : 0;
        if ($ctrl.contactId > 0) {
            $ctrl.contact = ContactService.getContact($ctrl.contactId);
        }

        $ctrl.cancel = function(){
            $location.path('/allContacts');
        }

        $ctrl.saveContact = function () {
            if ($ctrl.isValid) {
                ContactService.updateContact($ctrl.contact);
                $location.path('/allContacts');
            }
            else {
                alert("Check the entered information!");
            }
        }
    }
})();