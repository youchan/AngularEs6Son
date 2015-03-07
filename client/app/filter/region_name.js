import { REGIONS_URL } from 'app/urls';

export function regionNameFilter($http) {
  var region = [];
  $http.get(REGIONS_URL)
    .success(function(data) {
      region = data;
    });
  return function(input) {
    var ret = '';
    angular.forEach(region, function(v) {
      if (v.id === input) ret = v.name;
    });
    return ret;
  };
}
