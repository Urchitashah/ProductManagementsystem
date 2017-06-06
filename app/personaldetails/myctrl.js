(function(){
    //'use strict';
    
    angular
        .module("myApp")
        .controller("myController", ["productResource", myController]);
    
    function myController(productResource){
        var vm = this;
        
       /* vm.products = [
                        {
                            code:"P-1001", 
                            name:"Macbook Air", 
                            mfgdate:"05/10/2014", 
                            price:1449.99,
                            image:"images/1.png"
                        },
                        {
                            code:"P-1001", 
                            name:"Apple Watch", 
                            mfgdate:"09/21/2015", 
                            price:999.99,
                            image:"images/2.png"
                        },
                        {
                            code:"P-1001", 
                            name:"iPad Air 2", 
                            mfgdate:"02/06/2016", 
                            price:799,
                            image:"images/3.png"
                        }
                        ];*/
        
        productResource.query(function(data){
            vm.products = data;
        });
        
        vm.showImage = false;
        vm.toggleimage = function(){
            vm.showImage = !vm.showImage;
        };
    }
})(); 