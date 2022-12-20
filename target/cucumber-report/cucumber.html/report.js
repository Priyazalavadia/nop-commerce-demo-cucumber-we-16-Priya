$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 2,
  "name": "Computer Test",
  "description": "As  As user I want to navigate to nop commerce website",
  "id": "computer-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Computer"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 11265689500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User can verify Product  Added to Shopping Cart Successfully",
  "description": "",
  "id": "computer-test;user-can-verify-product--added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I Mouse hover on “Computer” Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click mousehoover and click on Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select Sort By position Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Add to cart Tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "i can verify the text \u0027Build your own computer\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select \"8GB [+$60.00]\" fromdropdown",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on HDD radio \"400 GB [+$100.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select OS radio \"Vista Premium [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select checkBox",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "verify the  Verify the price \"$1,475.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on ADD TO CARD Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the Message \"The product has been added to your shopping cart\" on TopGreen Bar After that close the bar clicking on the cross button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "close the bar clicking on the cross button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "MouseHover on Shopping cart and Click on GO TO CART button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify the Text \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Change the Qty to \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Verify the Total\"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click on checkbox “I agree with the terms of service\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click on “CHECKOUT”",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User can navigate to Register page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 284849500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.iMouseHoverOnComputerTabAndClick()"
});
formatter.result({
  "duration": 1487694200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.clickMousehooverAndClickOnDesktop()"
});
formatter.result({
  "duration": 631514600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.selectSortByPositionNameAToZ()"
});
formatter.result({
  "duration": 233318100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.clickOnAddToCartTab()"
});
formatter.result({
  "duration": 202300300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.iCanVerifyTheTextBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1213437600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 8
    }
  ],
  "location": "ComputerStep.select(String)"
});
formatter.result({
  "duration": 207487200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 8
    }
  ],
  "location": "ComputerStep.selectFromdropdown(String)"
});
formatter.result({
  "duration": 225031800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 20
    }
  ],
  "location": "ComputerStep.clickOnHDDRadio(String)"
});
formatter.result({
  "duration": 128377800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 17
    }
  ],
  "location": "ComputerStep.selectOSRadio(String)"
});
formatter.result({
  "duration": 165076800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.selectCheckBox()"
});
formatter.result({
  "duration": 178514200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,475.00",
      "offset": 30
    }
  ],
  "location": "ComputerStep.verifyTheVerifyThePrice(String)"
});
formatter.result({
  "duration": 325200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.clickOnADDTOCARDButton()"
});
formatter.result({
  "duration": 154803700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 20
    }
  ],
  "location": "ComputerStep.verifyTheMessageOnTopGreenBarAfterThatCloseTheBarClickingOnTheCrossButton(String)"
});
formatter.result({
  "duration": 749733200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.closeTheBarClickingOnTheCrossButton()"
});
formatter.result({
  "duration": 166480900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.mousehoverOnShoppingCartAndClickOnGOTOCARTButton()"
});
formatter.result({
  "duration": 1554944000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 17
    }
  ],
  "location": "ComputerStep.verifyTheText(String)"
});
formatter.result({
  "duration": 127242400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "ComputerStep.changeTheQtyTo(String)"
});
formatter.result({
  "duration": 345527300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.clickOnUpdateShoppingCart()"
});
formatter.result({
  "duration": 737654900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 17
    }
  ],
  "location": "ComputerStep.verifyTheTotal(String)"
});
formatter.result({
  "duration": 172788100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.clickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 145400400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.clickOnCHECKOUT()"
});
formatter.result({
  "duration": 740866000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerStep.userCanNavigateToRegisterPage()"
});
formatter.result({
  "duration": 112306200,
  "status": "passed"
});
formatter.after({
  "duration": 2071296600,
  "status": "passed"
});
});