(function () {
    'use strict';

    angular.module('ContactApp')
        .controller('AddEditForm', AddEditForm)

    AddEditForm.$inject = ['ContactService','$location','$scope'];

    function AddEditForm(ContactService,$location,$scope) {
        var $ctrl = this;
        $ctrl.nextDay = Date.now();

        $ctrl.relationships = ["Work", "Home", "Others"];

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
    }
})();