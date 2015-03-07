export default (regionsService) => {
  var regionMap = new Map
  regionsService.list().success((data) =>
    angular.forEach(data, (v) => regionMap.set(v.id, v.name)))

  return (input) => {
    return regionMap.get(input)
  }
}
