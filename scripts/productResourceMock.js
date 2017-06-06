(function(){
    'use strict';
    
    var app = angular
                .module("productResourceMock", ["ngMockE2E"]);
    
    app.run(function($httpBackend){
        var products = [
                        {
                            prodId:1,
                            code:"P-1001", 
                            name:"Macbook Air", 
                            mfgdate:"05/10/2014", 
                            price:1449.99,
                            saletax:775,
                            othertax:425,
                            image:"images/1.png"
                        },
                        {
                            prodId:2,
                            code:"P-1002", 
                            name:"Apple Watch", 
                            mfgdate:"09/21/2015", 
                            price:999.99,
                            saletax:775,
                            othertax:425,
                            image:"images/2.png"
                        },
                        {
                            prodId:3,
                            code:"P-1003", 
                            name:"iPad Air 2", 
                            mfgdate:"02/06/2016", 
                            price:799,
                            saletax:775,
                            othertax:425,
                            image:"images/3.png"
                        }
                       ];
        
        var prodUrl = "/api/products";
        $httpBackend.whenGET(prodUrl).respond(products);

         var editingRegex = new RegExp(prodUrl+ "/[0-9][0-9]*",'');

         $httpBackend.whenGET(editingRegex).respond(function(method,url,data){


              var product = {"prodId":0};
              var parameters=url.split('/');
              var length = parameters.length;
              var id = parameters[length - 1];


              if(id>0)
              {
                   for(var i=0;i< products.length;i++) {
                        if(products[i].prodId==id) {
                            product = products[i];
                             break;
                        }
                   };
              }
              return [200,product,{}];

         });

         $httpBackend.whenPOST(prodUrl).respond(function(method,url,data){
            var product = angular.fromJson(data);

              if (!product.prodId) {
                   // new employee Id
                  product.prodId = products[products.length - 1].prodId + 1;
                   products.push(product);
              }
              else {
                   // Updated employee
                   for (var i = 0; i < products.length; i++) {
                        if (products[i].prodId == product.prodId) {
                             products[i] = product;
                             break;
                        }
                   };
              }
              return [200, product, {}];

         });

         $httpBackend.whenGET(/app/).passThrough();
    });

})();  