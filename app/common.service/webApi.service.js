angular.module('petApp').service('restApiSerivce', function ($http, $log, $rootScope) {
    this.policyList = function () {
      //  alert('policyList');
        // Simple GET request example:
        return $http({
            method: 'GET',
            url: 'http://10.117.189.212:8080/PetStore/pets'
        }).then(function successCallback(response) {

            return response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }


    this.policyDetails = function (polict_id) {
        //  alert('policyDetails1'+polict_id);

        // Simple GET request example:
        return $http({
            method: 'GET',
            url: 'http://10.117.189.212:8080/PetStore/pets'
        }).then(function successCallback(response) {

            return response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }




});