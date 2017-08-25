(function(){
    'use strict';

    angular.module('ContactApp')
        .controller('FavoriteContactsList', FavoriteContactsList)

    FavoriteContactsList.$inject = ['ContactService','$route'];

    function FavoriteContactsList(ContactService,$route) {
        var $ctrl = this;
    
        var promiseObj = ContactService.getAllContacts();
        promiseObj.then(function (value) { $ctrl.favoriteContacts = value; 
        });

        $ctrl.changeFavorite = function (id){
            var promiseObj = ContactService.changeFavorite(id);
            $route.reload();
        }
    }
})();