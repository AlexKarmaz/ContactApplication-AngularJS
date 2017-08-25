(function(){
    'use strict';

    angular
        .module('ContactApp')
        .service('ContactService', ContactService)

    ContactService.$inject = ['$q','$http'];

    function ContactService($q, $http) {

        this.getAllContacts = getAllContacts;
        this.deleteContact = deleteContact;
        this.createContact = createContact;
        this.getContact = getContact;
        this.updateContact = updateContact;
        this.removeSelected = removeSelected;
        this.changeFavorite = changeFavorite;
        var contactsArray = [];

        function getAllContacts () {
            var deferred = $q.defer();
            $http({ method: 'GET', url: 'http://localhost:64979/api/Contacts' }).
                then(function success(response) {
                    deferred.resolve(response.data);
                }, function error(response) {
                    deferred.reject(response.status);
                }
                );

            return deferred.promise;
        }

        function changeFavorite (id) {
            var deferred = $q.defer();
            $http({ method: 'POST', url: 'http://localhost:64979/api/FavoriteContacts/'  + id }).
                then(function success(response) {
                    deferred.resolve(response.data);
                }, function error(response) {
                    deferred.reject(response.status);
                }
                );

            return deferred.promise;
        }

        function deleteContact(array) {

             var deferred = $q.defer();
            $http({ method: 'POST', url: 'http://localhost:64979/api/Contacts', data: JSON.stringify(array)},).
                then(function success(response) {
                     deferred.resolve(response.status);
                }, function error(response) {
                     deferred.reject(response.status);
                }
                );
               
             return deferred.promise;
        }

        function createContact(contact){
            var deferred = $q.defer();
            $http({ method: 'POST', url: 'http://localhost:64979/api/Contacts/1', data: contact},).
                then(function success(response) {
                     deferred.resolve(response.status);
                }, function error(response) {
                     deferred.reject(response.status);
                }
                );
                return deferred.promise;
        }

        function getContact(id){
            var deferred = $q.defer();
            $http({ method: 'GET', url: 'http://localhost:64979/api/Contacts/' + id }).
                then(function success(response) {
                    response.data.Dob = new Date(response.data.Dob);
                    deferred.resolve(response.data);
                }, function error(response) {
                    deferred.reject(response.status);
                }
                );

            return deferred.promise;
        }

        function updateContact(id,contact){
            var deferred = $q.defer();
            $http({ method: 'PUT', url: 'http://localhost:64979/api/Contacts/' + id, data: contact},).
                then(function success(response) {
                     deferred.resolve(response.status);
                }, function error(response) {
                     deferred.reject(response.status);
                }
                );
                return deferred.promise;
        }

        function removeSelected(selectedArray){
            var array = [];
            for (var key in selectedArray) {
                if (selectedArray[key] == true) {
                    array.push(key);
                }
            }

            return deleteContact(array);
        }
    }
})();