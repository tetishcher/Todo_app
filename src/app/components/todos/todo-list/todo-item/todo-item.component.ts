import { TodoService } from '../../../../services/todo.service';

export const TodoItemComponent = {
  bindings: {
    todo: '<',
    index: '<'
  },
  template: `
    
  <li>
    <input type="checkbox" ng-model="$ctrl.todo.done">
    <span ng-class="{'done-true': $ctrl.todo.done}">{{$ctrl.todo.text}}</span>
    <a
      href="#"
      ng-click="$ctrl.onRemove($ctrl.index)"
    >remove</a>
  </li>

  `,
  controller: class TodoItemController {
    public static $inject = ['TodoService'];

    constructor(private todoService: TodoService) {}

    public onRemove(index) {
      this.todoService.removeTodo(index);
    }
  }
};
