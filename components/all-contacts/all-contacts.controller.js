(function(){
    'use strict';

    angular.module('ContactApp')
        .controller('AllContacts', AllContacts)

    function AllContacts() {
        var $ctrl = this;
    
        $ctrl.selected={};        
    }
})();