const { Builder, By, Key, JavascriptExecutor, withTagName } = require("selenium-webdriver");
const { setTimeout } = require("timers");
const driver = new Builder().forBrowser('chrome').build();
 
async function iframes(){
    //navigate to our application
    await driver.get("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit");

    //iframe locator.
    //const iframeLocator = driver.findElement(By.css("iframe"));

    //Navigate to iframe   
    await driver.switchTo().frame('iframeResult');
   
    //retrieve text from iframe using find by xpath
    await driver.findElement(By.xpath("//input[@name='fname']")).sendKeys('Writing insde the iframe');

    driver.switchTo().parentFrame();

    //log returned text Your content goes here.
    //console.log("The Paragraph text is: " + text);
 
    //close the browser
    await driver.quit();
 
}
iframes()