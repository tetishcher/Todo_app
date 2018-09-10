appRoutes.$inject = ['$locationProvider'];

export function appRoutes($locationProvider: angular.ILocationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}
