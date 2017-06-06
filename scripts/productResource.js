(function(){
    "use strict";
    angular
        .module("common.service")
        .factory("productResource",["$resource", productResource]);

    function productResource($resource){
        return $resource ("/api/products/:prodId");
    }

})();
 