(function () {
    'use strict';

    angular.module('ContactApp')
        .controller('AddContact', AddContact)

    AddContact.$inject = ['ContactService','$location'];

    function AddContact(ContactService,$location) {
        var $ctrl = this;

        $ctrl.contact = {
            id: false,
            firstName: "",
            secondName: "",
            dob: new Date("0001-01-01"),
            phone: "",
            gender: "male",
            relationship: "Others",
            description: "",
            isFavorite: false
        };

        $ctrl.createContact = function () {
            if ($ctrl.isValid) {
                ContactService.createContact($ctrl.contact);
                $location.path('/allContacts');
            }
            else {
                alert("Check the entered information!");
            }
        }

        $ctrl.cancel = function () {
             $location.path('/allContacts');
        }
    }
})();