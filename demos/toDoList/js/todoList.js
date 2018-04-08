angular.module('todoList', [])
    .controller('taskCtrl', function todoList($scope) {
        myStorage = window.localStorage;
        $scope.task = ""; //初始化输入框内容为空
        $scope.tasks = JSON.parse(myStorage.getItem("todoList"));
        if(!$scope.tasks){
            $scope.tasks = [];
        }
        $scope.addTodo = function () {
            if ($scope.task) {
                $scope.tasks.push($scope.task);//将输入结果存入task数组中
                myStorage.setItem("todoList", JSON.stringify($scope.tasks)); 
                $scope.task = "";//将输入框内容重新置空
            }
        }
        $scope.doneTasks = JSON.parse(myStorage.getItem("doneList"));
        if(!$scope.doneTasks){
            $scope.doneTasks = [];
        }
        $scope.doneTask = function(index){
            $scope.doneTasks.push($scope.tasks[index]);
            $scope.tasks.splice(index,1);//将做完的task从数组中清除
            myStorage.setItem("todoList", JSON.stringify($scope.tasks)); 
            myStorage.setItem("doneList", JSON.stringify($scope.doneTasks));             
        }
           
    })