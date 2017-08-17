(function () {
    'use strict';

    angular.module('ContactApp', ['ngRoute']);

    angular
        .module('ContactApp')
        .config(function ($routeProvider, $locationProvider) {
             $routeProvider.when('/',
                {
                    controller: 'AllContacts',
                    template: '<all-contacts></all-contacts>'
                });
            $routeProvider.when('/allContacts',
                {
                    controller: 'AllContacts',
                    template: '<all-contacts></all-contacts>'
                });
            $routeProvider.when('/favorite',
                {
                    controller: 'FavoriteContactsList',
                    template: '<favorite-contacts-list></favorite-contacts-list>'
                });
            $routeProvider.when('/addNew',
                {
                    controller: 'AddContact',
                    template: '<add-contact></add-contact>'
                });
            $routeProvider.when('/edit/:contactId',
                {
                    controller: 'EditContact',
                    template: '<edit-contact></edit-contact>'
                });    
            $routeProvider.otherwise({ redirectTo: '/' });

            // $locationProvider.hashPrefix('!');
            //  $locationProvider.html5Mode(true);
        });

})();