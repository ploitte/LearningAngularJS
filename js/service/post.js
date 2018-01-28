myApp.factory("postFactory", function($http, $q, $timeout){
    var factory = {
            posts: false,
            getPosts: function(){
                let deferred = $q.defer();
                if(factory.posts !== false){
                    deferred.resolve(factory.posts);
                }else{
                    $timeout(function(){
                        $http.get("posts.json")
                            .then(function(response){
                        factory.posts = response.data;
                        deferred.resolve(factory.posts);
                    }, function(response){
                            deferred.reject("Impossible de charger les données");
                        })
                    }, 2000);
                }
                return deferred.promise;
            },
            getPost: function(id){
                let deferred = $q.defer();
                let posts = factory.getPosts().then(function(posts){
                    angular.forEach(posts, function(value, key){
                        if(key == id){
                            post = value;
                            deferred.resolve(post);
                        }
                    });
                }, function(msg){
                    deferred.reject("Un probleme est surevenu")
                }); 
                return deferred.promise;
            },
            addPost: function(comment){
                $http.post("post.json", comment);
            }
    }
    return factory;
});