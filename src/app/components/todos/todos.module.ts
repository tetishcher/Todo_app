import * as angular from 'angular';
import { TodosComponent } from './todos.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { TodoRemainingComponent } from './todo-remaining/todo-remaining.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoArchiveComponent } from './todo-archive/todo-archive.component';
import { TodoService } from '../../services/todo.service';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';

export const todosModule = angular
  .module(`todos.components`, [])
  .component('todos', TodosComponent)
  .component('todoFilter', TodoFilterComponent)
  .component('todoRemaining', TodoRemainingComponent)
  .component('todoList', TodoListComponent)
  .component('todoAdd', TodoAddComponent)
  .component('todoArchive', TodoArchiveComponent)
  .component('todoItem', TodoItemComponent)
  .service('TodoService', TodoService)
  .name;
