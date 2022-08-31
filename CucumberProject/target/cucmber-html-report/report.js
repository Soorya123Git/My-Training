$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("shopping.feature");
formatter.feature({
  "id": "adding-items-to-basket",
  "tags": [
    {
      "name": "@Smoke",
      "line": 1
    },
    {
      "name": "@Sanity",
      "line": 1
    }
  ],
  "description": "",
  "name": "Adding items to basket",
  "keyword": "Feature",
  "line": 3
});
formatter.scenario({
  "id": "adding-items-to-basket;no-item-selected-in-basket",
  "description": "",
  "name": "No item selected in basket",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "I start the application",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I should see a selection of products",
  "keyword": "Then ",
  "line": 7
});
formatter.step({
  "name": "I browse \"without\" buying product",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "my basket \"should\" be empty",
  "keyword": "Then ",
  "line": 9
});
formatter.step({
  "name": "I \"cannot\" buy an item",
  "keyword": "And ",
  "line": 10
});
formatter.match({
  "location": "shoppingStep.I_start_the_application()"
});
formatter.result({
  "duration": 109691512,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 53243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "without",
      "offset": 10
    }
  ],
  "location": "shoppingStep.I_browse_without_buying_product(String)"
});
formatter.result({
  "duration": 1826941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should",
      "offset": 11
    }
  ],
  "location": "shoppingStep.my_basket_should_be_empty(String)"
});
formatter.result({
  "duration": 94297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cannot",
      "offset": 3
    }
  ],
  "location": "shoppingStep.I_cannot_buy_an_item(String)"
});
formatter.result({
  "duration": 100072,
  "status": "passed"
});
formatter.scenario({
  "id": "adding-items-to-basket;no-item-selected-in-basket",
  "description": "",
  "name": "No item selected in basket",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I start the application",
  "keyword": "Given ",
  "line": 13
});
formatter.step({
  "name": "I should see a selection of products",
  "keyword": "Then ",
  "line": 14
});
formatter.step({
  "name": "I browse \"with\" buying product",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "my basket \"shouldnot\" be empty",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "I \"can\" buy an item",
  "keyword": "And ",
  "line": 17
});
formatter.match({
  "location": "shoppingStep.I_start_the_application()"
});
formatter.result({
  "duration": 64789,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 49394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "with",
      "offset": 10
    }
  ],
  "location": "shoppingStep.I_browse_without_buying_product(String)"
});
formatter.result({
  "duration": 96222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldnot",
      "offset": 11
    }
  ],
  "location": "shoppingStep.my_basket_should_be_empty(String)"
});
formatter.result({
  "duration": 87242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "can",
      "offset": 3
    }
  ],
  "location": "shoppingStep.I_cannot_buy_an_item(String)"
});
formatter.result({
  "duration": 83393,
  "status": "passed"
});
});