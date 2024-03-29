'use strict';

// Declare app level module which depends on views, and core components
angular.module('petApp', [
  'ngRoute', 'ui.bootstrap', 'signInModule', 'signUpModule', 
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
      when('/userPolicy', {
        templateUrl: 'policyList/signIn-template.html',
        controller: 'policyListController'
      }).
      when('/vender', {
      //  templateUrl: 'vender/signUp-template.html',
       // controller: 'signUpController'
      })
      .otherwise({ redirectTo: '/signIn' });
  }]);
