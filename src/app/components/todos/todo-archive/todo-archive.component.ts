import { TodoService } from '../../../services/todo.service';

export const TodoArchiveComponent = {
  template: `
    <button
      ng-click="$ctrl.onArchive()"
      class="btn btn-danger mt-2">Archive</button>
  `,
  controller: class TodoArchiveController {
    public static $inject = ['TodoService'];
    constructor(private todoService: TodoService) {}
    public onArchive() {
      this.todoService.archiveTodos();
    }
  }
};
