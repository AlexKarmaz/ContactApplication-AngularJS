(function(){
    'use strict';

    angular.module('ContactApp')
        .controller('SearchBar', SearchBar)

    SearchBar.$inject = ['SearchService'];

    function SearchBar(SearchService) {
        var $ctrl = this;

        $ctrl.setSearchString = function(){
            SearchService.setSearchString($ctrl.searchString);
        }
    }
})();