(function () {
    'use strict';

    angular.module('ContactApp')
        .controller('AddContact', AddContact)

    AddContact.$inject = ['ContactService','$location'];

    function AddContact(ContactService,$location) {
        var $ctrl = this;

        $ctrl.contact = {
            Id: false,
            FirstName: "",
            SecondName: "",
            Dob: new Date("0001-01-01"),
            Phone: "",
            Gender: "male",
            Relationship: "Others",
            Description: "",
            isFavorite: false
        };

        $ctrl.createContact = function () {
            if ($ctrl.isValid) {
                var promiseObj = ContactService.createContact($ctrl.contact);
                promiseObj.then(function (value) { $ctrl.result = value;
                    if($ctrl.result==200){ $location.path('/allContacts');}
                 });
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