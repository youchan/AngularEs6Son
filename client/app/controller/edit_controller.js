export default class EditController {
  constructor($state, $stateParams, beansService, regionsService) {
    this.state = $state
    this.beansService = beansService
    this.regions = []
    regionsService.list()
      .success((data) => {
        this.regions = data

        beansService.get($stateParams.id)
          .success((data) => {
            data.importDate = data.importDate && new Date(data.importDate)
            this.bean = data
          })
      });
  }

  update(id) {
    this.beansService.put(id, this.bean).success(() => this.state.go('app.root.list'))
  }
}
