app.controller('menuController', ['$scope', function($scope) {
    $scope.model = { title: 'Our Menu' };

    $scope.changeMainDish = function(item) {
        $scope.mainDish = { title: '', price: '' };
        $scope.mainDish.title = item;
        $scope.mainDish.price = '$13.99';
    };

    $scope.$watch('model.mainDish', function(newValue, oldValue) {
        if (newValue === 'BBQ Chicken Pizza') {
            alert('You have selected the BBQ Chicken Pizza!');
        }
    });
}]);
