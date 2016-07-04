(function() {
    'use strict';

    angular
        .module('ednagatewayApp')
        .factory('PasswordResetFinish', PasswordResetFinish);

    PasswordResetFinish.$inject = ['$resource'];

    function PasswordResetFinish($resource) {
        var service = $resource('uaa/api/account/reset_password/finish', {}, {});

        return service;
    }
})();
