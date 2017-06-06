(function(){
    "use strict";
    //registering with common.services
    angular
        .module("common.service")
        .factory("productService",productService);

    function productService(){

        function calculateTax(price, tax)
        {

            var Tax =  (price * tax)/100;
            return Tax.toFixed(2);
        }
        
        //can have multiple functions in single service.
        return {
            calculateTax: calculateTax,

        };
    }
}());