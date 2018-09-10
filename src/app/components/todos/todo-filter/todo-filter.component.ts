export const TodoFilterComponent = {
  bindings: { onFilter: '&' },
  template: `
  <input
    ng-keyup="$ctrl.onFilter({filterVal: $event.target.value})"
    type="text"
    class="form-control"
    placeholder="filter tasks">
  `,
  controller: class TodoFilterController {}
};
