(function(){
   "use strict";

    angular
        .module("myApp")
        .controller("productDetailController",["product", "productService", productDetailController]);
    function productDetailController(product, productService){

        var vm=this;
        vm.product =  product;
        vm.title="Product Details " + vm.product.name;
        vm.product.price = vm.product.price;
        vm.product.saletax = (vm.product.saletax)/100;
        vm.product.othertax = (vm.product.othertax)/100;
        vm.saleTaxAmount = productService.calculateTax(vm.product.price, vm.product.saletax);
        vm.otherTaxAmount = productService.calculateTax(vm.product.price, vm.product.othertax);
        vm.finalPrice = parseFloat(vm.product.price) + parseFloat(vm.saleTaxAmount) + parseFloat(vm.otherTaxAmount);

        
    }
})();  
