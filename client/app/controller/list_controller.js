export default class ListController {
  constructor(beansService, regionsService) {
    this.beansService = beansService
    beansService.list().success((data) => this.beans = data)
    regionsService.list().success((data) => this.regions = data)
  }

  delete(id) {
    this.beansService.delete(id)
      .success(() => {
        this.beansService.list()
          .success((data) => this.beans = data)
      })
  }
}
