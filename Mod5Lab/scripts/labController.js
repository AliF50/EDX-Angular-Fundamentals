app.controller('labController', [
    '$scope', 'registration',
    function($scope, registration) {
        $scope.reset = reset;
        $scope.submit = submit;
        $scope.token;

        reset();

        function submit(model) {
            registration.submit(model).$promise
                .then(function(response) {
                        alert('success');
                        $scope.token = response.token;
                    },
                    function(response) {
                        alert('error');
                    });
        }

        function reset() {
            $scope.model = {};
        }
    }
]);
