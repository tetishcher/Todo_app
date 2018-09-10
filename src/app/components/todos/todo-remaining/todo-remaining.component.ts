export const TodoRemainingComponent = {
  bindings: { remaining: '<' },
  template: `
    <span class='text-muted mb-3'>{{ $ctrl.remaining }} remaining</span>
  `,
  controller: class TodoRemainingController {

  }
};
