//import { element } from "protractor";

describe('angularjs homepage', function() {
    browser.manage().window().maximize(); 
    it('should greet the named user', function() {
      // Load the AngularJS homepage.
      browser.get('http://www.angularjs.org');
      element(by.model('yourName')).sendKeys('Julie');

      // Find the element with binding matching 'yourName' - this will
      // find the <h1>Hello {{yourName}}!</h1> element.
      var greeting = element(by.binding('yourName'));
  
      // Assert that the text element has the expected value.
      // Protractor patches 'expect' to understand promises.
  
      expect(greeting.getText()).toEqual('Hello Julie!');
    });
});