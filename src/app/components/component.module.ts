import * as angular from 'angular';
import { todosModule } from './todos/todos.module';

export const componentsModule = angular
    .module('app.components', [
        todosModule
    ])
    .name;
