import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { appRoutes } from './app.config';
import { componentsModule } from './components/component.module';
import { servicesModule } from './services/service.module';
import { AppComponent } from './app.component';

export const root = angular
    .module('app', [
        uiRouter,
        componentsModule,
        servicesModule
    ])
    .component('app', AppComponent)
    .config(appRoutes)
    .name;
