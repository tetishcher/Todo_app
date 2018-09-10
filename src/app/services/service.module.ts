import * as angular from 'angular';
import { TodoService } from './todo.service';

export const servicesModule = angular
  .module('app.serviceModule', [])
  .service('todaService', TodoService).name;
