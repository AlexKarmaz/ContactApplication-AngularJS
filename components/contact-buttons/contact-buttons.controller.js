(function(){
    'use strict';

    angular.module('ContactApp')
        .controller('ContactButtons', ContactButtons)

    ContactButtons.$inject = ['ContactService','$location','$route'];

    function ContactButtons(ContactService,$location,$route) {
        var $ctrl = this;

        $ctrl.isAnyMark = function () {
            return !Object.values($ctrl.selected).some(x => x === true);
        }

        $ctrl.removeSelected = function(){
            var promiseObj = ContactService.removeSelected($ctrl.selected);
            promiseObj.then(function (value) { $ctrl.result = value;
                if($ctrl.result==200){$route.reload();}
             });
        }

        $ctrl.addNew = function () {
            $location.path('/addNew');
        }
    }
})();