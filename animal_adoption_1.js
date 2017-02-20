describe("Adopting an animal",function(){
    it("Given I open the website",function(){
        // expect(browser.c)
        browser.get("http://www.thetestroom.com/jswebapp/");
// });
// it("When I Enter my name",function(){
        var h = require("C:\\Users\\Shikhar\\AppData\\Roaming\\npm\\node_modules\\protractor\\ParamProc\\zoo_home.js");
        h.enterName("ju");
        // element(by.model('person.name')).sendKeys('Julie');
// assert(true);
// });
// it("And I click continue",function(){
        element(by.buttonText("CONTINUE")).click();
// assert(true);
// });
// it("And I select animal I like",function(){
        element(by.model("animal")).$('[value="1"]').click();
// assert(true);
// });
//    
// it("Then I should reach confirmation page",function(){
// assert(true);
// });
// function (){
// assert(true);
// }
    });
    });