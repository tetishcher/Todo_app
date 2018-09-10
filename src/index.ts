import * as angular from 'angular';
import './index.scss';
import { root } from './app/app.module';

angular.bootstrap(document, [root], {
    strictDi: true
});
