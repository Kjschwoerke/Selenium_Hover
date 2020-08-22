let webdriver = require('selenium-webdriver'),
baseUrl = "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_hover"

//##############################################################################################
//Should get the link#2 in the drop down menu when active
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
    await driver.quit();
  })
  

    it('find item',async function(){
      await driver.get(baseUrl) //go to the website
      const iframe =  await driver.findElement({css:'#container > #iframecontainer > #iframe > #iframewrapper > iframe'}) //find the iframe containing the button
      await driver.switchTo().frame(iframe) //switch to the iframe to access inside content/elements
      const button = await driver.findElement({css: 'button'}) //find the button inside the iframe
      //button.click()
      const actions = driver.actions() //initiate dirver.actions()
      await actions.move({origin: button}).perform() //use the move action to move the mouse to the button
      let link = await driver.findElement({css: '.dropdown > .dropdown-content > a:nth-of-type(2)'}) //find the 'Link #2' inside the revealed dropdown menu
      await actions.move({origin: link}).perform() // move the mouse to link
      //link.click()
    });

});
  