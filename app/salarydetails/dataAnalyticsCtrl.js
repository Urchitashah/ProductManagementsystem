(function(){
   "use strict";
    angular
        .module("myApp")
        .controller("DataAnalyticsController",["$scope","products",DataAnalyticsController]);

        function DataAnalyticsController($scope,products)
        {

            $scope.title="Data Analytics";

            var chartData=[];

            for(var i=0;i<products.length;i++)
            {
                chartData.push({
                    x:products[i].name,
                    y:[products[i].price]
                });
            }

            $scope.dataValues={
                series:["Price","Sale Tax","Other Tax"],
                data:chartData
            };


            $scope.configValues={
                title:"Data Analytics",
                tooltips:true,
                labels:false,
                mouseover:function(){},
                mouseout:function(){},
                click:function(){},
                legend:{
                    display:true,
                    position:'right'
                }
            };


        }
}());