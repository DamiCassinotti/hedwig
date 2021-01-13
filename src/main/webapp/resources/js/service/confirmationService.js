(function () {
    angular.module('hedwigApp').service('ConfirmationService', ['homeFactory', function (homeFactory) {

		function confirmAssistance(persons) {
			return homeFactory.confirmAssistance(persons);
		}

		return {
            confirmAssistance: confirmAssistance,
        };

    }]);
})();
