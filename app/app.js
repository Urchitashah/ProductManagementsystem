(function(){
    //'use strict';
    
    var app = angular.module("myApp", ["common.service", "ui.router", "ui.mask", "ui.bootstrap", "angularCharts", "productResourceMock"]);
    
    app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");
        
        $stateProvider   
            .state("home",{
                        url:"/home",
                        templateUrl:"app/personaldetails/home.html",
                        })
        
            .state("prodList",{
                        url:"/personaldetails",
                        templateUrl:"app/personaldetails/productlist.html",
                        controller: "myController",
                        controllerAs: "vm"
                        })
        
            .state("prodEdit",{
                                abstract:true,
                                url:"/personaldetails/edit/:prodId",
                                templateUrl:"app/personaldetails/prodEdit.html",
                                controller: "productEditController as vm",
                                resolve:{
                                    productResource :"productResource", 
                                    product: function(productResource,$stateParams) {

                                        var prodId = $stateParams.prodId;
                                        return productResource.get({prodId: prodId}).$promise;
                                    }
                                }

                            })
                            
        
            .state("prodEdit.personal",{
                                url:"/personal",
                                templateUrl:"app/personaldetails/prodEditPersonal.html"

                            })
            .state("prodEdit.price",{
                                url:"/price",
                                templateUrl:"app/personaldetails/prodEditPrice.html"

                            })
            .state("prodDetail",{
                            url:"/personaldetails/:prodId",
                            templateUrl:"app/personaldetails/prodDetails.html",
                            controller: "productDetailController as vm", 
                            resolve:{
                                productResource :"productResource", 
                                product: function(productResource, $stateParams) {
                                    var prodId = $stateParams.prodId;
                                    return productResource.get({prodId: prodId}).$promise;
                                    }
                                }
                            })
        .state("dataAnalytics",{

                                url: "/dataAnalytics",
                                templateUrl:"app/salarydetails/dataAnalytics.html",
                                controller:"DataAnalyticsController",
                                resolve: {
                                    productResource : "productResource",
                                    products: function(productResource){

                                        return productResource.query().$promise;
                                    }
                                }
                            })
        
        }]);
})(); 