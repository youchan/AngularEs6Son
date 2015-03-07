import { BEANS_URL } from 'app/urls'

export default class BeansService {
  constructor($http) {
    this.http = $http
  }

  list() {
    return this.http.get(BEANS_URL)
  }

  get(id) {
    return this.http.get(`${BEANS_URL}/${id}`)
  }

  post(bean) {
    return this.http.post(BEANS_URL, {
        brand: bean.brand,
        amount: bean.amount,
        importDate: bean.importDate && bean.importDate.toISOString(),
        region: bean.region
      })
  }

  put(id, bean) {
    return this.http.put(`${BEANS_URL}/${id}`, {
      brand: bean.brand,
      amount: bean.amount,
      importDate: bean.importDate && bean.importDate.toISOString(),
      region: bean.region
    })
  }

  delete(id) {
    return this.http.delete(`${BEANS_URL}/${id}`)
  }
}
