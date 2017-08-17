(function(){
    'use strict';

    angular.module('ContactApp')
        .controller('ContactButtons', ContactButtons)

    ContactButtons.$inject = ['ContactService','$location'];

    function ContactButtons(ContactService,$location) {
        var $ctrl = this;

        $ctrl.isAnyMark = function () {
            return !Object.values($ctrl.selected).some(x => x === true);
        }

        $ctrl.removeSelected = function(){
            ContactService.removeSelected($ctrl.selected);
        }

        $ctrl.addNew = function () {
            $location.path('/addNew');
        }
    }
})();