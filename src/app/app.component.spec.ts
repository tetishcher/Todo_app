import './app.module';
import * as angular from 'angular';
import {} from 'jasmine';
import 'angular-mocks';
import 'phantomjs-polyfill';

describe('App component', () => {
    let scope: any;
    let ctrl: any;
    let componentController: any;
    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();
        componentController = $componentController;
        ctrl = componentController('app', {$scope: scope});
    }));
    
    it('component should exist', () => {
        expect(ctrl).toBeDefined();
    });
});
