import { Subject } from 'rxjs';

export class TodoService {
  public changedTodos = new Subject();
  public todos = [
    { text: 'learn angular', done: true },
    { text: 'build an angular app', done: false },
    { text: 'modify', done: true },
    { text: 'test', done: false },
    { text: 'close', done: false }
  ];

  public getTodos() {
    return this.todos;
  }

  public removeTodo(index) {
    this.todos = this.todos.filter((todo, i) => i !== index);
    this.changedTodos.next(this.todos);
  }

  public addTodo(todo) {
    this.todos = [...this.todos, todo];
    this.changedTodos.next(this.todos);
  }

  public archiveTodos() {
    this.todos = this.todos.filter(todo => !todo.done);
    this.changedTodos.next(this.todos);
  }
}
