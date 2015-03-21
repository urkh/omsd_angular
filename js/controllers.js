'use strict';



var ctrl = angular.module('app.controllers', ['ngTable'])


ctrl.controller('AppCtrl', ['$scope', '$window', 
    function(              $scope,  $window ) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');

}]);






ctrl.controller('MainCtrl',['$scope', function($scope){


}]);





ctrl.controller('OPUsers', ['$scope', '$modal', function($scope, $modal){


	var get_users = function(){
		$scope.users = [
			{name: "Moroni", profile: "p1", alias:"moroni", email:"moroni@gmail.com", level:"cargo1", phone:"04161234567", status:"true"},
			{name: "Moroni", profile: "p1", alias:"moroni", email:"moroni@gmail.com", level:"cargo1", phone:"04161234567", status:"true"},
			{name: "Moroni", profile: "p1", alias:"moroni", email:"moroni@gmail.com", level:"cargo1", phone:"04161234567", status:"true"},
			{name: "Moroni", profile: "p1", alias:"moroni", email:"moroni@gmail.com", level:"cargo1", phone:"04161234567", status:"true"},
			{name: "Moroni", profile: "p1", alias:"moroni", email:"moroni@gmail.com", level:"cargo1", phone:"04161234567", status:"true"},
			{name: "Moroni", profile: "p1", alias:"moroni", email:"moroni@gmail.com", level:"cargo1", phone:"04161234567", status:"true"},
			{name: "Moroni", profile: "p1", alias:"moroni", email:"moroni@gmail.com", level:"cargo1", phone:"04161234567", status:"true"},
			{name: "Moroni", profile: "p1", alias:"moroni", email:"moroni@gmail.com", level:"cargo1", phone:"04161234567", status:"true"},
			{name: "Moroni", profile: "p1", alias:"moroni", email:"moroni@gmail.com", level:"cargo1", phone:"04161234567", status:"true"},

	    ];
	}

	get_users()





	$scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function () {

    var modalInstance = $modal.open({
      templateUrl: 'templates/OmegaProfile/op_users/create.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      console.info('Modal dismissed at: ' + new Date());
    });
  };












}]);




ctrl.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

});