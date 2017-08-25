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
    }
})();