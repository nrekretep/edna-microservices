(function () {
    'use strict';

    angular
        .module('ednagatewayApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('uaa/api/register', {}, {});
    }
})();
