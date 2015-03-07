export default class AddController {
  constructor($state, beansService, regionsService) {
    this.regions = []
    regionsService.list().success((data) => this.regions = data)
    this.register = function() {
      beansService.post(this.bean).success(() => $state.go('app.root.list'))
    };
  }
}
