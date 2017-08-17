// contactApp.filter('nameFilter', function(){
//     return function(contact){
//         if(contact === undefined){
//             return false;
//         }
//         else{
//             return contact.firstName.include(filter.name) || contact.secondName.include(filter.name);
//         }
//     }
// })

(function () {
    'use strict';

    angular
        .module('ContactApp')
        .filter('nameFilter', nameFilter)

    nameFilter.$inject = ['SearchService'];

    function nameFilter(SearchService) {

        return filterFilter;

        function filterFilter(contacts) {
            var filteredContacts = [];
            var searchString = SearchService.getSearchString();

            if (searchString === undefined || searchString == "") { return contacts;}

            for (var i = 0; i < contacts.length; i++) {
                if (angular.lowercase(contacts[i].firstName).includes(angular.lowercase(searchString)) || angular.lowercase(contacts[i].secondName).includes(angular.lowercase(searchString))) {
                    filteredContacts.push(contacts[i]);
                }
            }
            
            return filteredContacts;
        }
    }

}());

