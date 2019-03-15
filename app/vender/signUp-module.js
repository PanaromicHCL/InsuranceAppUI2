
angular.module('signUpModule', []).controller('signUpController', function ($scope, $rootScope, signInService) {
  $scope.userToSignUp = {
    userName: '',
    password: ''

  }
  $scope.signUpSubmit = function () {
    signInService.loginAuthication($scope.userToSignUp);

  };
});