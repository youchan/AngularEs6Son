export default (regionsService) => {
  var region = [];
  regionsService.list().success((data) => region = data)
  return (input) => {
    var ret = ''
    angular.forEach(region, (v) => { if (v.id === input) ret = v.name })
    return ret
  }
}
