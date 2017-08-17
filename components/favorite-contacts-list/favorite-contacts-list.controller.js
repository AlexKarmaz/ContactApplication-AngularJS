(function(){
    'use strict';

    angular.module('ContactApp')
        .controller('FavoriteContactsList', FavoriteContactsList)

    FavoriteContactsList.$inject = ['ContactService'];

    function FavoriteContactsList(ContactService) {
        var $ctrl = this;
    
        var promiseObj = ContactService.getAllContacts();
        promiseObj.then(function (value) { $ctrl.favoriteContacts = value; 
        });

        
    }
})();