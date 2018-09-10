import { TodoService } from '../../services/todo.service';

export class TodosController {
  public static $inject = ['TodoService'];
  public todos;
  public filterVal;

  constructor(public todoService: TodoService) {}

  public $onInit() {
    this.todos = this.todoService.getTodos();
    this.todoService.changedTodos.subscribe(
      todos => this.todos = todos
    );
  }

  public onFilter(filterVal) {
    this.filterVal = filterVal;
  }

  public onRemaining() {
    return this.todos.filter(item => !item.done).length;
  }
}
