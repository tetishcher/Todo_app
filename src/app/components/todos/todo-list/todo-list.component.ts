export const TodoListComponent = {
  bindings: {
    todos: '<',
    filterValue: '<'
  },
  template: require('./todo-list.component.html'),
  controller: class TodoListController {}
};
