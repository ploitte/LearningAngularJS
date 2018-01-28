myApp.directive("ngComment", function(){
    return {

        //A= Attribtut (<div ng-Comment></div>), E= Element(<ng-model></ng-model>), C= Class (<div class=""ng-comment></div>)
        restrict: "E",

        //Isolation(N'hérite pas du $scope du controller parent, crée son propre $scope)
        scope: {
            comment: "=",

            //Prend directement la chaine de caractere (Cest pareil)
            commenta: "@",

            //Réccupère une fonction du controller parent
            select: "&"

        },

        templateUrl: "partials/_comment.html"
    }

});


// myApp.directive("ngTime", function(dateFilter, $interval){
    
//     return {
//         restrict: "E",

//         scope:{},

//         template: "{{time}}",
        

            //Function qui permet d'utiliser du jquery evenement etc... 
//         link: function(scope, element, attrs){

//             element.on("$destroy", function(){
//                 $interval.cancel(interval);
//             });

//             interval = $interval(function(){
//                 scope.time = dateFilter(new Date(), "hh:mm:ss");
//                 console.log("time changed")
//             },1000)
//         }

//     }

// });


// myApp.directive("datepicker", function(){

//     return {
//         restrict : "C",
//         scope: {
//             options: "=optionsDate"
//         },
//         link: function(scope, element, attrs){

//             // element.on("click", function(){
//             //     alert("test");
//             // })

//             console.log(scope);
//             $(element).pickadate(scope.options);
//         }
//     }
// })


// myApp.directive("ngTest", function(){
    
//     return {

//         //Transclude: permet à la div enfant de réccupérer les données du controller
//         // Les scope de la directives n'influencent pas les enfants 
//         template: "<div>Salut {{username}}<div ng-transclude></div></div>",
//         transclude: true,
//         scope: {
//             username: "="
//         },
//         restrict: "A",
//         link: function(scope, element, attrs){

//         }

//     }
// })