angular.module('myApp')
  .factory('ModelProjet', function ($http, API) {
    return {
      get: function (obj){
        return $http({
          method: 'GET',
          //url: API.url + '/user/user.json'
          url: API.proj_fonct_url + '/' + obj.id
        });
      },
      list: function (){
        return $http({
          method: 'GET',
          //url: API.url + '/user/users.json'
          url: API.proj_fonct_url
        });
     
      
      create: function(user) {
        return $http({
          method: 'POST',
          url: API.url + '/projet',
          data: angular.toJson(user)
        })
      },
