(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
      .controller('ToBuycontroller', ToBuycontroller)
      .controller('AlreadyBoughtcontroller', AlreadyBoughtcontroller)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

      ToBuycontroller.$inject =['ShoppingListCheckOffService'];

      function ToBuycontroller(ShoppingListCheckOffService){
        var toBuyList =this;

        toBuyList.items =ShoppingListCheckOffService.getToBuyItems();

        toBuyList.buyItem = function(itemIndex){
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
      }

      AlreadyBoughtcontroller.$inject =['ShoppingListCheckoffService'];

      function AlreadyBoughtcontroller(ShoppingListCheckOffService) {
        var alreadyBougthList =this;

        alreadyBougthList.items = ShoppingListCheckOffService.AlreadyBoughtItems();
      }

      function ShoppingListCheckOffService(){
        var service = this;
        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "cokes", quantity: 2 },
            { name: "beers", quantity: 6 },
            { name: "apple", quantity: 4},
            { name: "bananas", quantity: 7 }
        ];
        var alreadyBoughtItems = [];
         
        service.buyItem = function(itemIndex) {
            var item = toBuyItems[itemIndex];

           alreadyBoughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        };

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service. getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };


      }
})();
