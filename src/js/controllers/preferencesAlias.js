'use strict'
/* global angular */
angular.module('canoeApp.controllers').controller('preferencesAliasController',
  function ($scope, $timeout, $stateParams, $ionicHistory, configService, profileService, walletService) {
    var account = profileService.getAccount($stateParams.accountId)
    $scope.accountAlias = account.meta.alias || ''
    $scope.alias = {
      value: $scope.accountAlias
    }

    $scope.save = function () {
      account.meta.alias = $scope.alias.value
      profileService.saveWallet(function () {
        $ionicHistory.goBack()
      })
    }
  })
