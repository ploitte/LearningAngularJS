myApp.controller("postCtrl", function($scope, postFactory, $rootScope){
    
    $rootScope.chiffre = 2.365254;
    
    $scope.testPost = "Test PostCtrl";

    $rootScope.loading = true;
   postFactory.getPosts().then(function(posts){
        $scope.posts = posts;   
        $rootScope.loading = false;
    },function(msg){
        alert(msg);
    });
});