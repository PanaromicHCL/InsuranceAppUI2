
angular.module('signInModule', ['ui.bootstrap']).controller('policyListController', function ($scope, $http, restApiSerivce, $rootScope, $log, $document) {
  $scope.policyObj = {
    showFlag: false
  }

  //$scope.policy = [{ name: 'p1', entryage: "34", maturityage: "60", policyterm: "12years", minimumpremium: '1288Rs', sumassured: '12999Annually' }, { name: 'p1', entryage: "34", maturityage: "60", policyterm: "12years", minimumpremium: '1288Rs', sumassured: '12999Annually' }, { name: 'p1', entryage: "34", maturityage: "60", policyterm: "12years", minimumpremium: '1288Rs', sumassured: '12999Annually' }];
  $scope.showDetailsFlag = false;
  //alert(JSON.stringify('policyList'));
  // restApiSerivce.policyList($scope.userToSignIn);
  $http({
    method: 'GET',
    url: 'http://52.66.197.169:8083/Insurance/api/policies'
  }).then(function successCallback(response) {
    $log.info(response);
    $scope.policyList = response.data;
   // alert(JSON.stringify($scope.policyList));
    //return response.data;
  }, function errorCallback(response) {
    
  });

  //};
  $scope.getPolicyDetails = function (policy_id) {
    //alert(policy_id);
    $scope.showcolspan = true;
    $scope.policyObj.showFlag = true;
    $http({
      method: 'GET',
      url: 'http://52.66.197.169:8083/Insurance/api/policydetail/'+policy_id
    }).then(function successCallback(response) {
      $log.info(response);
      $scope.policyObj.showFlag = true;
      $scope.policyToBuy = response.data;
     // alert(JSON.stringify( $scope.policyToBuy));
      //return response.data;
    }, function errorCallback(response) {
      
    });
  };
});