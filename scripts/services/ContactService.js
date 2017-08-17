//  contactApp.factory('ContactService', function($http, $q){
//     return{
//         getData: function(){
//             var deferred = $q.defer();
//             $http({method: 'GET', url: 'contacts.json'}).
//                 then (function success(response) {
//                         deferred.resolve(response.data.contacts);
//                     }, function error(response) {
//                         deferred.reject(response.status);
//                     }
//                 );
              
//             return deferred.promise;
//         }
//     }
// })

(function(){
    'use strict';

    angular
        .module('ContactApp')
        .service('ContactService', ContactService)

    ContactService.$inject = ['$q'];

    function ContactService($q) {

        var contactsArray = [
            {
                "id": "1",
                "firstName": "Alex",
                "secondName": "Karmaz",
                "dob": "01.01.1999",
                "phone": "7624300",
                "gender": "male",
                "relationship": "Home",
                "description": "fdf",
                "isFavorite": true
            },
            {
                "id": "2",
                "firstName": "Dima",
                "secondName": "Ignatenko",
                "dob": "01.01.1999",
                "phone": "5882918",
                "gender": "male",
                "relationship": "Work",
                "description": "fdf",
                "isFavorite": true
            },
            {
                "id": "3",
                "firstName": "John",
                "secondName": "Smit",
                "dob": "01.01.1999",
                "phone": "5565373",
                "gender": "male",
                "relationship": "Others",
                "description": "fdf",
                "isFavorite": false
            },
            {
                "id": "4",
                "firstName": "Smith",
                "secondName": "John",
                "dob": "01.01.1999",
                "phone": "3392755",
                "gender": "female",
                "relationship": "Home",
                "description": "fdf",
                "isFavorite": false
            }
        ];

        this.getAllContacts = getAllContacts;
        this.deleteContact = deleteContact;
        this.createContact = createContact;
        this.getContact = getContact;
        this.updateContact = updateContact;
        this.removeSelected = removeSelected;

        function getAllContacts(){
            return $q.resolve(contactsArray);
        }

        function deleteContact(id) {
            for (var i = contactsArray.length - 1; i >= 0; i--) {
                if (contactsArray[i].id == id) {
                    contactsArray.splice(i, 1);
                    break;
                }
            }
        }

        function createContact(contact){
            var lastContactId = contactsArray[contactsArray.length - 1].id;
            contact.id = Number(lastContactId) + 1;
            contactsArray.push(contact);
        }

        function getContact(id){
            var contact;
            for(var i=0; i<contactsArray.length; i++){
                if(contactsArray[i].id == id){
                    contact =  contactsArray[i];
                    break;
                }
            }
            contact = angular.copy(contact);
            contact.dob = new Date(contact.dob);
            return contact;
        }

        function updateContact(contact){
            for(var i=0; i<contactsArray.length; i++){
                if(contactsArray[i].id == contact.id){
                    contactsArray[i] = contact;
                }
            }
        }

        function removeSelected(selectedArray){
            for (var key in selectedArray) {
                if (selectedArray[key] == true) {
                    deleteContact(key);
                }
            }
        }
    }
})();