(function(){
    'use strict';

    angular.module('ContactApp')
        .controller('EditContact', EditContact)

        EditContact.$inject = ['ContactService','$routeParams','$location'];

    function EditContact(ContactService,$routeParams,$location) {
        var $ctrl = this;

        $ctrl.contactId = ($routeParams.contactId) ? parseInt($routeParams.contactId) : 0;
        if ($ctrl.contactId > 0) {
            var promiseObj = ContactService.getContact($ctrl.contactId);
            promiseObj.then(function (value) { $ctrl.contact  = value; 
            });
        }

        $ctrl.cancel = function(){
            $location.path('/allContacts');
        }

        $ctrl.saveContact = function () {
            if ($ctrl.isValid) {
                var promiseObj = ContactService.updateContact($ctrl.contact.Id, $ctrl.contact);
                promiseObj.then(function (value) { $ctrl.result = value;
                    if($ctrl.result==200){ $location.path('/allContacts');}
                 });
            }
            else {
                alert("Check the entered information!");
            }
        }
    }
})();