
angular.module('signInModule', ['ui.bootstrap']).controller('policyListController', function ($scope, restApiSerivce, $rootScope, $log, $document) {
  $scope.policyObj = {
    showFlag: false
  }

  $scope.policy = [{ name: 'p1', entryage: "34", maturityage: "60", policyterm: "12years", minimumpremium: '1288Rs', sumassured: '12999Annually' }, { name: 'p1', entryage: "34", maturityage: "60", policyterm: "12years", minimumpremium: '1288Rs', sumassured: '12999Annually' }, { name: 'p1', entryage: "34", maturityage: "60", policyterm: "12years", minimumpremium: '1288Rs', sumassured: '12999Annually' }];
  $scope.showcolspan =false;
  //alert(JSON.stringify('policyList'));
  restApiSerivce.policyList($scope.userToSignIn);
  //};
  $scope.getPolicyDetails = function () {
    $scope.showcolspan =true;
    $scope.policyObj.showFlag = true;
    //alert(JSON.stringify('getPolicyDetails'));
    restApiSerivce.policyDetails('polict_id');
  };
});