// const { type } = require('os');

const { type } = require('os');

require('dotenv').config()

let webdriver = require('selenium-webdriver'), 
assert = require('assert'),
username = process.env.SAUCE_USERNAME,
accessKey = process.env.SAUCE_ACCESS_KEY,
baseUrl = "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_hover"





//##############################################################################################
//Selenium should get the link in a drop down menu when active
//##############################################################################################
describe('Find & Access Drop Down Menu List Item', function() {
  this.timeout(40000)
  let driver

  
  beforeEach(async function() {
    driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build()
  })
  
  afterEach(async function() {
    // await driver.executeScript("sauce:job-result=" + (this.currentTest.state));
    await driver.quit();
  })
  

    it('find item',async function(){
      await driver.get(baseUrl)
      const iframe =  await driver.findElement({css:'#container > #iframecontainer > #iframe > #iframewrapper > iframe'})
      await driver.switchTo().frame(iframe)
      const button = await driver.findElement({css: 'button'})
      button.click()
      const actions = driver.actions()
      await actions.move({origin: button}).perform()
      let link = await driver.findElement({css: '.dropdown > .dropdown-content > a:nth-of-type(2)'})
      await actions.move({origin: link}).perform()
      link.click()
        // assert(
        //   button.isDisplayed(),
        //   link.isDisplayed()
        // )
    });

});
  