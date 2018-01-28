var myApp = angular.module("myApp", ["ngRoute"]);

    myApp.config(function($routeProvider){
        $routeProvider
                .when("/home", {templateUrl: 'partials/home.html',
                        controller: "postCtrl"})
                .when("/comments/:id", {templateUrl: 'partials/comments.html',
                        controller: "commentCtrl"})
                .when("/articles", {templateUrl:'partials/article.html',controller: "commentCtrl", controller: "postCtrl"})        
                .otherwise({redirectTo: "/home"});

    });