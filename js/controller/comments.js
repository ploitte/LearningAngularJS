
myApp.controller("commentCtrl", function($scope, postFactory, $routeParams, $rootScope, $filter){
    $rootScope.loading = true;

    $rootScope.chiffre = 2.654887563;

    $scope.testComment = "Test Comment ctrl";

    $scope.newComment = {
        username: "",
        city: "",
        email: "",
        content: ""
    };

    //Passe par la factory(Service) pour réccupérer les datas
    postFactory.getPost($routeParams.id).then(function(posts){
        $scope.tilte = posts.name;
        $scope.comments = posts.comments;
        console.log($scope.comments);
        $rootScope.loading = false;
    }, function(msg){
        alert(msg);
    });

    //Passe par la factory(Service) pour ajouter les datas
    $scope.addComment = function(){
        $scope.comments.push($scope.newComment);
        $scope.newComment = {};
    };

    //Function test pour héritage $scope Directive
    $scope.selectComment = function(){
        alert("Salut");
    }

});

//Filter Personnalisé
myApp.filter("round", function(){
    return function(input, precision){
        chiffre = Math.round(input * Math.pow(10, precision)) / Math.pow(10, precision);
        return chiffre.toString().replace(".", ",")+"€";
    }
})
