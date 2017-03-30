angular.module('registrationService', ['ngResource']).
factory('registration', [
    '$resource',
    function($resource) {
        return $resource('https://reqres.in/api/register', {}, {
            submit: {
                method: 'POST'
            },
        });
    }
]);
