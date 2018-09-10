import { TodoService } from '../../../services/todo.service';

export const TodoAddComponent = {
  template: require('./todo-add.component.html'),
  controller: class TodoAddController {
    public static $inject = ['TodoService'];
    public newTodo = '';

    constructor(private todoService: TodoService) {}

    public onSubmit() {
      const todo = {
        text: this.newTodo,
        done: false
      };
      this.todoService.addTodo(todo);
      this.newTodo = null;
    }
  }
};
