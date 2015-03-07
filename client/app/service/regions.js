import { REGIONS_URL } from "app/urls"

export default class RegionsService {
  constructor($http) {
    this.http = $http
  }

  list() {
    return this.http.get(REGIONS_URL)
  }
}
