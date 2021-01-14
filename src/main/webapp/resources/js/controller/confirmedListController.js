(function () {
    angular.module('hedwigApp').controller('ConfirmedListController', ['$scope', 'data', function ($scope, data) {

		$scope.persons = data;

		$scope.getRegularCantidad = function() {
			return getCantidadForMenu('REGULAR');
		}

		$scope.getVegetarianoCantidad = function() {
			return getCantidadForMenu('VEGETARIANO');
		}

		$scope.getCeliacoCantidad = function() {
			return getCantidadForMenu('CELIACO');
		}

		$scope.getDiabeticoCantidad = function() {
			return getCantidadForMenu('DIABETICO');
		}

		function getCantidadForMenu(menu) {
			var total = 0;
			$scope.persons.forEach(function(person) {
				if (person.menu == menu) {
					total = total + 1;
				}
			})
			return total;
		}

    }]);
})();
