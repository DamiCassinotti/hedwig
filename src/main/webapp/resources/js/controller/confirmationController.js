(function () {
    angular.module('hedwigApp').controller('ConfirmationController', ['$scope', '$uibModalInstance', '$timeout', function ($scope, $uibModalInstance, $timeout) {

		$scope.persons = [
			{menu: 'NO_VALUE'}
		]

		function removeFade() {
			var myEl = angular.element(document.getElementsByClassName('confirmationClass'));
			myEl.removeClass('fade');
        }

		$timeout(removeFade, 1);

		$scope.ok = function() {
			$scope.submitted = true;
			if ($scope.confirmationForm.$invalid) {
				return;
			}
		    $uibModalInstance.close('OK');
		}

		$scope.cancel = function() {
		    $uibModalInstance.dismiss();
		}

		$scope.addPerson = function() {
			$scope.persons.push({menu: 'NO_VALUE'})
		}

    }]);
})();
