(function(){
    'use strict';

    angular.module('ContactApp')
        .service('SearchService', SearchService)

    function SearchService() {
        var searchString = '';
        this.getSearchString = getSearchString;
        this.setSearchString = setSearchString;

        function getSearchString() { 
            return searchString;
        }
        function setSearchString(value){
            searchString = value;
        }

    }
})();