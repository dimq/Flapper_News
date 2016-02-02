var app = angular.module('flapperNews', ['ui.router']);

app.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts){
        $scope.title = "";
        $scope.link = "";
        $scope.posts = posts.posts;
        $scope.addPost = function(){
            if(!$scope.title || $scope.title === ''){return;};
            $scope.posts.push({title: $scope.title,link: $scope.link , upvotes: 0});
            $scope.title = "";
            $scope.link = "";
        };
        $scope.delPost = function(item){
            console.log('item',item);
            var index = $scope.posts.indexOf(item);
            $scope.posts.splice(index,1);
        };
        $scope.incrementUpvotes = function(item){
            item.upvotes++;
        };
    }
]);

app.factory('posts',[function(){
    var o = {
        posts: []
    };
    return o;
}]);