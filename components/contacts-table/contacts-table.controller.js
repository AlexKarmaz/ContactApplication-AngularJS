(function(){
    'use strict';

    angular.module('ContactApp')
        .controller('ContactsTable', ContactsTable)

    ContactsTable.$inject = ['ContactService'];

    function ContactsTable(ContactService) {
        var $ctrl = this;
    
        var promiseObj = ContactService.getAllContacts();
        promiseObj.then(function (value) { $ctrl.contacts = value; });
        
        $ctrl.changeFavorite = function (id){
            ContactService.changeFavorite(id);
        }
    }
})();